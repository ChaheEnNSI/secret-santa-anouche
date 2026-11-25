import sys, time
from playwright.sync_api import sync_playwright
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/ball'
import os; os.makedirs(OUT, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-proxy-server', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'])
    pg = b.new_page(viewport={'width': 390, 'height': 700}, device_scale_factor=2)
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('console', lambda m: errs.append(m.text) if m.type in ('error', 'warning') else None)
    pg.goto('http://127.0.0.1:8787/_ball.html')
    pg.wait_for_function('window.ready === true', timeout=20000)
    pg.evaluate('ball.stop(); document.querySelector("#gl").hidden = false; ball.advance(0.5)')
    pg.screenshot(path=f'{OUT}/00.png')
    pg.evaluate('ball.advance(6)')
    pg.screenshot(path=f'{OUT}/0.png')
    taps = [(210, 330), (150, 380), (240, 300), (200, 400), (170, 320), (230, 360)]
    for i, (x, y) in enumerate(taps):
        pg.evaluate(f'ball.tap({x}, {y}, {(i + 1) / len(taps)}, {str(i == len(taps) - 1).lower()})')
        pg.evaluate('ball.advance(0.9)')
        pg.screenshot(path=f'{OUT}/t{i + 1}.png')
    pg.evaluate('ball.setShaking(true)')
    pg.evaluate('ball.advance(0.4)')
    pg.screenshot(path=f'{OUT}/t7.png')
    pg.evaluate('ball.shatter()')
    for i, d in enumerate([0.1, 0.25, 0.3, 0.4, 1.2]):
        pg.evaluate(f'ball.advance({d})')
        pg.screenshot(path=f'{OUT}/s{i}.png')
    print('erreurs:', errs[:6] or 'aucune')
    b.close()
