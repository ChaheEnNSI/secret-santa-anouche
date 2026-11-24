# Captures d'écran façon iPhone de chaque étape du parcours.
import sys, time
from playwright.sync_api import sync_playwright

BASE = 'http://127.0.0.1:8787'
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/shots'
import os; os.makedirs(OUT, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-proxy-server'])
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True, locale='fr-FR')
    page = ctx.new_page()
    logs = []
    page.on('console', lambda m: logs.append(f'{m.type}: {m.text}'))
    page.on('pageerror', lambda e: logs.append(f'PAGEERROR: {e}'))
    page.goto(BASE)
    time.sleep(2.5)
    page.screenshot(path=f'{OUT}/1-accueil.png')
    page.screenshot(path=f'{OUT}/1b-accueil-full.png', full_page=True)

    page.click('.tag[data-name="Anouche"]')
    time.sleep(1)
    page.fill('#answer', 'paris')
    page.click('#answer-btn')
    time.sleep(1.2)
    page.screenshot(path=f'{OUT}/2-question-erreur.png')

    page.fill('#answer', 'saint etienne')
    page.click('#answer-btn')
    time.sleep(1.6)
    page.screenshot(path=f'{OUT}/3-cadeau.png')

    page.click('#gift')
    time.sleep(1.3)
    page.screenshot(path=f'{OUT}/4-ouverture.png')
    time.sleep(1.3)
    page.screenshot(path=f'{OUT}/5-roulette.png')
    time.sleep(4.6)
    page.screenshot(path=f'{OUT}/6-revele.png')
    time.sleep(1.5)
    page.screenshot(path=f'{OUT}/7-resultat-full.png', full_page=True)

    page.click("#screen-gift .back")
    time.sleep(1.5)
    page.screenshot(path=f'{OUT}/8-accueil-apres.png')

    # Version ordinateur
    desk = browser.new_context(viewport={'width': 1440, 'height': 900}, locale='fr-FR')
    d = desk.new_page()
    d.goto(BASE)
    time.sleep(2.5)
    d.screenshot(path=f'{OUT}/9-ordinateur.png')
    print('\n'.join(logs) or 'aucune erreur console')
    browser.close()
