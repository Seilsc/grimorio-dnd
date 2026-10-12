// Datos fieles al Excel hechizos_de_dungeons_and_dragons.xlsx
// nivelBase = nivel al que aplica dadosBase. Fuera de [nivelMin, nivelMax] => no lanzable ("–").
// icon = nombre de icono Lucide (ver components/SpellIcon.jsx).

export const SPELLS = [
  {
    id: 'bola-fuego',
    nombre: 'Bola de fuego',
    icon: 'Flame',
    nivelMin: 3, nivelMax: 9, nivelBase: 3,
    tirada: 'salv-des', tiradaLabel: 'Salvación DES',
    tipoDano: 'fuego', color: '#f97316',
    dadosBase: 8, extraPorNivel: 1, caras: 6, fijo: 0, saveFraction: 0.5,
    area: true,
    notas: 'Área. Mitad de daño si supera la salvación. No incluye Evasión.',
  },
  {
    id: 'causar-heridas',
    nombre: 'Causar heridas',
    icon: 'Sword',
    nivelMin: 1, nivelMax: 9, nivelBase: 1,
    tirada: 'ataque', tiradaLabel: 'Ataque (CA)',
    tipoDano: 'necrótico', color: '#a855f7',
    dadosBase: 3, extraPorNivel: 1, caras: 10, fijo: 0,
    notas: 'Ataque cuerpo a cuerpo.',
  },
  {
    id: 'cuchillo-hielo',
    nombre: 'Cuchillo de hielo',
    icon: 'Snowflake',
    nivelMin: 1, nivelMax: 9, nivelBase: 1,
    tirada: 'mixto', tiradaLabel: 'Ataque + salv. DES',
    tipoDano: 'perforante + frío', color: '#38bdf8',
    dadosBase: 1, extraPorNivel: 0, caras: 10, fijo: 0,
    explosion: { dadosBase: 2, extraPorNivel: 1, caras: 6, saveFraction: 0 },
    notas: 'Daño de ataque (fijo 1d10) + explosión. La explosión ocurre aunque falles el ataque y NO tiene mitad de daño (todo o nada).',
  },
  {
    id: 'dedo-muerte',
    nombre: 'Dedo de la muerte',
    icon: 'Skull',
    nivelMin: 7, nivelMax: 7, nivelBase: 7,
    tirada: 'salv-con', tiradaLabel: 'Salvación CON',
    tipoDano: 'necrótico', color: '#a855f7',
    dadosBase: 7, extraPorNivel: 0, caras: 8, fijo: 30, saveFraction: 0.5,
    notas: 'Solo nivel 7 (7d8+30): un espacio mayor no aumenta el daño. Mitad si supera.',
  },
  {
    id: 'desintegrar',
    nombre: 'Desintegrar',
    icon: 'Atom',
    nivelMin: 6, nivelMax: 9, nivelBase: 6,
    tirada: 'salv-des', tiradaLabel: 'Salvación DES',
    tipoDano: 'fuerza', color: '#60a5fa',
    dadosBase: 10, extraPorNivel: 3, caras: 6, fijo: 40, saveFraction: 0,
    notas: 'Si supera la salvación no recibe nada (0).',
  },
  {
    id: 'lluvia-meteoritos',
    nombre: 'Lluvia de meteoritos',
    icon: 'CloudHail',
    nivelMin: 9, nivelMax: 9, nivelBase: 9,
    tirada: 'salv-des', tiradaLabel: 'Salvación DES',
    tipoDano: 'fuego + contundente', color: '#ef4444',
    dadosBase: 40, extraPorNivel: 0, caras: 6, fijo: 0, saveFraction: 0.5,
    area: true,
    notas: 'Solo nivel 9 (20d6 fuego + 20d6 contundente). Mitad si supera. Un objetivo solo recibe un meteorito.',
  },
  {
    id: 'manos-ardientes',
    nombre: 'Manos ardientes',
    icon: 'FlameKindling',
    nivelMin: 1, nivelMax: 9, nivelBase: 1,
    tirada: 'salv-des', tiradaLabel: 'Salvación DES',
    tipoDano: 'fuego', color: '#f97316',
    dadosBase: 3, extraPorNivel: 1, caras: 6, fijo: 0, saveFraction: 0.5,
    notas: 'Cono de 4,5 m. Mitad si supera. No incluye Evasión.',
  },
  {
    id: 'marchitar',
    nombre: 'Marchitar',
    icon: 'Ghost',
    nivelMin: 4, nivelMax: 9, nivelBase: 4,
    tirada: 'salv-con', tiradaLabel: 'Salvación CON',
    tipoDano: 'necrótico', color: '#a855f7',
    dadosBase: 8, extraPorNivel: 1, caras: 8, fijo: 0, saveFraction: 0.5,
    notas: 'No afecta a no-muertos ni constructos. Mitad si supera.',
  },
  {
    id: 'orbe-cromatico',
    nombre: 'Orbe cromático',
    icon: 'CircleDot',
    nivelMin: 1, nivelMax: 9, nivelBase: 1,
    tirada: 'ataque', tiradaLabel: 'Ataque (CA)',
    tipoDano: 'a elegir', color: '#2dd4bf',
    dadosBase: 3, extraPorNivel: 1, caras: 8, fijo: 0,
    notas: 'Ataque a distancia. Tipo a elegir: ácido, frío, fuego, rayo, veneno o trueno.',
  },
  {
    id: 'proyectil-magico',
    nombre: 'Proyectil mágico',
    icon: 'WandSparkles',
    nivelMin: 1, nivelMax: 9, nivelBase: 1,
    tirada: 'auto', tiradaLabel: 'Automático',
    tipoDano: 'fuerza', color: '#60a5fa',
    dardosBase: 3, dardosExtra: 1,
    notas: 'Nunca falla. El conjuro Escudo lo anula por completo. 1d4+1 por dardo.',
  },
  {
    id: 'rayo-abrasador',
    nombre: 'Rayo abrasador',
    icon: 'Zap',
    nivelMin: 2, nivelMax: 9, nivelBase: 2,
    tirada: 'ataque', tiradaLabel: 'Ataque (CA)',
    tipoDano: 'fuego', color: '#f97316',
    rayosBase: 3, rayosExtra: 1, dadosPorRayo: 2, caras: 6,
    notas: 'Un ataque a distancia por cada rayo (todos al mismo objetivo). 2d6 por rayo.',
  },
  {
    id: 'virote-guia',
    nombre: 'Virote guía',
    icon: 'Crosshair',
    nivelMin: 1, nivelMax: 9, nivelBase: 1,
    tirada: 'ataque', tiradaLabel: 'Ataque (CA)',
    tipoDano: 'radiante', color: '#facc15',
    dadosBase: 4, extraPorNivel: 1, caras: 6, fijo: 0,
    notas: 'Ataque a distancia. No cuenta la ventaja que da al siguiente ataque.',
  },
];

export const getSpell = (id) => SPELLS.find((s) => s.id === id);

// Tipos de daño configurables como resistencia del objetivo.
export const RES_TYPES = [
  { key: 'fuego', label: 'Fuego', icon: 'Flame' },
  { key: 'frio', label: 'Frío', icon: 'Snowflake' },
  { key: 'necrotico', label: 'Necrótico', icon: 'Skull' },
  { key: 'fuerza', label: 'Fuerza', icon: 'Atom' },
  { key: 'contundente', label: 'Contundente', icon: 'Hammer' },
  { key: 'perforante', label: 'Perforante', icon: 'Slice' },
  { key: 'radiante', label: 'Radiante', icon: 'Sun' },
  { key: 'relampago', label: 'Relámpago', icon: 'Zap' },
  { key: 'acido', label: 'Ácido', icon: 'FlaskConical' },
  { key: 'veneno', label: 'Veneno', icon: 'Biohazard' },
  { key: 'trueno', label: 'Trueno', icon: 'Volume2' },
  { key: 'cortante', label: 'Cortante', icon: 'Axe' },
  { key: 'psiquico', label: 'Psíquico', icon: 'Brain' },
];

export const RES_STATES = [
  { v: 1, label: '×1', desc: 'Normal' },
  { v: 0.5, label: '×½', desc: 'Resiste' },
  { v: 0, label: '×0', desc: 'Inmune' },
  { v: 2, label: '×2', desc: 'Vulnerable' },
];

export const TIRADA_COLORS = {
  'ataque': '#f87171',
  'salv-des': '#fb923c',
  'salv-con': '#c084fc',
  'auto': '#4ade80',
  'mixto': '#38bdf8',
};

// Clases con lanzamiento de conjuros (ES). Caballero arcano y pícaro arcano
// usan la lista de mago como aproximación (limitada por escuela en mesa).
export const CLASES = [
  { key: 'todas', label: 'Todas las clases' },
  { key: 'artifice', label: 'Artífice' },
  { key: 'barbaro', label: 'Bárbaro' },
  { key: 'bardo', label: 'Bardo' },
  { key: 'caballero', label: 'Caballero arcano' },
  { key: 'clerigo', label: 'Clérigo' },
  { key: 'druida', label: 'Druida' },
  { key: 'explorador', label: 'Explorador' },
  { key: 'guerrero', label: 'Guerrero' },
  { key: 'hechicero', label: 'Hechicero' },
  { key: 'brujo', label: 'Brujo' },
  { key: 'mago', label: 'Mago' },
  { key: 'monje', label: 'Monje' },
  { key: 'paladin', label: 'Paladín' },
  { key: 'picaro', label: 'Pícaro' },
  { key: 'picaro-arcano', label: 'Pícaro arcano' },
];

export const claseLabel = (key) => CLASES.find((c) => c.key === key)?.label ?? key;

// modo: 'hechizos' (conjuros + trucos), 'mele' (armas y rasgos), 'todos'.
export function spellsFor(clase, modo = 'todos', nivelPJ = null) {
  let base;
  if (!clase || clase === 'todas') base = SPELLS;
  else if (clase === 'caballero' || clase === 'picaro-arcano') base = SPELLS.filter((s) => s.clases.includes('mago'));
  else base = SPELLS.filter((s) => s.clases.includes(clase));
  if (nivelPJ != null) base = base.filter((s) => usablePor(s, clase, nivelPJ));
  if (modo === 'mele') return base.filter((s) => s.cat === 'mele');
  if (modo === 'hechizos') return base.filter((s) => s.cat !== 'mele');
  return base;
}

// Nivel máximo de espacio de conjuro por clase y nivel de personaje (PHB + TCoE).
// null = sin restricción (todas). 0 = sin espacios (no lanzadores).
export function espacioMaximo(clase, nivelPJ) {
  const n = nivelPJ ?? 4;
  switch (clase) {
    case 'bardo': case 'clerigo': case 'druida': case 'hechicero': case 'mago':
      return Math.min(9, Math.ceil(n / 2));
    case 'brujo': // magia de pacto (+ arcanos 6-9 desde nv. 11)
      if (n >= 17) return 9; if (n >= 15) return 8; if (n >= 13) return 7; if (n >= 11) return 6;
      if (n >= 9) return 5; if (n >= 7) return 4; if (n >= 5) return 3; if (n >= 3) return 2; return 1;
    case 'paladin': case 'explorador':
      if (n < 2) return 0; return Math.min(5, Math.floor((n - 1) / 4) + 1);
    case 'artifice':
      return Math.min(5, Math.floor((n - 1) / 4) + 1);
    case 'caballero': case 'picaro-arcano': // lanzadores de un tercio
      if (n < 3) return 0; if (n >= 19) return 4; if (n >= 13) return 3; if (n >= 7) return 2; return 1;
    case 'barbaro': case 'guerrero': case 'monje': case 'picaro':
      return 0;
    default:
      return null;
  }
}

// ¿puede usar esta entrada con esa clase y nivel? Melé y trucos siempre;
// los conjuros de nivel, solo si tiene espacio suficiente.
export function usablePor(entry, clase, nivelPJ) {
  if (!clase || clase === 'todas') return true;
  if (entry.cat === 'mele' || entry.truco) return true;
  const max = espacioMaximo(clase, nivelPJ);
  return max != null && max > 0 && entry.nivelMin <= max;
}

// Curaciones disponibles por clase y nivel de personaje (como spellsFor pero
// para CURAS). min = espacio mínimo necesario; las de reserva por nivel
// (fijoPJ/dadosPJ, p. ej. Imposición de manos) no gastan espacio y valen
// siempre que la clase cuadre. Con 'todas' no se filtra por nivel.
export function curasFor(clase, nivelPJ = null) {
  const base = (!clase || clase === 'todas')
    ? [...CURAS]
    : CURAS.filter((c) => c.clases.includes(clase));
  if (nivelPJ == null || !clase || clase === 'todas') return base;
  const max = espacioMaximo(clase, nivelPJ);
  if (max == null) return base;
  return base.filter((c) => c.fijoPJ || c.dadosPJ || (c.min ?? 1) <= max);
}

// Slugs oficiales en inglés (D&D Beyond, sitio oficial de D&D).
export const DDB_SPELL = {
  'bola-fuego': 'fireball', 'causar-heridas': 'inflict-wounds', 'cuchillo-hielo': 'ice-knife',
  'dedo-muerte': 'finger-of-death', 'desintegrar': 'disintegrate', 'lluvia-meteoritos': 'meteor-swarm',
  'manos-ardientes': 'burning-hands', 'marchitar': 'blight', 'orbe-cromatico': 'chromatic-orb',
  'proyectil-magico': 'magic-missile', 'rayo-abrasador': 'scorching-ray', 'virote-guia': 'guiding-bolt',
  'ola-trueno': 'thunderwave', 'reprension-infernal': 'hellish-rebuke', 'catapulta': 'catapult',
  'rayo-caos': 'chaos-bolt', 'susurros-disonantes': 'dissonant-whispers', 'fragmentar': 'shatter',
  'nube-dagas': 'cloud-of-daggers', 'esfera-llameante': 'flaming-sphere', 'rayo-lunar': 'moonbeam',
  'calentar-metal': 'heat-metal', 'arma-espiritual': 'spiritual-weapon', 'aganazzar': 'aganazzars-scorcher',
  'granizo-snilloc': 'snillocs-snowball-swarm', 'diablo-polvo': 'dust-devil', 'relampago': 'lightning-bolt',
  'tierra-erupcion': 'erupting-earth', 'toque-vampirico': 'vampiric-touch', 'guardianes-espirituales': 'spirit-guardians',
  'llamar-relampago': 'call-lightning', 'paso-trueno': 'thunder-step', 'tormenta-hielo': 'ice-storm',
  'esfera-vitriolica': 'vitriolic-sphere', 'muro-fuego': 'wall-of-fire', 'cono-frio': 'cone-of-cold',
  'nube-asesina': 'cloudkill', 'plaga-insectos': 'insect-plague', 'energia-negativa': 'negative-energy-flood',
  'ola-destructiva': 'destructive-wave', 'descarga-conjunta': 'conjure-volley', 'cadena-relampagos': 'chain-lightning',
  'rayo-solar': 'sunbeam', 'esfera-congelacion': 'otilukes-freezing-sphere', 'barrera-cuchillas': 'blade-barrier',
  'dano': 'harm', 'tormenta-fuego': 'fire-storm', 'bola-fuego-retardada': 'delayed-blast-fireball',
  'explosion-solar': 'sunburst', 'nube-incendiaria': 'incendiary-cloud', 'marchitamiento-horrible': 'abi-dalzims-horrid-wilting',
  'circulo-muerte': 'circle-of-death', 'rociada-prismatica': 'prismatic-spray', 'grito-psiquico': 'psychic-scream',
  'guardian-fe': 'guardian-of-faith',
  't-descarga-fuego': 'fire-bolt', 't-descarga-sobrenatural': 'eldritch-blast', 't-rayo-escarcha': 'ray-of-frost',
  't-toque-helado': 'chill-touch', 't-agarre-electrico': 'shocking-grasp', 't-rociada-veneno': 'poison-spray',
  't-salpicadura-acida': 'acid-splash', 't-llama-sagrada': 'sacred-flame', 't-toque-muerte': 'toll-the-dead',
  't-palabra-resplandor': 'word-of-radiance', 't-burla-cruel': 'vicious-mockery', 't-latigo-espinas': 'thorn-whip',
  't-producir-llama': 'produce-flame', 't-hoguera': 'create-bonfire', 't-mordisco-escarcha': 'frostbite',
  't-trueno': 'thunderclap', 't-explosion-espadas': 'sword-burst', 't-atraccion-relampago': 'lightning-lure',
  't-aguijon-mental': 'mind-sliver', 't-salvajismo-primigenio': 'primal-savagery', 't-infestacion': 'infestation',
  'castigo-divino': 'divine-smite', 'm-marca-cazador': 'hunters-mark', 'm-maleficio': 'hex',
  'c-curar-heridas': 'cure-wounds', 'c-palabra-curativa': 'healing-word', 'c-bayas': 'goodberry',
  'c-ayuda': 'aid', 'c-plegaria': 'prayer-of-healing', 'c-palabra-masa': 'mass-healing-word',
  'c-aura-vitalidad': 'aura-of-vitality', 'c-transferencia': 'life-transference', 'c-espiritu': 'healing-spirit',
  'c-curar-masa': 'mass-cure-wounds', 'c-festin': 'heroes-feast', 'c-curar6': 'heal',
  'c-regenerar': 'regenerate', 'c-curar-masa9': 'mass-heal', 'c-palabra-cura': 'power-word-heal',
  'c-auxilio': 'spare-the-dying',
  'u-orientacion': 'guidance', 'u-reparar': 'mending', 'u-mensaje': 'message',
  'u-ilusion-menor': 'minor-illusion', 'u-prestidigitacion': 'prestidigitation', 'u-taumaturgia': 'thaumaturgy',
  'u-luces': 'dancing-lights', 'u-druidismo': 'druidcraft', 'u-moldear-tierra': 'mold-earth',
  'u-forma-agua': 'shape-water', 'u-control-llamas': 'control-flames', 'u-rafaga': 'gust',
  'u-comprender': 'comprehend-languages', 'u-detectar-magia': 'detect-magic', 'u-identificar': 'identify',
  'u-dormir': 'sleep', 'u-hechizar': 'charm-person', 'u-caida-pluma': 'feather-fall',
  'u-salto': 'jump', 'u-zancada': 'longstrider', 'u-escudo': 'shield',
  'u-proteccion': 'protection-from-evil-and-good', 'u-sirviente': 'unseen-servant', 'u-disfraz': 'disguise-self',
  'u-hablar-animales': 'speak-with-animals', 'u-santuario': 'sanctuary', 'u-niebla': 'fog-cloud',
  'u-retirada': 'expeditious-retreat', 'u-enmarañar': 'entangle', 'u-invisibilidad': 'invisibility',
  'u-paso-brumoso': 'misty-step', 'u-apertura': 'knock', 'u-telaraña': 'web',
  'u-sugestion': 'suggestion', 'u-inmovilizar': 'hold-person', 'u-ver-invisible': 'see-invisibility',
  'u-desdibujarse': 'blur', 'u-imagen-multiple': 'mirror-image', 'u-paso-rastro': 'pass-without-trace',
  'u-localizar-objeto': 'locate-object', 'u-localizar-naturaleza': 'locate-animals-or-plants',
  'u-agrandar': 'enlarge-reduce', 'u-cerradura': 'arcane-lock', 'u-silencio': 'silence',
  'u-oscuridad': 'darkness', 'u-levitar': 'levitate', 'u-volar': 'fly',
  'u-disipar': 'dispel-magic', 'u-contrahechizo': 'counterspell', 'u-intermitencia': 'blink',
  'u-prisa': 'haste', 'u-lentitud': 'slow', 'u-miedo': 'fear',
  'u-patron': 'hypnotic-pattern', 'u-hablar-muertos': 'speak-with-dead', 'u-lenguas': 'tongues',
  'u-respirar-agua': 'water-breathing', 'u-caminar-aguas': 'water-walk', 'u-circulo': 'magic-circle',
  'u-no-deteccion': 'nondetection', 'u-enviar': 'sending', 'u-hablar-plantas': 'speak-with-plants',
  'u-crecimiento': 'plant-growth', 'u-proteccion-energia': 'protection-from-energy', 'u-remover-maldicion': 'remove-curse',
  'u-clarividencia': 'clairvoyance', 'u-siesta': 'catnap', 'u-comida': 'create-food-and-water',
  'u-cabaña': 'leomunds-tiny-hut', 'u-cuerda': 'rope-trick', 'u-polimorfar': 'polymorph',
  'u-destierro': 'banishment', 'u-invisibilidad-mayor': 'greater-invisibility', 'u-puerta-dimensional': 'dimension-door',
  'u-ojo-arcano': 'arcane-eye', 'u-adivinacion': 'divination', 'u-localizar-criatura': 'locate-creature',
  'u-control-agua': 'control-water', 'u-confusion': 'confusion', 'u-dominar-bestia': 'dominate-beast',
  'u-mover-tierra': 'move-earth', 'u-piel-piedra': 'stoneskin', 'u-terreno': 'hallucinatory-terrain',
  'u-cofre': 'leomunds-secret-chest', 'u-dominar-persona': 'dominate-person', 'u-telequinesis': 'telekinesis',
  'u-muro-fuerza': 'wall-of-force', 'u-escudriñar': 'scrying', 'u-contactar': 'contact-other-plane',
  'u-atadura': 'planar-binding', 'u-despertar': 'awaken', 'u-comunion': 'commune',
  'u-inmovilizar-monstruo': 'hold-monster', 'u-apariencia': 'seeming', 'u-memoria': 'modify-memory',
  'u-circulo-teletransporte': 'teleportation-circle', 'u-zancada-arborea': 'tree-stride', 'u-muro-piedra': 'wall-of-stone',
  'u-geas': 'geas', 'u-saber': 'legend-lore', 'u-pasamuros': 'passwall',
  'u-globo': 'globe-of-invulnerability', 'u-vision': 'true-seeing', 'u-ilusion-programada': 'programmed-illusion',
  'u-recipiente': 'magic-jar', 'u-caminar-viento': 'wind-walk', 'u-transporte-plantas': 'transport-via-plants',
  'u-contingencia': 'contingency', 'u-encontrar-senda': 'find-the-path', 'u-teletransporte': 'teleport',
  'u-cambiar-plano': 'plane-shift', 'u-jaula': 'forcecage', 'u-simulacro': 'simulacrum',
  'u-palabra-divina': 'divine-word', 'u-espejismo': 'mirage-arcane', 'u-reclusion': 'sequester',
  'u-dominar-monstruo': 'dominate-monster', 'u-antimagia': 'antimagic-field', 'u-laberinto': 'maze',
  'u-control-clima': 'control-weather', 'u-clon': 'clone', 'u-facilidad': 'glibness',
  'u-debilidad': 'feeblemind', 'u-palabra-aturdir': 'power-word-stun', 'u-deseo': 'wish',
  'u-parar-tiempo': 'time-stop', 'u-cambio-forma': 'shapechange', 'u-polimorfismo-verdadero': 'true-polymorph',
  'u-pronostico': 'foresight', 'u-puerta': 'gate', 'u-invulnerabilidad': 'invulnerability',
  'u-palabra-matar': 'power-word-kill', 'u-muro-prismatico': 'prismatic-wall',
};

export const DDB_EQUIP = {
  'm-daga': 'dagger', 'm-espada-corta': 'shortsword', 'm-cimitarra': 'scimitar', 'm-maza': 'mace',
  'm-lanza': 'spear', 'm-estoque': 'rapier', 'm-espada-larga': 'longsword', 'm-hacha-batalla': 'battleaxe',
  'm-martillo-guerra': 'warhammer', 'm-mandoble': 'greatsword', 'm-hacha-dos-manos': 'greataxe',
  'm-alabarda': 'halberd', 'm-maza-pesada': 'morningstar', 'm-tridente': 'trident', 'm-latigo': 'whip',
  'm-garrote': 'club', 'm-jabalina': 'javelin', 'm-hoz': 'sickle', 'm-hacha-mano': 'handaxe',
  'm-martillo-ligero': 'light-hammer',
};

export const DDB_SEARCH = {
  'm-punetazo': 'unarmed strike', 'm-artes-marciales': 'martial arts', 'm-ataque-furtivo': 'sneak attack',
  'm-golpe-divino': 'divine strike', 'm-floreo': 'blade flourish',
  'c-imposicion': 'lay on hands', 'c-luz-curativa': 'healing light',
  'u-ceguera': 'blindness deafness',
};

// URL oficial (D&D Beyond) de cualquier entrada: conjuro, equipo o búsqueda.
export function dndUrl(entry) {
  if (!entry) return 'https://www.dndbeyond.com/spells';
  const id = typeof entry === 'string' ? entry : entry.id;
  if (DDB_SPELL[id]) return `https://www.dndbeyond.com/spells/${DDB_SPELL[id]}`;
  if (DDB_EQUIP[id]) return `https://www.dndbeyond.com/equipment/${DDB_EQUIP[id]}`;
  const q = DDB_SEARCH[id] || (typeof entry === 'object' && entry.nombre) || id;
  return `https://www.dndbeyond.com/search?q=${encodeURIComponent(q)}`;
}

// Clases y libro de los 12 hechizos originales del Excel.
const LEGACY_META = {
  'bola-fuego': { clases: ['hechicero', 'mago'], libro: 'PHB' },
  'causar-heridas': { clases: ['clerigo'], libro: 'PHB' },
  'cuchillo-hielo': { clases: ['druida', 'hechicero', 'mago'], libro: 'XGtE' },
  'dedo-muerte': { clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB' },
  'desintegrar': { clases: ['hechicero', 'mago'], libro: 'PHB' },
  'lluvia-meteoritos': { clases: ['druida', 'hechicero', 'mago'], libro: 'PHB' },
  'manos-ardientes': { clases: ['hechicero', 'mago'], libro: 'PHB' },
  'marchitar': { clases: ['druida', 'hechicero', 'brujo', 'mago'], libro: 'PHB' },
  'orbe-cromatico': { clases: ['hechicero', 'mago'], libro: 'PHB' },
  'proyectil-magico': { clases: ['hechicero', 'mago'], libro: 'PHB' },
  'rayo-abrasador': { clases: ['hechicero', 'mago'], libro: 'PHB' },
  'virote-guia': { clases: ['clerigo'], libro: 'PHB' },
};
for (const s of SPELLS) Object.assign(s, LEGACY_META[s.id]);

// Hechizos de daño oficiales añadidos (PHB + XGtE). Solo conjuros de nivel 1–9
// con daño directo computable; los trucos escalan con nivel de personaje y no entran aquí.
// Spec genérica: mech atk|des|con|sab|auto · base [{n, c(caras), r(tipo res)}] en baseLvl
// · step [{n,c,r}] por nivel (cada: cada cuántos niveles) · fijo (+bonoMod suma tu mod)
// · saveFrac (0.5 mitad, 0 todo o nada). Sin r = daño sin tipo (×1).
export const SPELLS_EXTRA = [
  // ——— Nivel 1 ———
  { id: 'ola-trueno', nombre: 'Ola de trueno', icon: 'Waves', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'trueno', color: '#eab308', base: [{ n: 2, c: 8, r: 'trueno' }], step: [{ n: 1, c: 8, r: 'trueno' }], clases: ['bardo', 'druida', 'hechicero', 'mago'], libro: 'PHB', notas: 'Onda de 4,5 m. Mitad si supera.' },
  { id: 'reprension-infernal', nombre: 'Reprensión infernal', icon: 'Flame', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 2, c: 10, r: 'fuego' }], step: [{ n: 1, c: 10, r: 'fuego' }], clases: ['brujo'], libro: 'PHB', notas: 'Reacción contra quien te hiere. Mitad si supera.' },
  { id: 'catapulta', nombre: 'Catapulta', icon: 'Rocket', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'contundente', color: '#b08968', base: [{ n: 3, c: 8, r: 'contundente' }], step: [{ n: 1, c: 8, r: 'contundente' }], clases: ['artifice', 'hechicero', 'mago'], libro: 'XGtE', notas: 'Lanza un objeto. Mitad si supera.' },
  { id: 'rayo-caos', nombre: 'Rayo de caos', icon: 'Shuffle', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'aleatorio', color: '#c084fc', base: [{ n: 2, c: 8 }, { n: 1, c: 6 }], step: [{ n: 1, c: 6 }], clases: ['hechicero'], libro: 'XGtE', notas: 'Tipo de daño aleatorio; se calcula sin resistencias.' },
  { id: 'susurros-disonantes', nombre: 'Susurros disonantes', icon: 'Music', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, mech: 'sab', tirada: 'salv-sab', tiradaLabel: 'Salvación SAB', tipoDano: 'psíquico', color: '#c084fc', base: [{ n: 3, c: 6, r: 'psiquico' }], step: [{ n: 1, c: 6, r: 'psiquico' }], clases: ['bardo'], libro: 'PHB', notas: 'Mitad si supera; además huye con su reacción.' },
  // ——— Nivel 2 ———
  { id: 'fragmentar', nombre: 'Fragmentar', icon: 'Bomb', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'trueno', color: '#eab308', base: [{ n: 3, c: 8, r: 'trueno' }], step: [{ n: 1, c: 8, r: 'trueno' }], clases: ['artifice', 'bardo', 'druida', 'hechicero', 'mago'], libro: 'PHB', notas: 'Explosión de 3 m. Mitad si supera.' },
  { id: 'nube-dagas', nombre: 'Nube de dagas', icon: 'Swords', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'auto', tirada: 'auto', tiradaLabel: 'Automático', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 4, c: 4, r: 'cortante' }], step: [{ n: 2, c: 4, r: 'cortante' }], clases: ['bardo', 'druida', 'hechicero', 'mago'], libro: 'PHB', notas: 'Sin tirada: daña al entrar o empezar el turno en el cubo.' },
  { id: 'esfera-llameante', nombre: 'Esfera llameante', icon: 'Orbit', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 2, c: 6, r: 'fuego' }], step: [{ n: 1, c: 6, r: 'fuego' }], clases: ['druida', 'mago'], libro: 'PHB', notas: 'Contado un impacto; puedes embestir cada asalto.' },
  { id: 'rayo-lunar', nombre: 'Rayo lunar', icon: 'Moon', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'radiante', color: '#facc15', base: [{ n: 2, c: 10, r: 'radiante' }], step: [{ n: 1, c: 10, r: 'radiante' }], clases: ['druida'], libro: 'PHB', notas: 'Contado un impacto; el cilindro quema cada asalto.' },
  { id: 'calentar-metal', nombre: 'Calentar metal', icon: 'Hammer', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'auto', tirada: 'auto', tiradaLabel: 'Automático', tipoDano: 'fuego', color: '#f97316', base: [{ n: 2, c: 8, r: 'fuego' }], step: [{ n: 1, c: 8, r: 'fuego' }], clases: ['artifice', 'bardo', 'druida'], libro: 'PHB', notas: 'Sin tirada si lleva metal; repites con acción adicional.' },
  { id: 'arma-espiritual', nombre: 'Arma espiritual', icon: 'Sword', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'fuerza', color: '#60a5fa', base: [{ n: 1, c: 8, r: 'fuerza' }], step: [{ n: 1, c: 8, r: 'fuerza' }], cada: 2, fijo: 0, bonoMod: true, clases: ['clerigo'], libro: 'PHB', notas: 'Suma tu modificador al daño; ataca con acción adicional.' },
  { id: 'aganazzar', nombre: 'Abrasador de Aganazzar', icon: 'FlameKindling', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 3, c: 8, r: 'fuego' }], step: [{ n: 1, c: 8, r: 'fuego' }], clases: ['hechicero', 'mago'], libro: 'XGtE', notas: 'Línea de 9 m. Mitad si supera.' },
  { id: 'granizo-snilloc', nombre: 'Granizada de Snilloc', icon: 'Snowflake', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'frío', color: '#38bdf8', base: [{ n: 3, c: 6, r: 'frio' }], step: [{ n: 1, c: 6, r: 'frio' }], clases: ['hechicero', 'mago'], libro: 'XGtE', notas: 'Explosión de 1,5 m. Mitad si supera.' },
  { id: 'diablo-polvo', nombre: 'Diablo de polvo', icon: 'Wind', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'fue', tirada: 'salv-fue', tiradaLabel: 'Salvación FUE', tipoDano: 'contundente', color: '#b08968', base: [{ n: 1, c: 8, r: 'contundente' }], step: [{ n: 1, c: 8, r: 'contundente' }], clases: ['druida', 'hechicero', 'mago'], libro: 'XGtE', notas: 'Contado un impacto; puedes moverlo y empujar.' },
  // ——— Nivel 3 ———
  { id: 'relampago', nombre: 'Relámpago', icon: 'Zap', nivelMin: 3, nivelMax: 9, nivelBase: 3, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'relámpago', color: '#7dd3fc', base: [{ n: 8, c: 6, r: 'relampago' }], step: [{ n: 1, c: 6, r: 'relampago' }], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Línea de 30 m. Mitad si supera.' },
  { id: 'tierra-erupcion', nombre: 'Tierra erupcionada', icon: 'Mountain', nivelMin: 3, nivelMax: 9, nivelBase: 3, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'contundente', color: '#b08968', base: [{ n: 3, c: 12, r: 'contundente' }], step: [{ n: 1, c: 12, r: 'contundente' }], clases: ['druida', 'hechicero', 'mago'], libro: 'XGtE', notas: 'Crea terreno difícil. Mitad si supera.' },
  { id: 'toque-vampirico', nombre: 'Toque vampírico', icon: 'Droplets', nivelMin: 3, nivelMax: 9, nivelBase: 3, generic: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 3, c: 6, r: 'necrotico' }], step: [{ n: 1, c: 6, r: 'necrotico' }], clases: ['brujo', 'mago'], libro: 'PHB', notas: 'Ataque cuerpo a cuerpo; te curas la mitad.' },
  { id: 'guardianes-espirituales', nombre: 'Guardianes espirituales', icon: 'Shield', nivelMin: 3, nivelMax: 9, nivelBase: 3, generic: true, mech: 'sab', tirada: 'salv-sab', tiradaLabel: 'Salvación SAB', tipoDano: 'radiante', color: '#facc15', base: [{ n: 3, c: 8, r: 'radiante' }], step: [{ n: 1, c: 8, r: 'radiante' }], clases: ['clerigo'], libro: 'PHB', notas: 'Contado un impacto del aura; quema cada asalto.' },
  { id: 'llamar-relampago', nombre: 'Llamar al relámpago', icon: 'CloudLightning', nivelMin: 3, nivelMax: 9, nivelBase: 3, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'relámpago', color: '#7dd3fc', base: [{ n: 3, c: 10, r: 'relampago' }], step: [{ n: 1, c: 10, r: 'relampago' }], clases: ['druida'], libro: 'PHB', notas: 'Necesita tormenta; cae un rayo por asalto.' },
  { id: 'paso-trueno', nombre: 'Paso atronador', icon: 'Footprints', nivelMin: 3, nivelMax: 9, nivelBase: 3, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'trueno', color: '#eab308', base: [{ n: 3, c: 10, r: 'trueno' }], step: [{ n: 1, c: 10, r: 'trueno' }], clases: ['druida', 'hechicero', 'mago'], libro: 'XGtE', notas: 'Te teletransporta 27 m. Mitad si supera.' },
  // ——— Nivel 4 ———
  { id: 'tormenta-hielo', nombre: 'Tormenta de hielo', icon: 'CloudHail', nivelMin: 4, nivelMax: 9, nivelBase: 4, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'contundente + frío', color: '#38bdf8', base: [{ n: 2, c: 8, r: 'contundente' }, { n: 4, c: 6, r: 'frio' }], step: [{ n: 1, c: 8, r: 'contundente' }], clases: ['druida', 'hechicero', 'mago'], libro: 'PHB', notas: 'Granizo en cilindro. Mitad si supera.' },
  { id: 'esfera-vitriolica', nombre: 'Esfera vitriólica', icon: 'FlaskConical', nivelMin: 4, nivelMax: 9, nivelBase: 4, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'ácido', color: '#4ade80', base: [{ n: 10, c: 4, r: 'acido' }], step: [{ n: 2, c: 4, r: 'acido' }], clases: ['hechicero', 'mago'], libro: 'XGtE', notas: 'Solo el impacto inicial; +5d4 al turno siguiente no contados.' },
  { id: 'muro-fuego', nombre: 'Muro de fuego', icon: 'BrickWall', nivelMin: 4, nivelMax: 9, nivelBase: 4, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 5, c: 8, r: 'fuego' }], step: [{ n: 1, c: 8, r: 'fuego' }], clases: ['druida', 'hechicero', 'mago'], libro: 'PHB', notas: 'Contado un impacto al cruzarlo; quema por asalto.' },
  // ——— Nivel 5 ———
  { id: 'cono-frio', nombre: 'Cono de frío', icon: 'Cone', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'frío', color: '#38bdf8', base: [{ n: 8, c: 8, r: 'frio' }], step: [{ n: 1, c: 8, r: 'frio' }], clases: ['druida', 'hechicero', 'mago'], libro: 'PHB', notas: 'Cono de 18 m. Mitad si supera.' },
  { id: 'nube-asesina', nombre: 'Nube asesina', icon: 'Skull', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'veneno', color: '#65a30d', base: [{ n: 5, c: 8, r: 'veneno' }], step: [{ n: 1, c: 8, r: 'veneno' }], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Contado un impacto de la nube; intoxica por asalto.' },
  { id: 'plaga-insectos', nombre: 'Plaga de insectos', icon: 'Bug', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 4, c: 10, r: 'perforante' }], step: [{ n: 1, c: 10, r: 'perforante' }], clases: ['clerigo', 'druida', 'hechicero'], libro: 'PHB', notas: 'Contado un impacto del enjambre.' },
  { id: 'energia-negativa', nombre: 'Inundación de energía negativa', icon: 'Ghost', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 5, c: 12, r: 'necrotico' }], step: [], clases: ['brujo', 'mago'], libro: 'XGtE', notas: 'Si lo mata, se alza zombi sin control; a no-muertos les da PV temporales.' },
  { id: 'ola-destructiva', nombre: 'Ola destructiva', icon: 'Hand', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'trueno + radiante', color: '#facc15', base: [{ n: 5, c: 6, r: 'trueno' }, { n: 5, c: 6, r: 'radiante' }], step: [], clases: ['paladin'], libro: 'PHB', notas: 'Solo a quien elijas; derriba. Sin mejora con niveles superiores.' },
  { id: 'descarga-conjunta', nombre: 'Descarga conjunta', icon: 'Target', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 8, c: 8, r: 'perforante' }], step: [], clases: ['explorador'], libro: 'XGtE', notas: 'Requiere munición no mágica; sin mejora con niveles superiores.' },
  // ——— Nivel 6 ———
  { id: 'cadena-relampagos', nombre: 'Cadena de relámpagos', icon: 'PlugZap', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'relámpago', color: '#7dd3fc', base: [{ n: 10, c: 8, r: 'relampago' }], step: [], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Al primer objetivo; +1 objetivo por nivel (sin contar aquí).' },
  { id: 'rayo-solar', nombre: 'Rayo solar', icon: 'Sun', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'radiante', color: '#facc15', base: [{ n: 6, c: 8, r: 'radiante' }], step: [{ n: 1, c: 8, r: 'radiante' }], clases: ['clerigo', 'druida', 'mago'], libro: 'PHB', notas: 'Contado un impacto; ciega y se reutiliza.' },
  { id: 'esfera-congelacion', nombre: 'Esfera de congelación', icon: 'Snowflake', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'frío', color: '#38bdf8', base: [{ n: 10, c: 6, r: 'frio' }], step: [{ n: 1, c: 6, r: 'frio' }], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Explosión de 18 m. Mitad si supera.' },
  { id: 'barrera-cuchillas', nombre: 'Barrera de cuchillas', icon: 'Sword', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 6, c: 10, r: 'cortante' }], step: [], clases: ['clerigo'], libro: 'PHB', notas: 'Contado un impacto al cruzar el muro; sin mejora con niveles superiores.' },
  { id: 'dano', nombre: 'Daño', icon: 'HeartPulse', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 14, c: 6, r: 'necrotico' }], step: [], clases: ['clerigo'], libro: 'PHB', notas: 'No baja de 1 PV; reduce máximos 1 h. Sin mejora con niveles superiores.' },
  // ——— Nivel 7 ———
  { id: 'tormenta-fuego', nombre: 'Tormenta de fuego', icon: 'Flame', nivelMin: 7, nivelMax: 9, nivelBase: 7, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 7, c: 10, r: 'fuego' }], step: [{ n: 1, c: 10, r: 'fuego' }], clases: ['clerigo', 'druida', 'hechicero'], libro: 'PHB', notas: 'Varios cubos a repartir. Mitad si supera.' },
  { id: 'bola-fuego-retardada', nombre: 'Bola de fuego retardada', icon: 'Timer', nivelMin: 7, nivelMax: 9, nivelBase: 7, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 12, c: 6, r: 'fuego' }], step: [{ n: 1, c: 6, r: 'fuego' }], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Sin contar +1d6 por asalto cargándola.' },
  // ——— Nivel 8 ———
  { id: 'explosion-solar', nombre: 'Explosión solar', icon: 'Sunrise', nivelMin: 8, nivelMax: 9, nivelBase: 8, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'radiante', color: '#facc15', base: [{ n: 12, c: 6, r: 'radiante' }], step: [], clases: ['clerigo', 'druida', 'hechicero', 'mago'], libro: 'PHB', notas: 'Radio de 45 m; ciega 1 min. Sin mejora con niveles superiores.' },
  { id: 'nube-incendiaria', nombre: 'Nube incendiaria', icon: 'CloudFog', nivelMin: 8, nivelMax: 9, nivelBase: 8, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 10, c: 8, r: 'fuego' }], step: [], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Contado un impacto; sin mejora con niveles superiores.' },
  { id: 'marchitamiento-horrible', nombre: 'Marchitamiento horrible', icon: 'Skull', nivelMin: 8, nivelMax: 9, nivelBase: 8, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 10, c: 8, r: 'necrotico' }], step: [], clases: ['hechicero', 'mago'], libro: 'XGtE', notas: 'Nada a constructos ni no-muertos. Sin mejora con niveles superiores.' },
];

SPELLS.push(...SPELLS_EXTRA);

// Trucos que hacen daño (PHB + XGtE + TCoE). No gastan espacio: su daño escala
// con el NIVEL DE PERSONAJE (1 dado, 2 a nv.5, 3 a nv.11, 4 a nv.17) y usan tu
// característica de lanzamiento. Se muestran planos en N1–N9.
// Excluidos: filo explosivo/fuego verde (dependen del arma), piedra mágica (arma),
// atracción... no: solo quedan fuera los de FUE/INT, que sí entran (ver abajo).
export const CANTRIPS = [
  { id: 't-descarga-fuego', nombre: 'Descarga de fuego', icon: 'Flame', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'fuego', color: '#f97316', caras: 10, clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Truco: escala con tu nivel (2 dados a nv. 5).' },
  { id: 't-descarga-sobrenatural', nombre: 'Descarga sobrenatural', icon: 'Zap', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', haces: true, tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'fuerza', color: '#60a5fa', caras: 10, clases: ['brujo'], libro: 'PHB', notas: 'Un rayo por haz (2 haces a nv. 5); cada uno tira ataque.' },
  { id: 't-rayo-escarcha', nombre: 'Rayo de escarcha', icon: 'Snowflake', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'frío', color: '#38bdf8', caras: 8, clases: ['artifice', 'hechicero', 'mago'], libro: 'PHB', notas: 'Ralentiza 3 m hasta tu próximo turno.' },
  { id: 't-toque-helado', nombre: 'Toque helado', icon: 'Ghost', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'necrótico', color: '#a855f7', caras: 8, clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB', notas: 'Impide recuperar puntos de golpe un asalto.' },
  { id: 't-agarre-electrico', nombre: 'Agarre eléctrico', icon: 'PlugZap', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'relámpago', color: '#7dd3fc', caras: 8, clases: ['artifice', 'hechicero', 'mago'], libro: 'PHB', notas: 'Ventaja contra metal; le quita la reacción.' },
  { id: 't-rociada-veneno', nombre: 'Rociada de veneno', icon: 'FlaskConical', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'veneno', color: '#65a30d', caras: 12, clases: ['artifice', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'PHB', notas: 'Cono de 3 m. Mitad... no: si supera no hay daño.' , saveFrac: 0 },
  { id: 't-salpicadura-acida', nombre: 'Salpicadura ácida', icon: 'Droplets', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'ácido', color: '#4ade80', caras: 6, clases: ['artifice', 'hechicero', 'mago'], libro: 'PHB', notas: 'Puedes salpicar a dos criaturas juntas.' , saveFrac: 0 },
  { id: 't-llama-sagrada', nombre: 'Llama sagrada', icon: 'Sun', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'radiante', color: '#facc15', caras: 8, clases: ['clerigo'], libro: 'PHB', notas: 'Ignora cobertura. Si supera no hay daño.', saveFrac: 0 },
  { id: 't-toque-muerte', nombre: 'Toque de muerte', icon: 'Skull', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'sab', tirada: 'salv-sab', tiradaLabel: 'Salvación SAB', tipoDano: 'necrótico', color: '#a855f7', caras: 8, clases: ['clerigo', 'brujo', 'mago'], libro: 'XGtE', notas: 'Contado 1d8; si está herido sería 1d12.' , saveFrac: 0 },
  { id: 't-palabra-resplandor', nombre: 'Palabra de resplandor', icon: 'Sunrise', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'radiante', color: '#facc15', caras: 6, clases: ['clerigo'], libro: 'XGtE', notas: 'Alcanza a todos a tu alrededor.', saveFrac: 0 },
  { id: 't-burla-cruel', nombre: 'Burla cruel', icon: 'Music', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'sab', tirada: 'salv-sab', tiradaLabel: 'Salvación SAB', tipoDano: 'psíquico', color: '#c084fc', caras: 4, clases: ['bardo'], libro: 'PHB', notas: 'Además desventaja en su próximo ataque.', saveFrac: 0 },
  { id: 't-latigo-espinas', nombre: 'Látigo de espinas', icon: 'Slice', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', caras: 6, clases: ['artifice', 'druida'], libro: 'PHB', notas: 'Arrastra 3 m si impacta.' },
  { id: 't-producir-llama', nombre: 'Producir llama', icon: 'FlameKindling', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'fuego', color: '#f97316', caras: 8, clases: ['druida'], libro: 'PHB', notas: 'También da luz 10 minutos.' },
  { id: 't-hoguera', nombre: 'Hoguera', icon: 'Cone', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', caras: 8, clases: ['artifice', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'XGtE', notas: 'Zona que quema al entrar. Si supera no hay daño.', saveFrac: 0 },
  { id: 't-mordisco-escarcha', nombre: 'Mordisco de escarcha', icon: 'Snowflake', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'frío', color: '#38bdf8', caras: 6, clases: ['artifice', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'XGtE', notas: 'Además desventaja en su próximo ataque de arma.', saveFrac: 0 },
  { id: 't-trueno', nombre: 'Atronar', icon: 'Volume2', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'trueno', color: '#eab308', caras: 6, clases: ['bardo', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'XGtE', notas: 'Estruendo audible a 30 m.', saveFrac: 0 },
  { id: 't-explosion-espadas', nombre: 'Explosión de espadas', icon: 'Swords', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuerza', color: '#60a5fa', caras: 6, clases: ['artifice', 'hechicero', 'brujo', 'mago'], libro: 'TCoE', notas: 'Alcanza a todos a 1,5 m.', saveFrac: 0 },
  { id: 't-atraccion-relampago', nombre: 'Atracción de relámpago', icon: 'Zap', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'fue', tirada: 'salv-fue', tiradaLabel: 'Salvación FUE', tipoDano: 'relámpago', color: '#7dd3fc', caras: 8, clases: ['artifice', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'TCoE', notas: 'Arrastra 3 m si falla. Si supera no hay daño.', saveFrac: 0 },
  { id: 't-aguijon-mental', nombre: 'Aguijón mental', icon: 'Brain', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'int', tirada: 'salv-int', tiradaLabel: 'Salvación INT', tipoDano: 'psíquico', color: '#c084fc', caras: 6, clases: ['hechicero', 'brujo', 'mago'], libro: 'TCoE', notas: 'Le resta 1d4 a su próxima salvación.', saveFrac: 0 },
  { id: 't-salvajismo-primigenio', nombre: 'Salvajismo primigenio', icon: 'Ghost', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'ácido', color: '#4ade80', caras: 10, clases: ['druida'], libro: 'XGtE', notas: 'Tus garras o colmillos.' },
  { id: 't-infestacion', nombre: 'Infestación', icon: 'Bug', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'veneno', color: '#65a30d', caras: 6, clases: ['druida', 'hechicero', 'mago'], libro: 'TCoE', notas: 'Le mueve 1,5 m en dirección aleatoria.', saveFrac: 0 },
];

SPELLS.push(...CANTRIPS);

// Melé: armas y rasgos de clase (PHB + XGtE). Usan tu Mod. cuerpo a cuerpo y tu
// nº de ataques por turno (automático por clase y nivel). El crítico dobla dados.
const SENCILLAS = ['barbaro', 'guerrero', 'paladin', 'explorador', 'monje', 'picaro', 'bardo', 'caballero'];
const MARCIALES = ['barbaro', 'guerrero', 'paladin', 'explorador', 'caballero'];
export const MELEE = [
  { id: 'm-daga', nombre: 'Daga', icon: 'Slice', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 1, c: 4, r: 'perforante' }], step: [], clases: SENCILLAS, libro: 'PHB', notas: 'Sencilla, arrojadiza. Un ataque por cada ataque de tu turno.' },
  { id: 'm-espada-corta', nombre: 'Espada corta', icon: 'Sword', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 1, c: 6, r: 'perforante' }], step: [], clases: SENCILLAS, libro: 'PHB', notas: 'Sencilla, sutil.' },
  { id: 'm-cimitarra', nombre: 'Cimitarra', icon: 'Swords', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 1, c: 6, r: 'cortante' }], step: [], clases: SENCILLAS, libro: 'PHB', notas: 'Sencilla, sutil.' },
  { id: 'm-maza', nombre: 'Maza', icon: 'Hammer', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'contundente', color: '#b08968', base: [{ n: 1, c: 6, r: 'contundente' }], step: [], clases: SENCILLAS, libro: 'PHB', notas: 'Sencilla.' },
  { id: 'm-lanza', nombre: 'Lanza', icon: 'Navigation', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 1, c: 6, r: 'perforante' }], step: [], clases: SENCILLAS, libro: 'PHB', notas: 'Sencilla, arrojadiza.' },
  { id: 'm-punetazo', nombre: 'Puñetazo', icon: 'Hand', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'contundente', color: '#b08968', base: [], fijo: 1, fijoR: 'contundente', step: [], clases: ['barbaro', 'guerrero', 'paladin', 'explorador', 'monje', 'picaro', 'bardo', 'caballero', 'picaro-arcano'], libro: 'PHB', notas: '1 + mod por golpe.' },
  { id: 'm-estoque', nombre: 'Estoque', icon: 'Sword', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 1, c: 8, r: 'perforante' }], step: [], clases: [...MARCIALES, 'picaro', 'bardo', 'picaro-arcano'], libro: 'PHB', notas: 'Marcial, sutil.' },
  { id: 'm-espada-larga', nombre: 'Espada larga', icon: 'Sword', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 1, c: 8, r: 'cortante' }], step: [], clases: [...MARCIALES, 'bardo', 'picaro-arcano'], libro: 'PHB', notas: 'Marcial (1d10 a dos manos, no contado).' },
  { id: 'm-hacha-batalla', nombre: 'Hacha de batalla', icon: 'Axe', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 1, c: 8, r: 'cortante' }], step: [], clases: MARCIALES, libro: 'PHB', notas: 'Marcial.' },
  { id: 'm-martillo-guerra', nombre: 'Martillo de guerra', icon: 'Hammer', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'contundente', color: '#b08968', base: [{ n: 1, c: 8, r: 'contundente' }], step: [], clases: MARCIALES, libro: 'PHB', notas: 'Marcial.' },
  { id: 'm-mandoble', nombre: 'Mandoble', icon: 'Swords', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 2, c: 6, r: 'cortante' }], step: [], clases: MARCIALES, libro: 'PHB', notas: 'Marcial, a dos manos.' },
  { id: 'm-hacha-dos-manos', nombre: 'Hacha a dos manos', icon: 'Axe', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 1, c: 12, r: 'cortante' }], step: [], clases: MARCIALES, libro: 'PHB', notas: 'Marcial, pesada.' },
  { id: 'm-alabarda', nombre: 'Alabarda', icon: 'Navigation', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 1, c: 10, r: 'cortante' }], step: [], clases: MARCIALES, libro: 'PHB', notas: 'Marcial, alcance.' },
  // ——— Rasgos de clase ———
  { id: 'm-artes-marciales', nombre: 'Artes marciales (turno)', icon: 'Hand', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', golpeExtra: 1, tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'contundente', color: '#b08968', dadosPJ: (lvl) => [{ n: 1, c: lvl >= 17 ? 10 : lvl >= 11 ? 8 : lvl >= 5 ? 6 : 4, r: 'contundente' }], step: [], clases: ['monje'], libro: 'PHB', notas: 'Turno completo: tus ataques + 1 desarmado. Ráfaga = un desarmado más.' },
  { id: 'castigo-divino', nombre: 'Castigo divino', icon: 'Sun', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, mech: 'atk', atkStat: 'mel', golpes: 'uno', tope: 5, tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'radiante', color: '#facc15', base: [{ n: 2, c: 8, r: 'radiante' }], step: [{ n: 1, c: 8, r: 'radiante' }],   clases: ['paladin'], libro: 'PHB', notas: 'Conjuro (reglas 2024): se descarga al impactar con un arma; gasta espacio N1–5. +1d8 contra muertos vivientes e infernales, no contado. Sin contar el arma.' },
  { id: 'm-ataque-furtivo', nombre: 'Ataque furtivo', icon: 'Eye', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', golpes: 'uno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', dadosPJ: (lvl) => [{ n: Math.max(1, Math.ceil(lvl / 2)), c: 6, r: 'perforante' }], step: [], clases: ['picaro', 'picaro-arcano'], libro: 'PHB', notas: 'Una vez por turno con ventaja o aliado cerca. Sin contar el arma.' },
  { id: 'm-golpe-divino', nombre: 'Golpe divino', icon: 'Shield', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', golpes: 'uno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'radiante', color: '#facc15', dadosPJ: (lvl) => [{ n: lvl >= 14 ? 2 : 1, c: 8, r: 'radiante' }], step: [], clases: ['clerigo'], libro: 'PHB', notas: 'Una vez por turno al impactar con arma. Sin contar el arma.' },
  { id: 'm-marca-cazador', nombre: 'Marca del cazador', icon: 'Target', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, mech: 'atk', atkStat: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'del arma', color: '#b08968', base: [{ n: 1, c: 6 }], step: [], clases: ['explorador'], libro: 'PHB', notas: '+1d6 por cada golpe que impacte. Concentración.' },
  { id: 'm-maleficio', nombre: 'Maleficio', icon: 'Moon', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, mech: 'atk', atkStat: 'mod', golpes: 'haces', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 1, c: 6, r: 'necrotico' }], step: [], clases: ['brujo'], libro: 'PHB', notas: 'Supone tus ataques de Explosión sobrenatural (1d6 por haz que impacte). Concentración.' },
  { id: 'm-floreo', nombre: 'Floreo de duelo', icon: 'Music', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', golpes: 'uno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'del arma', color: '#b08968', dadosPJ: (lvl) => [{ n: 1, c: lvl >= 15 ? 12 : lvl >= 10 ? 10 : lvl >= 5 ? 8 : 6 }], step: [], clases: ['bardo'], libro: 'XGtE', notas: 'Rasgo de bardo del Colegio de las Espadas: al impactar con un arma gastas un dado de Inspiración, lo sumas al daño y añades un efecto (defensa, huida o daño a otro).' },
];

SPELLS.push(...MELEE);

// Armas cuerpo a cuerpo restantes (PHB) + daños directos que faltaban.
const MARCIALES2 = ['barbaro', 'guerrero', 'paladin', 'explorador', 'caballero'];
const SENCILLAS2 = ['barbaro', 'guerrero', 'paladin', 'explorador', 'monje', 'picaro', 'bardo', 'caballero'];
SPELLS.push(
  { id: 'm-maza-pesada', nombre: 'Maza pesada', icon: 'Hammer', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 1, c: 8, r: 'perforante' }], step: [], clases: MARCIALES2, libro: 'PHB', notas: 'Marcial.' },
  { id: 'm-tridente', nombre: 'Tridente', icon: 'Navigation', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 1, c: 6, r: 'perforante' }], step: [], clases: MARCIALES2, libro: 'PHB', notas: 'Marcial, arrojadizo.' },
  { id: 'm-latigo', nombre: 'Látigo', icon: 'Slice', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 1, c: 4, r: 'cortante' }], step: [], clases: MARCIALES2, libro: 'PHB', notas: 'Marcial, sutil, alcance.' },
  { id: 'm-garrote', nombre: 'Garrote', icon: 'Hammer', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'contundente', color: '#b08968', base: [{ n: 1, c: 4, r: 'contundente' }], step: [], clases: SENCILLAS2, libro: 'PHB', notas: 'Sencilla.' },
  { id: 'm-jabalina', nombre: 'Jabalina', icon: 'Navigation', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 1, c: 6, r: 'perforante' }], step: [], clases: SENCILLAS2, libro: 'PHB', notas: 'Sencilla, arrojadiza.' },
  { id: 'm-hoz', nombre: 'Hoz', icon: 'Slice', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 1, c: 4, r: 'cortante' }], step: [], clases: SENCILLAS2, libro: 'PHB', notas: 'Sencilla.' },
  { id: 'm-hacha-mano', nombre: 'Hacha de mano', icon: 'Axe', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 1, c: 6, r: 'cortante' }], step: [], clases: SENCILLAS2, libro: 'PHB', notas: 'Sencilla, arrojadiza.' },
  { id: 'm-martillo-ligero', nombre: 'Martillo ligero', icon: 'Hammer', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', danoMod: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'contundente', color: '#b08968', base: [{ n: 1, c: 4, r: 'contundente' }], step: [], clases: SENCILLAS2, libro: 'PHB', notas: 'Sencilla, arrojadizo.' },
  { id: 'circulo-muerte', nombre: 'Círculo de muerte', icon: 'Skull', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 8, c: 6, r: 'necrotico' }], step: [{ n: 2, c: 6, r: 'necrotico' }], clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB', notas: 'Esfera de 18 m. +2d6 por nivel.' },
  { id: 'rociada-prismatica', nombre: 'Rociada prismática', icon: 'Sparkles', nivelMin: 7, nivelMax: 7, nivelBase: 7, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'aleatorio', color: '#c084fc', base: [{ n: 10, c: 6 }], step: [], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Solo nivel 7. Tipo aleatorio; sin resistencias. Mitad si supera.' },
  { id: 'grito-psiquico', nombre: 'Grito psíquico', icon: 'Brain', nivelMin: 9, nivelMax: 9, nivelBase: 9, generic: true, mech: 'int', tirada: 'salv-int', tiradaLabel: 'Salvación INT', tipoDano: 'psíquico', color: '#c084fc', base: [{ n: 14, c: 6, r: 'psiquico' }], step: [], clases: ['hechicero', 'mago'], libro: 'XGtE', notas: 'Solo nivel 9. Además aturde. Mitad si supera.' },
  { id: 'guardian-fe', nombre: 'Guardián de la fe', icon: 'Shield', nivelMin: 4, nivelMax: 9, nivelBase: 4, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'radiante', color: '#facc15', base: [], fijo: 20, fijoR: 'radiante', step: [], clases: ['clerigo'], libro: 'PHB', notas: '20 por activación (60 en total). Mitad si supera.' },
);

// Curación (PHB + XGtE). mech 'cura': valor esperado por objetivo = dados + tu
// modificador (+fijo / +reserva por nivel). Sin tiradas ni resistencias.
export const CURAS = [
  { id: 'c-curar-heridas', nombre: 'Curar heridas', icon: 'HeartPulse', min: 1, max: 9, mech: 'cura', base: [{ n: 1, c: 8 }], step: [{ n: 1, c: 8 }], clases: ['bardo', 'clerigo', 'druida', 'explorador', 'paladin', 'artifice'], libro: 'PHB', notas: 'Toque. Lo básico y fiable.' },
  { id: 'c-palabra-curativa', nombre: 'Palabra curativa', icon: 'Music', min: 1, max: 9, mech: 'cura', base: [{ n: 1, c: 4 }], step: [{ n: 1, c: 4 }], clases: ['bardo', 'clerigo', 'druida'], libro: 'PHB', notas: 'Adicional a 18 m. Menos dados, más acción.' },
  { id: 'c-bayas', nombre: 'Bayas buenas', icon: 'Leaf', min: 1, max: 9, mech: 'cura', fijo: 10, sinMod: true, clases: ['druida', 'explorador'], libro: 'PHB', notas: '10 bayas de 1 PV. preventivas, no de combate.' },
  { id: 'c-ayuda', nombre: 'Ayuda', icon: 'Shield', min: 2, max: 9, mech: 'cura', fijo: 5, stepFijo: 5, sinMod: true, clases: ['clerigo', 'paladin'], libro: 'PHB', notas: 'A 3 objetivos: +5 PV actuales y máximos.' },
  { id: 'c-plegaria', nombre: 'Plegaria de curación', icon: 'Sun', min: 2, max: 9, mech: 'cura', base: [{ n: 2, c: 8 }], step: [{ n: 1, c: 8 }], clases: ['clerigo'], libro: 'PHB', notas: 'Hasta 6 criaturas, pero 10 minutos.' },
  { id: 'c-palabra-masa', nombre: 'Palabra curativa en masa', icon: 'Music', min: 3, max: 9, mech: 'cura', base: [{ n: 1, c: 4 }], step: [{ n: 1, c: 4 }], clases: ['clerigo'], libro: 'PHB', notas: 'Hasta 6 a 18 m con adicional.' },
  { id: 'c-aura-vitalidad', nombre: 'Aura de vitalidad', icon: 'Sunrise', min: 3, max: 9, mech: 'cura', base: [{ n: 2, c: 6 }], step: [], sinMod: true, clases: ['paladin', 'druida'], libro: 'PHB', notas: '2d6 con adicional cada asalto (concentración).' },
  { id: 'c-transferencia', nombre: 'Transferencia vital', icon: 'Droplets', min: 3, max: 9, mech: 'cura', base: [{ n: 8, c: 8 }], step: [{ n: 2, c: 8 }], sinMod: true, dadosTxt: '4d8 ×2 (te dañas 4d8; +2d8 por nivel)', clases: ['clerigo', 'mago'], libro: 'XGtE', notas: 'Sacrificas 4d8 necróticos; sana el doble.' },
  { id: 'c-espiritu', nombre: 'Espíritu curativo', icon: 'Ghost', min: 2, max: 9, mech: 'cura', base: [{ n: 1, c: 6 }], step: [], sinMod: true, clases: ['druida', 'explorador'], libro: 'XGtE', notas: '1d6 a quien pase por el espíritu, cada asalto.' },
  { id: 'c-curar-masa', nombre: 'Curar heridas en masa', icon: 'HeartPulse', min: 5, max: 9, mech: 'cura', base: [{ n: 3, c: 8 }], step: [{ n: 1, c: 8 }], clases: ['clerigo'], libro: 'PHB', notas: 'Hasta 6 criaturas.' },
  { id: 'c-festin', nombre: 'Festín de héroes', icon: 'Drumstick', min: 6, max: 9, mech: 'cura', base: [{ n: 2, c: 10 }], step: [], sinMod: true, clases: ['clerigo', 'druida'], libro: 'PHB', notas: '+2d10 PV máximos e inmunidades. 1 hora y 1000 po.' },
  { id: 'c-curar6', nombre: 'Curar', icon: 'Cross', min: 6, max: 9, mech: 'cura', fijo: 70, stepFijo: 10, sinMod: true, clases: ['clerigo', 'druida'], libro: 'PHB', notas: '70 fijos +10 por nivel. Quita ceguera y venenos.' },
  { id: 'c-regenerar', nombre: 'Regenerar', icon: 'Sprout', min: 7, max: 9, mech: 'cura', base: [{ n: 4, c: 8 }], fijo: 15, sinMod: true, clases: ['bardo', 'clerigo', 'druida'], libro: 'PHB', notas: '4d8+15 y 1 PV/asallo 1 hora; recrece miembros.' },
  { id: 'c-curar-masa9', nombre: 'Curar en masa', icon: 'Sun', min: 9, max: 9, mech: 'cura', fijo: 700, sinMod: true, clases: ['clerigo'], libro: 'PHB', notas: '700 PV a repartir. Solo nivel 9.' },
  { id: 'c-palabra-cura', nombre: 'Palabra de curación', icon: 'Music', min: 9, max: 9, mech: 'cura', especial: true, clases: ['bardo', 'clerigo'], libro: 'PHB', notas: 'Recupera TODOS sus PV. Solo nivel 9.' },
  { id: 'c-imposicion', nombre: 'Imposición de manos', icon: 'Hand', min: 1, max: 9, mech: 'cura', sinMod: true, fijoPJ: (lvl) => 5 * lvl, clases: ['paladin'], libro: 'PHB', notas: 'Reserva de 5 PV/nivel a repartir con toque.' },
  { id: 'c-luz-curativa', nombre: 'Luz curativa', icon: 'Sparkles', min: 1, max: 9, mech: 'cura', sinMod: true, dadosPJ: (lvl) => [{ n: 1 + lvl, c: 6 }], clases: ['brujo'], libro: 'XGtE', notas: 'Reserva de (1+nivel) d6 con adicional a 18 m.' },
  { id: 'c-auxilio', nombre: 'Auxilio mortal', icon: 'Cross', min: 1, max: 9, mech: 'cura', especial: true, clases: ['clerigo'], libro: 'PHB', notas: 'Truco: estabiliza a 0 PV sin curar.' },
];

// Utilidad y juego (PHB + XGtE + TCoE): sin daño ni curación directa.
// tags: control, movimiento, exploración, social, información, defensa, sigilo,
// invocación, supervivencia.
export const UTILS = [
  // ——— Trucos ———
  { id: 'u-orientacion', nombre: 'Orientación', icon: 'Compass', nivel: 0, clases: ['clerigo', 'druida'], libro: 'PHB', tags: ['exploración'], desc: '+1d4 una vez a una prueba de habilidad.' },
  { id: 'u-reparar', nombre: 'Reparar', icon: 'Wrench', nivel: 0, clases: ['artifice', 'bardo', 'clerigo', 'druida', 'hechicero', 'mago'], libro: 'PHB', tags: ['exploración'], desc: 'Repara una rotura en un objeto.' },
  { id: 'u-mensaje', nombre: 'Mensaje', icon: 'Send', nivel: 0, clases: ['artifice', 'bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['social', 'sigilo'], desc: 'Susurras y solo tu objetivo te oye.' },
  { id: 'u-ilusion-menor', nombre: 'Ilusión menor', icon: 'Ghost', nivel: 0, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['social', 'sigilo'], desc: 'Sonido o imagen pequeña para engañar.' },
  { id: 'u-prestidigitacion', nombre: 'Prestidigitación', icon: 'Sparkles', nivel: 0, clases: ['artifice', 'bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['exploración', 'social'], desc: 'Pequeños efectos sensoriales a discreción.' },
  { id: 'u-taumaturgia', nombre: 'Taumaturgia', icon: 'Flame', nivel: 0, clases: ['clerigo'], libro: 'PHB', tags: ['social'], desc: 'Voz atronadora, llamas de colores, temblores.' },
  { id: 'u-luces', nombre: 'Luces danzantes', icon: 'Sparkles', nivel: 0, clases: ['hechicero', 'mago'], libro: 'PHB', tags: ['exploración'], desc: 'Cuatro luces que iluminan y se mueven.' },
  { id: 'u-druidismo', nombre: 'Druidismo', icon: 'Leaf', nivel: 0, clases: ['druida'], libro: 'PHB', tags: ['exploración', 'supervivencia'], desc: 'Predices el clima y animas plantas.' },
  { id: 'u-moldear-tierra', nombre: 'Moldear tierra', icon: 'Mountain', nivel: 0, clases: ['druida', 'hechicero', 'mago'], libro: 'XGtE', tags: ['exploración'], desc: 'Excavas, mueves tierra o grabas piedra.' },
  { id: 'u-forma-agua', nombre: 'Dar forma al agua', icon: 'Droplets', nivel: 0, clases: ['artifice', 'druida', 'hechicero', 'mago'], libro: 'XGtE', tags: ['exploración'], desc: 'Mueves, congelas o tiñes agua.' },
  { id: 'u-control-llamas', nombre: 'Controlar llamas', icon: 'FlameKindling', nivel: 0, clases: ['druida', 'hechicero', 'mago'], libro: 'XGtE', tags: ['exploración'], desc: 'Expandes, apagas o animas fuegos.' },
  { id: 'u-rafaga', nombre: 'Ráfaga', icon: 'Wind', nivel: 0, clases: ['druida', 'hechicero', 'mago'], libro: 'XGtE', tags: ['exploración', 'control'], desc: 'Ráfaga de viento que empuja y mueve cosas.' },
  // ——— Nivel 1 ———
  { id: 'u-comprender', nombre: 'Comprender idiomas', icon: 'BookOpen', nivel: 1, clases: ['bardo', 'clerigo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['información'], desc: 'Entiendes lo escrito o hablado 1 hora.' },
  { id: 'u-detectar-magia', nombre: 'Detectar magia', icon: 'Eye', nivel: 1, clases: ['bardo', 'clerigo', 'druida', 'paladin', 'explorador', 'hechicero', 'mago'], libro: 'PHB', tags: ['información', 'exploración'], desc: 'Ves auras mágicas y su escuela.' },
  { id: 'u-identificar', nombre: 'Identificar', icon: 'Search', nivel: 1, clases: ['bardo', 'mago', 'artifice'], libro: 'PHB', tags: ['información'], desc: 'Revela propiedades de un objeto mágico.' },
  { id: 'u-dormir', nombre: 'Dormir', icon: 'Moon', nivel: 1, clases: ['bardo', 'hechicero', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Duerme 5d8 PV de criaturas por PV actuales.' },
  { id: 'u-hechizar', nombre: 'Hechizar persona', icon: 'Heart', nivel: 1, clases: ['bardo', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['social'], desc: 'Te trata como amigo 1 hora.' },
  { id: 'u-caida-pluma', nombre: 'Caída de pluma', icon: 'Feather', nivel: 1, clases: ['artifice', 'bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['movimiento', 'defensa'], desc: 'Caes despacio sin daño; reacción.' },
  { id: 'u-salto', nombre: 'Salto', icon: 'ArrowUpFromLine', nivel: 1, clases: ['druida', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['movimiento', 'exploración'], desc: 'Triplica la distancia de salto 1 minuto.' },
  { id: 'u-zancada', nombre: 'Zancada larga', icon: 'Footprints', nivel: 1, clases: ['artifice', 'bardo', 'druida', 'explorador', 'hechicero', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: '+3 m de velocidad 1 hora.' },
  { id: 'u-escudo', nombre: 'Escudo', icon: 'Shield', nivel: 1, clases: ['hechicero', 'mago'], libro: 'PHB', tags: ['defensa'], desc: '+5 CA hasta tu próximo turno; reacción.' },
  { id: 'u-proteccion', nombre: 'Protección contra el mal y el bien', icon: 'ShieldCheck', nivel: 1, clases: ['clerigo', 'druida', 'paladin', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Ventajas y protección contra ciertos tipos.' },
  { id: 'u-sirviente', nombre: 'Sirviente invisible', icon: 'Wind', nivel: 1, clases: ['bardo', 'mago'], libro: 'PHB', tags: ['exploración'], desc: 'Fuerza invisible que hace recados 1 hora.' },
  { id: 'u-disfraz', nombre: 'Disfrazarse', icon: 'VenetianMask', nivel: 1, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['social', 'sigilo'], desc: 'Cambias tu apariencia 1 hora.' },
  { id: 'u-hablar-animales', nombre: 'Hablar con animales', icon: 'Rabbit', nivel: 1, clases: ['bardo', 'druida', 'explorador'], libro: 'PHB', tags: ['social', 'exploración'], desc: 'Conversas con bestias 10 minutos.' },
  { id: 'u-santuario', nombre: 'Santuario', icon: 'Church', nivel: 1, clases: ['clerigo'], libro: 'PHB', tags: ['defensa'], desc: 'No pueden atacarte hasta que ataques.' },
  { id: 'u-niebla', nombre: 'Nube de niebla', icon: 'CloudFog', nivel: 1, clases: ['druida', 'explorador', 'hechicero', 'mago'], libro: 'PHB', tags: ['control', 'sigilo'], desc: 'Niebla densa que bloquea la vista.' },
  { id: 'u-retirada', nombre: 'Retirada expeditiva', icon: 'Zap', nivel: 1, clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: 'Correr con adicional 10 minutos.' },
  { id: 'u-enmarañar', nombre: 'Enmarañar', icon: 'Sprout', nivel: 1, clases: ['druida'], libro: 'PHB', tags: ['control'], desc: 'Vegetación que agarra y dificulta.' },
  // ——— Nivel 2 ———
  { id: 'u-invisibilidad', nombre: 'Invisibilidad', icon: 'EyeOff', nivel: 2, clases: ['artifice', 'bardo', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['sigilo'], desc: 'Invisible hasta atacar o lanzar.' },
  { id: 'u-paso-brumoso', nombre: 'Paso brumoso', icon: 'CloudFog', nivel: 2, clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: 'Teletransporte corto con adicional.' },
  { id: 'u-apertura', nombre: 'Apertura', icon: 'KeyRound', nivel: 2, clases: ['bardo', 'hechicero', 'mago'], libro: 'PHB', tags: ['exploración'], desc: 'Abre cerraduras y atascos mundanos.' },
  { id: 'u-telaraña', nombre: 'Telaraña', icon: 'Bug', nivel: 2, clases: ['hechicero', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Zona pegajosa que inmoviliza.' },
  { id: 'u-sugestion', nombre: 'Sugestión', icon: 'MessageCircle', nivel: 2, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['social', 'control'], desc: 'Le sugieres un curso de acción razonable.' },
  { id: 'u-inmovilizar', nombre: 'Inmovilizar persona', icon: 'PersonStanding', nivel: 2, clases: ['bardo', 'clerigo', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Paraliza a un humanoide (críticos gratis).' },
  { id: 'u-ceguera', nombre: 'Ceguera/sordera', icon: 'EarOff', nivel: 2, clases: ['bardo', 'clerigo', 'hechicero', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Ciega o ensordece sin concentración.' },
  { id: 'u-ver-invisible', nombre: 'Ver lo invisible', icon: 'Glasses', nivel: 2, clases: ['bardo', 'hechicero', 'mago'], libro: 'PHB', tags: ['información'], desc: 'Ves lo invisible y etéreo 1 hora.' },
  { id: 'u-desdibujarse', nombre: 'Desdibujarse', icon: 'Cloudy', nivel: 2, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Desventaja para golpearte 1 minuto.' },
  { id: 'u-imagen-multiple', nombre: 'Imagen múltiple', icon: 'Copy', nivel: 2, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Tres dobles ilusorios que confunden.' },
  { id: 'u-paso-rastro', nombre: 'Paso sin rastro', icon: 'Footprints', nivel: 2, clases: ['druida', 'explorador'], libro: 'PHB', tags: ['sigilo'], desc: '+10 Sigilo al grupo sin dejar huellas.' },
  { id: 'u-localizar-objeto', nombre: 'Localizar objeto', icon: 'Radar', nivel: 2, clases: ['bardo', 'clerigo', 'druida', 'mago', 'paladin', 'explorador'], libro: 'PHB', tags: ['información'], desc: 'Sientes la dirección de algo conocido.' },
  { id: 'u-localizar-naturaleza', nombre: 'Localizar animales o plantas', icon: 'Leaf', nivel: 2, clases: ['bardo', 'druida', 'explorador'], libro: 'PHB', tags: ['información', 'supervivencia'], desc: 'Encuentras flora y fauna cercanas.' },
  { id: 'u-agrandar', nombre: 'Agrandar/reducir', icon: 'Expand', nivel: 2, clases: ['hechicero', 'mago'], libro: 'PHB', tags: ['control', 'exploración'], desc: 'Duplica o reduce tamaño y daño.' },
  { id: 'u-cerradura', nombre: 'Cerradura arcana', icon: 'Lock', nivel: 2, clases: ['mago'], libro: 'PHB', tags: ['defensa'], desc: 'Sella una puerta mágicamente.' },
  { id: 'u-silencio', nombre: 'Silencio', icon: 'VolumeX', nivel: 2, clases: ['bardo', 'clerigo', 'explorador'], libro: 'PHB', tags: ['sigilo', 'control'], desc: 'Esfera sin sonido ni componentes verbales.' },
  { id: 'u-oscuridad', nombre: 'Oscuridad', icon: 'Moon', nivel: 2, clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control', 'sigilo'], desc: 'Tinajas mágicas que ni la vista ciega atraviesa.' },
  { id: 'u-levitar', nombre: 'Levitar', icon: 'ArrowUpFromLine', nivel: 2, clases: ['hechicero', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: 'Flotas hasta 6 m 10 minutos.' },
  // ——— Nivel 3 ———
  { id: 'u-volar', nombre: 'Volar', icon: 'Bird', nivel: 3, clases: ['artifice', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: 'Velocidad de vuelo 18 m 10 minutos.' },
  { id: 'u-disipar', nombre: 'Disipar magia', icon: 'X', nivel: 3, clases: ['bardo', 'clerigo', 'druida', 'paladin', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Termina un efecto mágico.' },
  { id: 'u-contrahechizo', nombre: 'Contrahechizo', icon: 'Ban', nivel: 3, clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Interrumpes un conjuro ajeno; reacción.' },
  { id: 'u-intermitencia', nombre: 'Intermitencia', icon: 'Zap', nivel: 3, clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['defensa'], desc: '50% de estar en el Plano Etéreo cada asalto.' },
  { id: 'u-prisa', nombre: 'Prisa', icon: 'Gauge', nivel: 3, clases: ['hechicero', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Doble velocidad, +2 CA y acción extra.' },
  { id: 'u-lentitud', nombre: 'Lentitud', icon: 'TimerOff', nivel: 3, clases: ['hechicero', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Ralentiza hasta 6 enemigos.' },
  { id: 'u-miedo', nombre: 'Miedo', icon: 'Ghost', nivel: 3, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Cono que aterroriza y hace huir.' },
  { id: 'u-patron', nombre: 'Patrón hipnótico', icon: 'Shell', nivel: 3, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Hechiza e incapacita en un cubo.' },
  { id: 'u-hablar-muertos', nombre: 'Hablar con los muertos', icon: 'Skull', nivel: 3, clases: ['bardo', 'clerigo'], libro: 'PHB', tags: ['información'], desc: 'Un cadáver responde 5 preguntas.' },
  { id: 'u-lenguas', nombre: 'Lenguas', icon: 'Languages', nivel: 3, clases: ['bardo', 'clerigo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['social'], desc: 'Entiendes y te entienden 1 hora.' },
  { id: 'u-respirar-agua', nombre: 'Respirar bajo el agua', icon: 'Waves', nivel: 3, clases: ['druida', 'explorador', 'hechicero', 'mago'], libro: 'PHB', tags: ['supervivencia'], desc: 'Hasta 10 respiran agua 24 horas.' },
  { id: 'u-caminar-aguas', nombre: 'Caminar sobre aguas', icon: 'Footprints', nivel: 3, clases: ['clerigo', 'druida', 'explorador', 'hechicero', 'mago'], libro: 'PHB', tags: ['movimiento', 'supervivencia'], desc: 'Pisas líquidos 1 hora.' },
  { id: 'u-circulo', nombre: 'Círculo mágico', icon: 'CircleDot', nivel: 3, clases: ['clerigo', 'paladin', 'hechicero', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Atrapa o protege contra un tipo de criatura.' },
  { id: 'u-no-deteccion', nombre: 'No detección', icon: 'EyeOff', nivel: 3, clases: ['bardo', 'mago'], libro: 'PHB', tags: ['sigilo'], desc: 'Te oculta de adivinación 8 horas.' },
  { id: 'u-enviar', nombre: 'Enviar mensaje', icon: 'Send', nivel: 3, clases: ['bardo', 'clerigo', 'mago'], libro: 'PHB', tags: ['información'], desc: 'Mensaje corto a cualquier distancia.' },
  { id: 'u-hablar-plantas', nombre: 'Hablar con las plantas', icon: 'Sprout', nivel: 3, clases: ['bardo', 'druida', 'explorador'], libro: 'PHB', tags: ['información'], desc: 'Las plantas te cuentan lo reciente.' },
  { id: 'u-crecimiento', nombre: 'Crecimiento vegetal', icon: 'Leaf', nivel: 3, clases: ['bardo', 'druida', 'explorador'], libro: 'PHB', tags: ['control', 'supervivencia'], desc: 'Malezas que frenan o cosechas ricas.' },
  { id: 'u-proteccion-energia', nombre: 'Protección contra energía', icon: 'ShieldCheck', nivel: 3, clases: ['clerigo', 'druida', 'explorador', 'hechicero', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Resistencia a un tipo de daño 1 hora.' },
  { id: 'u-remover-maldicion', nombre: 'Remover maldición', icon: 'Sparkles', nivel: 3, clases: ['clerigo', 'paladin', 'hechicero', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Rompe maldiciones y sintonías.' },
  { id: 'u-clarividencia', nombre: 'Clarividencia', icon: 'Telescope', nivel: 3, clases: ['bardo', 'clerigo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['información'], desc: 'Sensor invisible para ver u oír lejos.' },
  { id: 'u-siesta', nombre: 'Siesta del gato', icon: 'Cat', nivel: 3, clases: ['bardo', 'hechicero', 'mago'], libro: 'XGtE', tags: ['supervivencia'], desc: 'Descanso corto en 10 minutos.' },
  { id: 'u-comida', nombre: 'Crear comida y agua', icon: 'Drumstick', nivel: 3, clases: ['clerigo', 'paladin'], libro: 'PHB', tags: ['supervivencia'], desc: 'Alimenta a 15 personas un día.' },
  { id: 'u-cabaña', nombre: 'Cabaña diminuta', icon: 'House', nivel: 3, clases: ['bardo', 'mago'], libro: 'PHB', tags: ['supervivencia', 'defensa'], desc: 'Refugio seguro 8 horas.' },
  { id: 'u-cuerda', nombre: 'Truco de la cuerda', icon: 'Cable', nivel: 3, clases: ['mago'], libro: 'PHB', tags: ['supervivencia', 'sigilo'], desc: 'Escondite extradimensional 1 hora.' },
  // ——— Nivel 4 ———
  { id: 'u-polimorfar', nombre: 'Polimorfar', icon: 'Rabbit', nivel: 4, clases: ['bardo', 'druida', 'hechicero', 'mago'], libro: 'PHB', tags: ['control', 'defensa'], desc: 'Convierte a alguien en bestia.' },
  { id: 'u-destierro', nombre: 'Destierro', icon: 'Send', nivel: 4, clases: ['clerigo', 'paladin', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Expulsa a un plano 1 minuto.' },
  { id: 'u-invisibilidad-mayor', nombre: 'Invisibilidad mayor', icon: 'EyeOff', nivel: 4, clases: ['bardo', 'hechicero', 'mago'], libro: 'PHB', tags: ['sigilo'], desc: 'Invisible aunque ataques 1 minuto.' },
  { id: 'u-puerta-dimensional', nombre: 'Puerta dimensional', icon: 'DoorOpen', nivel: 4, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: 'Teletransporte de 150 m con pasajero.' },
  { id: 'u-ojo-arcano', nombre: 'Ojo arcano', icon: 'Eye', nivel: 4, clases: ['clerigo', 'hechicero', 'mago'], libro: 'PHB', tags: ['información'], desc: 'Ojo invisible que explora 1 hora.' },
  { id: 'u-adivinacion', nombre: 'Adivinación', icon: 'ScrollText', nivel: 4, clases: ['clerigo'], libro: 'PHB', tags: ['información'], desc: 'Presagio sobre una acción futura.' },
  { id: 'u-localizar-criatura', nombre: 'Localizar criatura', icon: 'Radar', nivel: 4, clases: ['bardo', 'clerigo', 'druida', 'mago', 'paladin', 'explorador'], libro: 'PHB', tags: ['información'], desc: 'Dirección de una criatura conocida.' },
  { id: 'u-control-agua', nombre: 'Controlar agua', icon: 'Waves', nivel: 4, clases: ['clerigo', 'druida', 'mago'], libro: 'PHB', tags: ['exploración', 'control'], desc: 'Mareas, remolinos o partir aguas.' },
  { id: 'u-confusion', nombre: 'Confusión', icon: 'Brain', nivel: 4, clases: ['bardo', 'druida', 'hechicero', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Enloquece una zona 1 minuto.' },
  { id: 'u-dominar-bestia', nombre: 'Dominar bestia', icon: 'Squirrel', nivel: 4, clases: ['druida'], libro: 'PHB', tags: ['control', 'social'], desc: 'Encantas a una bestia 1 minuto.' },
  { id: 'u-mover-tierra', nombre: 'Mover tierra', icon: 'Mountain', nivel: 4, clases: ['druida', 'hechicero', 'mago'], libro: 'PHB', tags: ['exploración'], desc: 'Remodelas el terreno (lento).' },
  { id: 'u-piel-piedra', nombre: 'Piel de piedra', icon: 'ShieldCheck', nivel: 4, clases: ['druida', 'explorador', 'hechicero', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Resistencia a daño físico 1 hora.' },
  { id: 'u-terreno', nombre: 'Terreno alucinatorio', icon: 'Image', nivel: 4, clases: ['bardo', 'druida', 'hechicero', 'mago'], libro: 'PHB', tags: ['sigilo', 'control'], desc: 'Camuflas 45 m de terreno.' },
  { id: 'u-cofre', nombre: 'Cofre secreto', icon: 'Archive', nivel: 4, clases: ['mago'], libro: 'PHB', tags: ['exploración'], desc: 'Escondite extradimensional permanente.' },
  // ——— Nivel 5 ———
  { id: 'u-dominar-persona', nombre: 'Dominar persona', icon: 'Brain', nivel: 5, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control', 'social'], desc: 'Control total de un humanoide 1 minuto.' },
  { id: 'u-telequinesis', nombre: 'Telequinesis', icon: 'Hand', nivel: 5, clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control', 'exploración'], desc: 'Mueves criaturas y objetos con la mente.' },
  { id: 'u-muro-fuerza', nombre: 'Muro de fuerza', icon: 'BrickWall', nivel: 5, clases: ['mago'], libro: 'PHB', tags: ['control', 'defensa'], desc: 'Barrera inmune a casi todo 10 minutos.' },
  { id: 'u-escudriñar', nombre: 'Escudriñar', icon: 'Telescope', nivel: 5, clases: ['bardo', 'clerigo', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['información'], desc: 'Espías a una criatura a distancia.' },
  { id: 'u-contactar', nombre: 'Contactar con otro plano', icon: 'Phone', nivel: 5, clases: ['brujo', 'mago'], libro: 'PHB', tags: ['información'], desc: 'Preguntas a una entidad (riesgo de locura).' },
  { id: 'u-atadura', nombre: 'Atadura planar', icon: 'Link', nivel: 5, clases: ['bardo', 'clerigo', 'druida', 'mago'], libro: 'PHB', tags: ['invocación'], desc: 'Vinculas a un elemental o infernal.' },
  { id: 'u-despertar', nombre: 'Despertar', icon: 'Sunrise', nivel: 5, clases: ['bardo', 'druida'], libro: 'PHB', tags: ['social', 'invocación'], desc: 'Das inteligencia a bestia o planta.' },
  { id: 'u-comunion', nombre: 'Comunión', icon: 'Church', nivel: 5, clases: ['clerigo'], libro: 'PHB', tags: ['información'], desc: 'Tres respuestas sí/no de tu deidad.' },
  { id: 'u-inmovilizar-monstruo', nombre: 'Inmovilizar monstruo', icon: 'PersonStanding', nivel: 5, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Paraliza a cualquier criatura.' },
  { id: 'u-apariencia', nombre: 'Apariencia', icon: 'Users', nivel: 5, clases: ['bardo', 'hechicero', 'mago'], libro: 'PHB', tags: ['social', 'sigilo'], desc: 'Disfraza a todo el grupo 8 horas.' },
  { id: 'u-memoria', nombre: 'Modificar memoria', icon: 'Brain', nivel: 5, clases: ['bardo', 'mago'], libro: 'PHB', tags: ['social'], desc: 'Reescribes recuerdos.' },
  { id: 'u-circulo-teletransporte', nombre: 'Círculo de teletransporte', icon: 'CircleDot', nivel: 5, clases: ['bardo', 'hechicero', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: 'Portal permanente a otro círculo.' },
  { id: 'u-zancada-arborea', nombre: 'Zancada arbórea', icon: 'Trees', nivel: 5, clases: ['druida', 'explorador'], libro: 'PHB', tags: ['movimiento'], desc: 'Viajas entre árboles lejanos.' },
  { id: 'u-muro-piedra', nombre: 'Muro de piedra', icon: 'BrickWall', nivel: 5, clases: ['druida', 'hechicero', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Muralla permanente o temporal.' },
  { id: 'u-geas', nombre: 'Geas', icon: 'ScrollText', nivel: 5, clases: ['bardo', 'clerigo', 'druida', 'paladin', 'mago'], libro: 'PHB', tags: ['social', 'control'], desc: 'Órdenes mágicas con castigo psíquico.' },
  { id: 'u-saber', nombre: 'Saber legendario', icon: 'BookOpen', nivel: 5, clases: ['bardo', 'clerigo', 'mago'], libro: 'PHB', tags: ['información'], desc: 'Historia de algo legendario.' },
  { id: 'u-pasamuros', nombre: 'Pasamuros', icon: 'DoorOpen', nivel: 5, clases: ['mago'], libro: 'PHB', tags: ['movimiento', 'exploración'], desc: 'Abre un paso en muros 1 hora.' },
  // ——— Nivel 6 ———
  { id: 'u-globo', nombre: 'Globo de invulnerabilidad', icon: 'ShieldCheck', nivel: 6, clases: ['hechicero', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Inmune a conjuros de N5 o menos.' },
  { id: 'u-vision', nombre: 'Visión verdadera', icon: 'Glasses', nivel: 6, clases: ['bardo', 'clerigo', 'hechicero', 'mago'], libro: 'PHB', tags: ['información'], desc: 'Ves lo real: invisible, ilusiones, formas.' },
  { id: 'u-ilusion-programada', nombre: 'Ilusión programada', icon: 'Image', nivel: 6, clases: ['bardo', 'mago'], libro: 'PHB', tags: ['sigilo', 'social'], desc: 'Ilusión con guion de 5 minutos.' },
  { id: 'u-recipiente', nombre: 'Recipiente mágico', icon: 'Ghost', nivel: 6, clases: ['mago'], libro: 'PHB', tags: ['control'], desc: 'Tu alma posee otro cuerpo.' },
  { id: 'u-caminar-viento', nombre: 'Caminar con el viento', icon: 'Wind', nivel: 6, clases: ['druida'], libro: 'PHB', tags: ['movimiento'], desc: 'El grupo viaja como nube 8 horas.' },
  { id: 'u-transporte-plantas', nombre: 'Transporte por plantas', icon: 'Sprout', nivel: 6, clases: ['druida'], libro: 'PHB', tags: ['movimiento'], desc: 'Entras en una planta y sales en otra.' },
  { id: 'u-contingencia', nombre: 'Contingencia', icon: 'AlarmClock', nivel: 6, clases: ['mago'], libro: 'PHB', tags: ['defensa'], desc: 'Un conjuro se dispara solo al cumplirse algo.' },
  { id: 'u-encontrar-senda', nombre: 'Encontrar la senda', icon: 'Compass', nivel: 6, clases: ['bardo', 'clerigo', 'druida'], libro: 'PHB', tags: ['información', 'exploración'], desc: 'Conoces el camino a un lugar.' },
  // ——— Nivel 7 ———
  { id: 'u-teletransporte', nombre: 'Teletransporte', icon: 'Send', nivel: 7, clases: ['bardo', 'hechicero', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: 'Viaje instantáneo con riesgo de error.' },
  { id: 'u-cambiar-plano', nombre: 'Cambiar de plano', icon: 'Orbit', nivel: 7, clases: ['clerigo', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: 'Viajas a otro plano con el grupo.' },
  { id: 'u-jaula', nombre: 'Jaula de fuerza', icon: 'Box', nivel: 7, clases: ['bardo', 'hechicero', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Prisión sin salvación 1 hora.' },
  { id: 'u-simulacro', nombre: 'Simulacro', icon: 'Copy', nivel: 7, clases: ['mago'], libro: 'PHB', tags: ['invocación'], desc: 'Duplicado de nieve de una criatura.' },
  { id: 'u-palabra-divina', nombre: 'Palabra divina', icon: 'Megaphone', nivel: 7, clases: ['clerigo'], libro: 'PHB', tags: ['control'], desc: 'Destierra, aturde o mata según PV.' },
  { id: 'u-espejismo', nombre: 'Espejismo arcano', icon: 'Image', nivel: 7, clases: ['bardo', 'druida', 'mago'], libro: 'PHB', tags: ['exploración', 'sigilo'], desc: 'Ilusión táctil de 2 km².' },
  { id: 'u-reclusion', nombre: 'Reclusión', icon: 'Lock', nivel: 7, clases: ['mago'], libro: 'PHB', tags: ['sigilo', 'defensa'], desc: 'Escondes algo del mundo.' },
  // ——— Nivel 8 ———
  { id: 'u-dominar-monstruo', nombre: 'Dominar monstruo', icon: 'Brain', nivel: 8, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Control total de una criatura 1 hora.' },
  { id: 'u-antimagia', nombre: 'Campo antimagia', icon: 'ShieldX', nivel: 8, clases: ['clerigo', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Anula toda magia cercana.' },
  { id: 'u-laberinto', nombre: 'Laberinto', icon: 'Network', nivel: 8, clases: ['mago'], libro: 'PHB', tags: ['control'], desc: 'Encierra a alguien en un demiplano.' },
  { id: 'u-control-clima', nombre: 'Controlar el clima', icon: 'CloudSun', nivel: 8, clases: ['clerigo', 'druida', 'mago'], libro: 'PHB', tags: ['exploración'], desc: 'Cambias el tiempo en kilómetros.' },
  { id: 'u-clon', nombre: 'Clon', icon: 'Copy', nivel: 8, clases: ['mago'], libro: 'PHB', tags: ['supervivencia'], desc: 'Cuerpo de repuesto que crece 120 días.' },
  { id: 'u-facilidad', nombre: 'Facilidad de palabra', icon: 'MessageCircle', nivel: 8, clases: ['bardo', 'brujo'], libro: 'PHB', tags: ['social'], desc: 'No puedes fallar lo social 1 hora.' },
  { id: 'u-debilidad', nombre: 'Debilidad mental', icon: 'Brain', nivel: 8, clases: ['bardo', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Destroza INT y CAR y aturde.' },
  { id: 'u-palabra-aturdir', nombre: 'Palabra de poder aturdir', icon: 'Megaphone', nivel: 8, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Aturde sin salvación si tiene 150 PV o menos.' },
  // ——— Nivel 9 ———
  { id: 'u-deseo', nombre: 'Deseo', icon: 'Sparkles', nivel: 9, clases: ['hechicero', 'mago'], libro: 'PHB', tags: ['exploración', 'social', 'control', 'movimiento', 'información', 'defensa'], desc: 'El conjuro más poderoso: casi lo que pidas.' },
  { id: 'u-parar-tiempo', nombre: 'Parar el tiempo', icon: 'Timer', nivel: 9, clases: ['mago'], libro: 'PHB', tags: ['control'], desc: 'Actúas libre 1d4+1 asaltos.' },
  { id: 'u-cambio-forma', nombre: 'Cambio de forma', icon: 'Rabbit', nivel: 9, clases: ['druida', 'mago'], libro: 'PHB', tags: ['exploración', 'control', 'sigilo'], desc: 'Te transformas conservando mente y magias.' },
  { id: 'u-polimorfismo-verdadero', nombre: 'Polimorfismo verdadero', icon: 'Sparkles', nivel: 9, clases: ['bardo', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Transformación permanente si concentras 1 hora.' },
  { id: 'u-pronostico', nombre: 'Pronóstico', icon: 'Eye', nivel: 9, clases: ['druida', 'brujo', 'mago'], libro: 'PHB', tags: ['defensa'], desc: 'Ventaja en todo y nadie te sorprende 8 horas.' },
  { id: 'u-puerta', nombre: 'Puerta', icon: 'DoorOpen', nivel: 9, clases: ['hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['movimiento'], desc: 'Portal a cualquier punto del multiverso.' },
  { id: 'u-invulnerabilidad', nombre: 'Invulnerabilidad', icon: 'ShieldCheck', nivel: 9, clases: ['mago'], libro: 'XGtE', tags: ['defensa'], desc: 'Inmune a TODO daño 10 minutos.' },
  { id: 'u-palabra-matar', nombre: 'Palabra de poder matar', icon: 'Skull', nivel: 9, clases: ['bardo', 'hechicero', 'brujo', 'mago'], libro: 'PHB', tags: ['control'], desc: 'Mata al instante con 100 PV o menos.' },
  { id: 'u-muro-prismatico', nombre: 'Muro prismático', icon: 'Layers', nivel: 9, clases: ['bardo', 'mago'], libro: 'PHB', tags: ['control', 'defensa'], desc: 'Siete capas, cada una con su efecto.' },
];
