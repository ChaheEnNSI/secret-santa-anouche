// Lutin dessiné en SVG. Les poses et expressions se changent par classes CSS sur l'élément parent .elf :
// pose-down (bras le long du corps), pose-cross (bras croisés), pose-pinch (se pince le nez),
// pose-wave (salue), is-shifty (yeux qui furètent), is-shocked (bouche en O), is-sniffing.
let uid = 0;

export function elfSVG(variant = 0) {
  const red = ['#dc3350', '#98132e'];
  const green = ['#2fa66c', '#14663e'];
  const hat = variant ? red : green;
  const suit = variant ? green : red;
  const shoe = variant ? '#98132e' : '#14663e';
  const skin = '#f6cfae';
  const cream = '#f7f2e7';
  const id = `e${(uid += 1)}`; // dégradés propres à chaque lutin (un dégradé partagé disparaît si son premier porteur est caché)
  return `<svg class="elf__svg" viewBox="0 0 60 70" aria-hidden="true">
    <defs>
      <linearGradient id="${id}h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${hat[0]}"/><stop offset="1" stop-color="${hat[1]}"/></linearGradient>
      <linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${suit[0]}"/><stop offset="1" stop-color="${suit[1]}"/></linearGradient>
      <radialGradient id="${id}f" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stop-color="#ffe6cf"/><stop offset="1" stop-color="#f0bd96"/></radialGradient>
    </defs>
    <g class="leg leg-l"><path d="M25 54V62.6" stroke="${cream}" stroke-width="4.4" stroke-linecap="round"/><path d="M22.8 57.2h4.4M22.8 60.2h4.4" stroke="${suit[1]}" stroke-width="1.15"/><path d="M27.4 62.6C27.8 65.6 26 67.6 23.2 67.6H18.6C16.2 67.6 15 65.4 16.4 64C17.4 63 18.8 63.6 18.6 64.8C20.8 64.6 22 63.6 22.8 62.2Z" fill="${shoe}"/><circle cx="16.2" cy="63.4" r="1.2" fill="#e9c46a"/></g>
    <g class="leg leg-r"><path d="M35 54V62.6" stroke="${cream}" stroke-width="4.4" stroke-linecap="round"/><path d="M32.8 57.2h4.4M32.8 60.2h4.4" stroke="${suit[1]}" stroke-width="1.15"/><path d="M32.6 62.6C32.2 65.6 34 67.6 36.8 67.6H41.4C43.8 67.6 45 65.4 43.6 64C42.6 63 41.2 63.6 41.4 64.8C39.2 64.6 38 63.6 37.2 62.2Z" fill="${shoe}"/><circle cx="43.8" cy="63.4" r="1.2" fill="#e9c46a"/></g>
    <g class="arm arm-down arm-l"><path d="M23.5 43L18 54.5" stroke="${suit[0]}" stroke-width="4.6" stroke-linecap="round"/><path d="M18.7 53L18 54.6" stroke="${cream}" stroke-width="5.4" stroke-linecap="round"/><circle cx="17.4" cy="56.8" r="3" fill="${skin}"/></g>
    <g class="arm arm-down arm-r"><path d="M36.5 43L42 54.5" stroke="${suit[0]}" stroke-width="4.6" stroke-linecap="round"/><path d="M41.3 53L42 54.6" stroke="${cream}" stroke-width="5.4" stroke-linecap="round"/><circle cx="42.6" cy="56.8" r="3" fill="${skin}"/></g>
    <path d="M18.6 58.2C19.2 51.6 20.8 45.8 23 41H37C39.2 45.8 40.8 51.6 41.4 58.2C39.4 59.8 37.6 58 36.4 57.8C35.2 57.8 33.8 59.6 30 59.6C26.2 59.6 24.8 57.8 23.6 57.8C22.4 58 20.6 59.8 18.6 58.2Z" fill="url(#${id}s)"/>
    <path d="M22.4 41.2L24.8 45.4L27.4 42.4L30 46L32.6 42.4L35.2 45.4L37.6 41.2Z" fill="${cream}"/>
    <rect x="20.3" y="50.2" width="19.4" height="3.4" rx="1.1" fill="#2a1a10"/>
    <rect x="27.7" y="49.6" width="4.6" height="4.6" rx="0.9" fill="none" stroke="#e9c46a" stroke-width="1.3"/>
    <g class="arm arm-carry"><path d="M24.6 44.4Q34 50.5 45 46.8" stroke="${suit[0]}" stroke-width="4.6" stroke-linecap="round" fill="none"/><path d="M36.4 43.6L45.2 46.2" stroke="${suit[0]}" stroke-width="4.6" stroke-linecap="round"/><circle cx="46.4" cy="46.5" r="3.1" fill="${skin}"/></g>
    <g class="arm arm-cross"><path d="M21 47q9 4.5 18 0" stroke="${suit[0]}" stroke-width="4.6" stroke-linecap="round" fill="none"/><path d="M21 49.4q9 4.5 18 0" stroke="rgba(0,0,0,0.2)" stroke-width="1" fill="none"/><circle cx="21.6" cy="47.3" r="2.9" fill="${skin}"/><circle cx="38.4" cy="47.3" r="2.9" fill="${skin}"/></g>
    <path d="M20.8 30.2L11.6 25.4L17.6 35.6ZM39.2 30.2L48.4 25.4L42.4 35.6Z" fill="${skin}"/>
    <path d="M19 30.6L14.8 28.5L17.7 33ZM41 30.6L45.2 28.5L42.3 33Z" fill="#e9a98a"/>
    <circle cx="30" cy="31.6" r="10.6" fill="url(#${id}f)"/>
    <path d="M21.4 27.4Q25 23 31 25.2Q26.6 25.8 24.2 29.4Z" fill="#b9652a"/>
    <path d="M23.9 28.4q2.1-1.5 4.3-.4M31.8 28q2.2-1.1 4.3.4" stroke="#8a4a1c" stroke-width="1" fill="none" stroke-linecap="round"/>
    <g class="eyes"><g class="eye"><ellipse cx="26.2" cy="32" rx="1.75" ry="2.25" fill="#2a1a10"/><circle cx="26.8" cy="31.1" r="0.65" fill="#fff"/></g><g class="eye"><ellipse cx="33.8" cy="32" rx="1.75" ry="2.25" fill="#2a1a10"/><circle cx="34.4" cy="31.1" r="0.65" fill="#fff"/></g></g>
    <circle cx="22.9" cy="35.7" r="2.1" fill="rgba(233,110,110,0.5)"/><circle cx="37.1" cy="35.7" r="2.1" fill="rgba(233,110,110,0.5)"/>
    <ellipse class="nose" cx="30" cy="34.6" rx="1.7" ry="1.4" fill="#eaa07e"/>
    <g class="mouth mouth-smile"><path d="M26.4 37q3.6 3.8 7.2 0z" fill="#7a2f22"/><path d="M28.4 38.7q1.6.9 3.2 0-.5-.8-1.6-.8t-1.6.8z" fill="#e8798b"/></g>
    <ellipse class="mouth mouth-o" cx="30" cy="38.4" rx="2" ry="2.5" fill="#5a2418"/>
    <path class="mouth mouth-yuck" d="M26.2 38.4q1.3-1.4 2.6 0t2.6 0 2.4 0" stroke="#7a3b2b" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <g class="arm arm-pinch"><path d="M36.5 43.5Q47 44 33.6 36.8" stroke="${suit[0]}" stroke-width="4.4" stroke-linecap="round" fill="none"/><circle cx="31.8" cy="35.2" r="3" fill="${skin}"/></g>
    <path d="M19.8 22.6C21.4 11 27.6 5.2 35 6.6C42 8 47.2 12.8 50.8 19.6C44.6 16.6 41.4 18.2 40.4 22.6Z" fill="url(#${id}h)"/>
    <path d="M35 6.6C39.6 10 41.6 15.4 40.4 22.6" stroke="rgba(0,0,0,0.16)" stroke-width="1.2" fill="none"/>
    <path d="M23.4 18C24.8 12.6 28 9.4 32 8.6" stroke="rgba(255,255,255,0.28)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <rect x="18.2" y="21.4" width="23.6" height="6" rx="3" fill="${cream}"/>
    <path d="M20 26.7h20" stroke="rgba(0,0,0,0.1)" stroke-width="1.1" stroke-linecap="round"/>
    <g class="elf__bell"><circle cx="51.4" cy="21.2" r="3.1" fill="#e9c46a"/><circle cx="50.4" cy="20.2" r="0.9" fill="#fff6d6"/><path d="M49.7 22.5h3.4" stroke="#8a6421" stroke-width="0.8"/></g>
    <g class="arm arm-up arm-l"><path d="M24 44L15.4 16" stroke="${suit[0]}" stroke-width="4.6" stroke-linecap="round"/><path d="M16.2 18.8L15.5 16.4" stroke="${cream}" stroke-width="5.6" stroke-linecap="round"/><circle cx="15" cy="13.6" r="3.3" fill="${skin}"/></g>
    <g class="arm arm-up arm-r"><path d="M36 44L44.6 16" stroke="${suit[0]}" stroke-width="4.6" stroke-linecap="round"/><path d="M43.8 18.8L44.5 16.4" stroke="${cream}" stroke-width="5.6" stroke-linecap="round"/><circle cx="45" cy="13.6" r="3.3" fill="${skin}"/></g>
    <g class="sniff" stroke="${cream}" stroke-width="1.1" fill="none" stroke-linecap="round"><path d="M19.5 38q-1.8-1.6 0-3.2"/><path d="M16.2 39.1q-3-2.7 0-5.4"/></g>
  </svg>`;
}

// Version autonome (bras levés, bouche bée) pour être dessinée dans une image, hors de la page.
export function elfStandalone(variant = 0) {
  return elfSVG(variant).replace(
    '<svg class="elf__svg" viewBox="0 0 60 70" aria-hidden="true">',
    '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="280" viewBox="0 0 60 70"><style>.arm-down,.arm-cross,.arm-carry,.arm-pinch,.mouth-smile,.mouth-yuck,.sniff{display:none}</style>',
  );
}

// Crée un lutin prêt à poser dans la page.
export function makeElf(variant = 0, className = '') {
  const el = document.createElement('div');
  el.className = `elf ${className}`.trim();
  el.style.setProperty('--bd', `${(Math.random() * 3).toFixed(2)}s`);
  el.innerHTML = elfSVG(variant);
  return el;
}
