# Parcours réel avec la boule 3D : captures aux moments clés (simulation avancée image par image).
import os, sys, time
from playwright.sync_api import sync_playwright
BASE = 'http://127.0.0.1:8787'
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/flow'
os.makedirs(OUT, exist_ok=True)
ARGS = ['--no-proxy-server', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=ARGS)
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True, locale='fr-FR')
    pg = ctx.new_page()
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(BASE); time.sleep(3)
    pg.tap('.tag[data-name="Anouche"]'); time.sleep(1.2)
    box = pg.locator('#scanner').bounding_box()
    sx, sy = box['x'] + box['width'] / 2, box['y'] + box['height'] / 2
    pg.mouse.move(sx, sy); pg.mouse.down(); time.sleep(2.3); pg.mouse.up(); time.sleep(1.0)
    pg.tap('#enter-btn')
    pg.wait_for_function('window.__santa.ball && document.querySelector("#gift").classList.contains("is-gl")', timeout=30000)
    adv = lambda s: pg.evaluate(f'window.__santa.ball.advance({s})')
    adv(0.45); pg.screenshot(path=f'{OUT}/1-arrivee.png')
    adv(2.15); time.sleep(0.3); pg.screenshot(path=f'{OUT}/2-boule.png')
    gb = pg.locator('#gift').bounding_box()
    cx, cy = gb['x'] + gb['width'] / 2, gb['y'] + 178
    pts = [(-30, -20), (40, 30), (-50, 40), (20, -50), (55, -10), (-10, 60), (0, 0), (30, 30), (-30, 10)]
    n = 0
    for dx, dy in pts:
        if pg.locator('#gift').evaluate('g => g.classList.contains("is-open")') or pg.evaluate('document.querySelectorAll("#taps i.is-on").length === document.querySelectorAll("#taps i").length'): break
        pg.touchscreen.tap(cx + dx, cy + dy); n += 1
        adv(0.5); time.sleep(0.2)
        pg.screenshot(path=f'{OUT}/3-coup{n}.png')
    print('coups:', n, '| texte:', pg.inner_text('#gift-hint'))
    pg.wait_for_function('window.__santa.ball.shattered', timeout=20000)
    for i, d in enumerate([0.12, 0.2, 0.3, 0.5]):
        adv(d); pg.screenshot(path=f'{OUT}/4-eclat{i}.png')
    time.sleep(2.0); adv(0.6); pg.screenshot(path=f'{OUT}/5-carte.png')
    time.sleep(2.0); pg.screenshot(path=f'{OUT}/6-lutins.png')
    pg.wait_for_function('!document.querySelector("#after").hidden', timeout=30000)
    time.sleep(1.2); adv(3); pg.screenshot(path=f'{OUT}/7-revele.png')
    time.sleep(2.5); adv(6); pg.screenshot(path=f'{OUT}/8-fin.png')
    print('toile cachée à la fin:', pg.evaluate('document.querySelector("#gl").hidden'), '| nom:', pg.inner_text('#reveal-name'))
    pg.click('[data-action="replay"]'); time.sleep(1.5); adv(5); time.sleep(0.3); pg.screenshot(path=f'{OUT}/9-rejouer.png')
    pg.click('#screen-gift .back'); time.sleep(1.2); pg.screenshot(path=f'{OUT}/10-accueil.png')
    print('toile cachée sur l\'accueil:', pg.evaluate('document.querySelector("#gl").hidden'), '| lutin restant:', pg.evaluate('document.querySelectorAll("#elves .sitter").length'))
    print('erreurs JS :', errs or 'aucune')
    b.close()
