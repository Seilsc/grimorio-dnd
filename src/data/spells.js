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
  { key: 'bardo', label: 'Bardo' },
  { key: 'clerigo', label: 'Clérigo' },
  { key: 'druida', label: 'Druida' },
  { key: 'paladin', label: 'Paladín' },
  { key: 'explorador', label: 'Explorador' },
  { key: 'hechicero', label: 'Hechicero' },
  { key: 'brujo', label: 'Brujo' },
  { key: 'mago', label: 'Mago' },
  { key: 'caballero', label: 'Caballero arcano' },
  { key: 'picaro', label: 'Pícaro arcano' },
];

export const claseLabel = (key) => CLASES.find((c) => c.key === key)?.label ?? key;

export function spellsFor(clase) {
  if (!clase || clase === 'todas') return SPELLS;
  if (clase === 'caballero' || clase === 'picaro') return SPELLS.filter((s) => s.clases.includes('mago'));
  return SPELLS.filter((s) => s.clases.includes(clase));
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
  { id: 'diablo-polvo', nombre: 'Diablo de polvo', icon: 'Wind', nivelMin: 2, nivelMax: 9, nivelBase: 2, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'contundente', color: '#b08968', base: [{ n: 1, c: 8, r: 'contundente' }], step: [{ n: 1, c: 8, r: 'contundente' }], clases: ['druida', 'hechicero', 'mago'], libro: 'XGtE', notas: 'Contado un impacto; puedes moverlo y empujar.' },
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
  { id: 'cono-frio', nombre: 'Cono de frío', icon: 'Cone', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'frío', color: '#38bdf8', base: [{ n: 8, c: 8, r: 'frio' }], step: [{ n: 1, c: 8, r: 'frio' }], clases: ['druida', 'hechicero', 'mago'], libro: 'PHB', notas: 'Cono de 18 m. Mitad si supera.' },
  { id: 'nube-asesina', nombre: 'Nube asesina', icon: 'Skull', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'veneno', color: '#65a30d', base: [{ n: 5, c: 8, r: 'veneno' }], step: [{ n: 1, c: 8, r: 'veneno' }], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Contado un impacto de la nube; intoxica por asalto.' },
  { id: 'plaga-insectos', nombre: 'Plaga de insectos', icon: 'Bug', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 4, c: 10, r: 'perforante' }], step: [{ n: 1, c: 10, r: 'perforante' }], clases: ['clerigo', 'druida', 'hechicero'], libro: 'PHB', notas: 'Contado un impacto del enjambre.' },
  { id: 'energia-negativa', nombre: 'Inundación de energía negativa', icon: 'Ghost', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 5, c: 12, r: 'necrotico' }], step: [{ n: 1, c: 12, r: 'necrotico' }], clases: ['brujo', 'mago'], libro: 'XGtE', notas: 'Si lo mata, puede alzarse como zombi.' },
  { id: 'ola-destructiva', nombre: 'Ola destructiva', icon: 'Hand', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'trueno + radiante', color: '#facc15', base: [{ n: 5, c: 6, r: 'trueno' }, { n: 5, c: 6, r: 'radiante' }], step: [{ n: 1, c: 6, r: 'trueno' }, { n: 1, c: 6, r: 'radiante' }], clases: ['paladin'], libro: 'PHB', notas: 'Derriba a quien falle. Mitad si supera.' },
  { id: 'descarga-conjunta', nombre: 'Descarga conjunta', icon: 'Target', nivelMin: 5, nivelMax: 9, nivelBase: 5, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'perforante', color: '#d1a054', base: [{ n: 8, c: 8, r: 'perforante' }], step: [{ n: 1, c: 8, r: 'perforante' }], clases: ['explorador'], libro: 'XGtE', notas: 'Requiere munición; lluvia sobre una zona.' },
  // ——— Nivel 6 ———
  { id: 'cadena-relampagos', nombre: 'Cadena de relámpagos', icon: 'PlugZap', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'relámpago', color: '#7dd3fc', base: [{ n: 10, c: 8, r: 'relampago' }], step: [{ n: 1, c: 8, r: 'relampago' }], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Contado al primer objetivo; salta a otros tres.' },
  { id: 'rayo-solar', nombre: 'Rayo solar', icon: 'Sun', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'radiante', color: '#facc15', base: [{ n: 6, c: 8, r: 'radiante' }], step: [{ n: 1, c: 8, r: 'radiante' }], clases: ['clerigo', 'druida', 'mago'], libro: 'PHB', notas: 'Contado un impacto; ciega y se reutiliza.' },
  { id: 'esfera-congelacion', nombre: 'Esfera de congelación', icon: 'Snowflake', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'frío', color: '#38bdf8', base: [{ n: 10, c: 6, r: 'frio' }], step: [{ n: 1, c: 6, r: 'frio' }], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Explosión de 18 m. Mitad si supera.' },
  { id: 'barrera-cuchillas', nombre: 'Barrera de cuchillas', icon: 'Sword', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'cortante', color: '#d1a054', base: [{ n: 6, c: 10, r: 'cortante' }], step: [{ n: 1, c: 10, r: 'cortante' }], clases: ['clerigo'], libro: 'PHB', notas: 'Contado un impacto al cruzar el muro.' },
  { id: 'dano', nombre: 'Daño', icon: 'HeartPulse', nivelMin: 6, nivelMax: 9, nivelBase: 6, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 14, c: 6, r: 'necrotico' }], step: [{ n: 2, c: 6, r: 'necrotico' }], clases: ['clerigo'], libro: 'PHB', notas: 'Mitad si supera; no te cura.' },
  // ——— Nivel 7 ———
  { id: 'tormenta-fuego', nombre: 'Tormenta de fuego', icon: 'Flame', nivelMin: 7, nivelMax: 9, nivelBase: 7, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 7, c: 10, r: 'fuego' }], step: [{ n: 1, c: 10, r: 'fuego' }], clases: ['clerigo', 'druida', 'hechicero'], libro: 'PHB', notas: 'Varios cubos a repartir. Mitad si supera.' },
  { id: 'bola-fuego-retardada', nombre: 'Bola de fuego retardada', icon: 'Timer', nivelMin: 7, nivelMax: 9, nivelBase: 7, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 12, c: 6, r: 'fuego' }], step: [{ n: 1, c: 6, r: 'fuego' }], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Sin contar +1d6 por asalto cargándola.' },
  // ——— Nivel 8 ———
  { id: 'explosion-solar', nombre: 'Explosión solar', icon: 'Sunrise', nivelMin: 8, nivelMax: 9, nivelBase: 8, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'radiante', color: '#facc15', base: [{ n: 12, c: 6, r: 'radiante' }], step: [{ n: 1, c: 6, r: 'radiante' }], clases: ['clerigo', 'druida', 'hechicero', 'mago'], libro: 'PHB', notas: 'Radio de 45 m; ciega. Mitad si supera.' },
  { id: 'nube-incendiaria', nombre: 'Nube incendiaria', icon: 'CloudFog', nivelMin: 8, nivelMax: 9, nivelBase: 8, generic: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuego', color: '#f97316', base: [{ n: 10, c: 8, r: 'fuego' }], step: [{ n: 1, c: 8, r: 'fuego' }], clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Contado un impacto de la nube; quema por asalto.' },
  { id: 'marchitamiento-horrible', nombre: 'Marchitamiento horrible', icon: 'Skull', nivelMin: 8, nivelMax: 9, nivelBase: 8, generic: true, mech: 'con', tirada: 'salv-con', tiradaLabel: 'Salvación CON', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 10, c: 8, r: 'necrotico' }], step: [{ n: 1, c: 8, r: 'necrotico' }], clases: ['hechicero', 'mago'], libro: 'XGtE', notas: 'Afecta a todos los no constructos ni no-muertos. Mitad si supera.' },
];

SPELLS.push(...SPELLS_EXTRA);
