import sys, time, os
from playwright.sync_api import sync_playwright
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/tree'
os.makedirs(OUT, exist_ok=True)
ARGS = ['--no-proxy-server', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=ARGS)
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True, locale='fr-FR')
    pg = ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
    pg.goto('http://127.0.0.1:8787')
    pg.wait_for_function('!!window.__santa.tree', timeout=40000)
    pg.evaluate('window.__santa.tree.holdRender = true')
    for i, a in enumerate([0.1, 1.2, 2.0]):
        pg.evaluate(f'window.__santa.tree.advance({a})'); time.sleep(0.3)
        pg.screenshot(path=f'{OUT}/home{i}.png')
    r = pg.locator('#tree').bounding_box()
    print('sapin:', r, '| erreurs:', errs or 'aucune')
    b.close()
