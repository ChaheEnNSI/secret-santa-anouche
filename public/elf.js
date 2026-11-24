// Lutin dessiné en SVG. Les poses et expressions se changent par classes CSS sur l'élément parent .elf :
// pose-down (bras le long du corps), pose-cross (bras croisés), pose-pinch (se pince le nez),
// pose-wave (salue), is-shifty (yeux qui furètent), is-shocked (bouche en O), is-sniffing.
export function elfSVG(variant = 0) {
  const hat = variant ? '#b21f35' : '#1f7a4c';
  const suit = variant ? '#1f7a4c' : '#b21f35';
  const shoe = variant ? '#b21f35' : '#1f7a4c';
  const skin = '#f2c7a5';
  return `<svg class="elf__svg" viewBox="0 0 60 70" aria-hidden="true">
    <path class="leg leg-l" d="M24.5 57v9h-5" stroke="${shoe}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path class="leg leg-r" d="M35.5 57v9h5" stroke="${shoe}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <g class="arm arm-up arm-l"><path d="M24 44L15 15" stroke="${suit}" stroke-width="4.5" stroke-linecap="round"/><circle cx="15" cy="14" r="3.2" fill="${skin}"/></g>
    <g class="arm arm-up arm-r"><path d="M36 44L45 15" stroke="${suit}" stroke-width="4.5" stroke-linecap="round"/><circle cx="45" cy="14" r="3.2" fill="${skin}"/></g>
    <g class="arm arm-down arm-l"><path d="M23.5 43L18 55" stroke="${suit}" stroke-width="4.5" stroke-linecap="round"/><circle cx="17.6" cy="56.2" r="3" fill="${skin}"/></g>
    <g class="arm arm-down arm-r"><path d="M36.5 43L42 55" stroke="${suit}" stroke-width="4.5" stroke-linecap="round"/><circle cx="42.4" cy="56.2" r="3" fill="${skin}"/></g>
    <path d="M19.5 58L23 41h14l3.5 17z" fill="${suit}"/>
    <path d="M23 41h14l-7 6z" fill="#f7f2e7"/>
    <rect x="21.2" y="50" width="17.6" height="3.4" rx="1" fill="#e9c46a"/>
    <g class="arm arm-cross"><path d="M21 47q9 4.5 18 0" stroke="${suit}" stroke-width="4.6" stroke-linecap="round" fill="none"/><path d="M21 47q9 4.5 18 0" stroke="rgba(0,0,0,0.18)" stroke-width="1" fill="none" transform="translate(0 2.4)"/><circle cx="22" cy="47.4" r="2.9" fill="${skin}"/><circle cx="38" cy="47.4" r="2.9" fill="${skin}"/></g>
    <path d="M21.5 32l-7-3.5 5.5 7z M38.5 32l7-3.5-5.5 7z" fill="${skin}"/>
    <circle cx="30" cy="33" r="9" fill="#f6d2b2"/>
    <g class="eyes"><circle class="eye" cx="26.8" cy="32" r="1.35" fill="#2a1a10"/><circle class="eye" cx="33.2" cy="32" r="1.35" fill="#2a1a10"/></g>
    <circle cx="24.6" cy="35.6" r="1.7" fill="rgba(226,110,110,0.55)"/><circle cx="35.4" cy="35.6" r="1.7" fill="rgba(226,110,110,0.55)"/>
    <circle class="nose" cx="30" cy="34.5" r="1.5" fill="#e9a184"/>
    <path class="mouth mouth-smile" d="M27 36.6q3 2.6 6 0" stroke="#7a3b2b" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse class="mouth mouth-o" cx="30" cy="38" rx="1.7" ry="2.1" fill="#5a2418"/>
    <path class="mouth mouth-yuck" d="M26.4 38.2q1.2-1.3 2.4 0t2.4 0 2.4 0" stroke="#7a3b2b" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <g class="arm arm-pinch"><path d="M36.5 43.5Q47 44 33.6 36.4" stroke="${suit}" stroke-width="4.4" stroke-linecap="round" fill="none"/><circle cx="31.8" cy="35" r="3" fill="${skin}"/></g>
    <path d="M19.5 27Q23 10 34 9.5q11 0 17.5 9-8-3-11 8.5z" fill="${hat}"/>
    <rect x="19" y="24.5" width="22" height="5" rx="2.5" fill="#f7f2e7"/>
    <circle class="elf__bell" cx="51.5" cy="19.5" r="3" fill="#e9c46a"/>
    <g class="sniff" stroke="#f7f2e7" stroke-width="1.1" fill="none" stroke-linecap="round"><path d="M19.5 37.5q-1.8-1.6 0-3.2"/><path d="M16.2 38.6q-3-2.7 0-5.4"/></g>
  </svg>`;
}

// Crée un lutin prêt à poser dans la page.
export function makeElf(variant = 0, className = '') {
  const el = document.createElement('div');
  el.className = `elf ${className}`.trim();
  el.style.setProperty('--bd', `${(Math.random() * 3).toFixed(2)}s`);
  el.innerHTML = elfSVG(variant);
  return el;
}
