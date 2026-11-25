# Film image par image, à temps virtuel : toutes les animations avancent du même pas, sans dépendre de la vitesse de la machine.
import os, sys, time, shutil
from playwright.sync_api import sync_playwright
BASE = 'http://127.0.0.1:8787'
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/film'
DSF = float(os.environ.get('DSF', '1.5'))
MAXF = int(os.environ.get('MAXF', '100000'))
shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT)
ARGS = ['--no-proxy-server', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
STEP_JS = """(dt) => {
  const seen = (window.__seen ||= new WeakSet());
  for (const a of document.getAnimations()) {
    if (a.playState === 'finished' || a.playState === 'idle') continue;
    let t = a.currentTime ?? 0;
    if (!seen.has(a)) { seen.add(a); try { a.pause(); } catch (e) {} } else t += dt;
    const end = a.effect?.getComputedTiming().endTime ?? Infinity;
    try { if (t >= end) a.finish(); else a.currentTime = t; } catch (e) {}
  }
  const b = window.__santa?.ball;
  if (b) { b.holdRender = true; if (!document.querySelector('#gl').hidden) b.advance(0); }
}"""
t_start = time.time()
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=ARGS)
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=DSF, is_mobile=True, has_touch=True, locale='fr-FR')
    pg = ctx.new_page()
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    # Les animations du chargement sont figées dès le départ, puis avancées image par image.
    pg.add_init_script("document.addEventListener('DOMContentLoaded', () => { const h = () => { for (const a of document.getAnimations()) { try { a.pause(); } catch (e) {} } }; h(); window.__hold = setInterval(h, 30); });")
    pg.clock.install()
    pg.goto(BASE)
    pg.wait_for_selector('.tag', state='attached', timeout=20000)
    pg.clock.pause_at(pg.evaluate('Date.now()') + 50)
    n = [0]; acc = [0.0]
    def frame():
        acc[0] += 1000 / 30
        ms = int(acc[0]); acc[0] -= ms
        pg.clock.run_for(ms)
        pg.evaluate(STEP_JS, ms)
        pg.screenshot(path=f'{OUT}/{n[0]:05d}.jpg', type='jpeg', quality=90)
        n[0] += 1
        if n[0] >= MAXF: raise SystemExit
    def run(seconds):
        for _ in range(round(seconds * 30)): frame()
    try:
        run(3.4)
        pg.tap('.tag[data-name="Anouche"]'); run(1.8)
        box = pg.locator('#scanner').bounding_box()
        sx, sy = box['x'] + box['width'] / 2, box['y'] + box['height'] / 2
        pg.mouse.move(sx, sy); pg.mouse.down(); run(0.3); pg.mouse.up(); run(1.5)
        pg.mouse.down(); run(2.2); pg.mouse.up(); run(2.0)
        pg.tap('#enter-btn')
        pg.wait_for_function('!!window.__santa.ball', timeout=60000)
        run(0.2)
        pg.wait_for_function('document.querySelector("#gift").classList.contains("is-gl") && !document.querySelector("#screen-gift").hidden', timeout=20000)
        print('boule prête à l\'image', n[0], f'({time.time() - t_start:.0f}s)', flush=True)
        run(3.0)
        gb = pg.locator('#gift').bounding_box()
        cx, cy = gb['x'] + gb['width'] / 2, gb['y'] + 178
        pg.mouse.move(cx - 70, cy); pg.mouse.down()
        for i in range(14): pg.mouse.move(cx - 70 + i * 10, cy); frame()
        pg.mouse.up(); run(1.2)
        pts = [(-30, -25), (42, 28), (-52, 36), (18, -55), (58, -8), (-8, 62), (0, 0), (30, 30), (-30, 10)]
        for dx, dy in pts:
            if pg.evaluate('document.querySelectorAll("#taps i.is-on").length >= document.querySelectorAll("#taps i").length'): break
            pg.touchscreen.tap(cx + dx, cy + dy); run(0.62)
        print('dernier coup à l\'image', n[0], f'({time.time() - t_start:.0f}s)', flush=True)
        for _ in range(30 * 25):
            frame()
            if not pg.evaluate('document.querySelector("#after").hidden'): break
        run(4.5)
    except SystemExit:
        pass
    print('images :', n[0], '| erreurs JS :', errs or 'aucune', f'| {time.time() - t_start:.0f}s', flush=True)
    b.close()
