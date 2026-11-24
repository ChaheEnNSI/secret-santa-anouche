# Vidéo du parcours complet sur un écran de téléphone + captures clés.
import os, sys, time, shutil, glob
from playwright.sync_api import sync_playwright

BASE = 'http://127.0.0.1:8787'
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/video'
os.makedirs(OUT, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-proxy-server', '--enable-gpu-rasterization', '--ignore-gpu-blocklist'])
    ctx = browser.new_context(
        viewport={'width': 390, 'height': 844}, device_scale_factor=float(os.environ.get('DSF', '1')), is_mobile=True, has_touch=True,
        locale='fr-FR',
    )
    page = ctx.new_page()
    # Capture d'écran continue en pleine définition (2x) via le protocole Chrome.
    frames = []
    cdp = ctx.new_cdp_session(page)
    def on_frame(ev):
        frames.append((ev['metadata']['timestamp'], ev['data']))
        cdp.send('Page.screencastFrameAck', {'sessionId': ev['sessionId']})
    cdp.on('Page.screencastFrame', on_frame)
    cdp.send('Page.startScreencast', {'format': 'jpeg', 'quality': 88, 'maxWidth': 780, 'maxHeight': 1688, 'everyNthFrame': 1})
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(BASE)
    time.sleep(3.2)
    page.screenshot(path=f'{OUT}/a-accueil.png')

    page.tap('.tag[data-name="Anouche"]')
    time.sleep(0.3)
    page.screenshot(path=f'{OUT}/b-transition.png')
    time.sleep(1.2)
    page.screenshot(path=f'{OUT}/c-question.png')
    page.locator('#answer').type('Saint Etienne', delay=90)
    time.sleep(0.4)
    page.tap('#answer-btn')
    time.sleep(0.7)
    page.screenshot(path=f'{OUT}/d-verifie.png')
    time.sleep(1.6)
    page.screenshot(path=f'{OUT}/e-cadeau.png')
    time.sleep(1.2)

    page.tap('#gift')
    time.sleep(1.25)
    page.screenshot(path=f'{OUT}/f-ouverture.png')
    time.sleep(6.2)
    page.screenshot(path=f'{OUT}/g-revele.png')

    # Inclinaison de la carte (simulée à la souris dans la vidéo)
    box = page.locator('#reveal').bounding_box()
    cx, cy = box['x'] + box['width'] / 2, box['y'] + box['height'] / 2
    page.mouse.move(cx, cy)
    for i in range(30):
        page.mouse.move(cx + (i - 15) * 9, cy + ((i % 10) - 5) * 4)
        time.sleep(0.03)
    page.screenshot(path=f'{OUT}/h-inclinaison.png')
    page.mouse.move(5, 5)
    time.sleep(1.0)
    page.mouse.wheel(0, 500)
    time.sleep(1.5)
    page.mouse.wheel(0, -500)
    time.sleep(1.0)
    cdp.send('Page.stopScreencast')
    print('erreurs JS :', errors or 'aucune', '| images :', len(frames))
    ctx.close()
    browser.close()

import base64
fdir = f'{OUT}/frames'; os.makedirs(fdir, exist_ok=True)
lines = []
for i, (ts, data) in enumerate(frames):
    path = f'{fdir}/{i:05d}.jpg'
    open(path, 'wb').write(base64.b64decode(data))
    dur = (frames[i + 1][0] - ts) if i + 1 < len(frames) else 0.5
    lines.append(f"file '{path}'\nduration {max(dur, 0.001):.4f}")
lines.append(f"file '{fdir}/{len(frames) - 1:05d}.jpg'")
open(f'{OUT}/frames.txt', 'w').write('\n'.join(lines) + '\n')
