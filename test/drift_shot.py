import sys, time, os
from playwright.sync_api import sync_playwright
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/drift'
os.makedirs(OUT, exist_ok=True)
ARGS = ['--no-proxy-server', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=ARGS)
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True, locale='fr-FR')
    pg = ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://127.0.0.1:8787')
    pg.wait_for_function('!!window.__santa.tree', timeout=40000)
    time.sleep(14)
    pg.screenshot(path=f'{OUT}/a.png')
    # coup de doigt sur le titre
    box = pg.locator('.title__svg').bounding_box()
    y = box['y'] + box['height'] * 0.3
    pg.mouse.move(box['x'] + 40, y); pg.mouse.down()
    for i in range(12): pg.mouse.move(box['x'] + 40 + i * 14, y + (i % 3)); time.sleep(0.02)
    pg.mouse.up(); time.sleep(0.25)
    pg.screenshot(path=f'{OUT}/b.png')
    print('erreurs:', errs or 'aucune')
    b.close()
