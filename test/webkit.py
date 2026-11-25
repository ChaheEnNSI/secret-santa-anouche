# Parcours sur le moteur de Safari (WebKit), avec un profil d'iPhone.
import sys, time, os
from playwright.sync_api import sync_playwright
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/wk'
os.makedirs(OUT, exist_ok=True)
with sync_playwright() as p:
    dev = p.devices['iPhone 15']
    b = p.webkit.launch()
    ctx = b.new_context(**dev, locale='fr-FR')
    pg = ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append('ERREUR ' + str(e)))
    pg.on('console', lambda m: errs.append(f'{m.type}: {m.text}') if m.type in ('error', 'warning') else None)
    pg.goto('http://127.0.0.1:8787')
    time.sleep(6)
    pg.screenshot(path=f'{OUT}/1-accueil.png')
    has_tree = pg.evaluate('!!window.__santa.tree')
    webgl = pg.evaluate("!!document.createElement('canvas').getContext('webgl')")
    print('webgl:', webgl, '| sapin:', has_tree)
    if has_tree:
        pg.evaluate('window.__santa.tree.pickByName("Mika")')
        pg.wait_for_function('!document.querySelector("#screen-question").hidden', timeout=60000)
    else:
        pg.click('#list-toggle') if pg.is_visible('#list-toggle') else None
        pg.tap('.tag[data-name="Mika"]')
        pg.wait_for_function('!document.querySelector("#screen-question").hidden', timeout=20000)
    time.sleep(1.5)
    pg.screenshot(path=f'{OUT}/2-controle.png')
    box = pg.locator('#scanner').bounding_box()
    print('scanner:', box)
    pg.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2)
    pg.mouse.down(); time.sleep(0.9)
    pg.screenshot(path=f'{OUT}/3-scan.png')
    time.sleep(1.6); pg.mouse.up(); time.sleep(1.2)
    pg.screenshot(path=f'{OUT}/4-verdict.png')
    print('statut:', pg.inner_text('#scan-status'))
    pg.click('#enter-btn')
    pg.wait_for_function('!document.querySelector("#screen-gift").hidden', timeout=30000)
    time.sleep(3)
    print('boule 3D:', pg.evaluate('document.querySelector("#gift").classList.contains("is-gl")'))
    pg.screenshot(path=f'{OUT}/5-boule.png')
    gb = pg.locator('#gift').bounding_box()
    for i in range(10):
        if pg.evaluate('document.querySelector("#gift").classList.contains("is-open")'): break
        pg.mouse.click(gb['x'] + gb['width'] / 2 + (i % 3 - 1) * 20, gb['y'] + 178)
        time.sleep(0.7)
    time.sleep(0.5); pg.screenshot(path=f'{OUT}/6-eclat.png')
    time.sleep(3); pg.screenshot(path=f'{OUT}/7-lutins.png')
    pg.wait_for_function('!document.querySelector("#after").hidden', timeout=90000)
    time.sleep(1.5); pg.screenshot(path=f'{OUT}/8-final.png')
    print('prénom affiché:', pg.evaluate('document.querySelector("#reveal-name .board")?.getAttribute("aria-label")'))
    print('\n'.join(errs[:12]) or 'aucune erreur')
    b.close()
