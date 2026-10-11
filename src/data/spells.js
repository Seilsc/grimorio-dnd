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

// Trucos que hacen daño (PHB + XGtE + TCoE). No gastan espacio: su daño escala
// con el NIVEL DE PERSONAJE (1 dado, 2 a nv.5, 3 a nv.11, 4 a nv.17) y usan tu
// característica de lanzamiento. Se muestran planos en N1–N9.
// Excluidos: filo explosivo/fuego verde (dependen del arma), piedra mágica (arma),
// atracción... no: solo quedan fuera los de FUE/INT, que sí entran (ver abajo).
export const CANTRIPS = [
  { id: 't-descarga-fuego', nombre: 'Descarga de fuego', icon: 'Flame', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'fuego', color: '#f97316', caras: 10, clases: ['hechicero', 'mago'], libro: 'PHB', notas: 'Truco: escala con tu nivel (2 dados a nv. 5).' },
  { id: 't-explosion-sobrenatural', nombre: 'Explosión sobrenatural', icon: 'Zap', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'atk', haces: true, tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'fuerza', color: '#60a5fa', caras: 10, clases: ['brujo'], libro: 'PHB', notas: 'Un rayo por haz (2 haces a nv. 5); cada uno tira ataque.' },
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
  { id: 't-explosion-espadas', nombre: 'Explosión de espadas', icon: 'Swords', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'des', tirada: 'salv-des', tiradaLabel: 'Salvación DES', tipoDano: 'fuerza', color: '#60a5fa', caras: 6, clases: ['artifice', 'hechicero', 'brujo', 'mago'], libro: 'XGtE', notas: 'Alcanza a todos a 1,5 m.', saveFrac: 0 },
  { id: 't-atraccion-relampago', nombre: 'Atracción de relámpago', icon: 'Zap', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, truco: true, mech: 'fue', tirada: 'salv-fue', tiradaLabel: 'Salvación FUE', tipoDano: 'relámpago', color: '#7dd3fc', caras: 8, clases: ['artifice', 'druida', 'hechicero', 'brujo', 'mago'], libro: 'XGtE', notas: 'Arrastra 3 m si falla. Si supera no hay daño.', saveFrac: 0 },
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
  { id: 'm-castigo-divino', nombre: 'Castigo divino', icon: 'Sun', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', golpes: 'uno', tope: 5, tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'radiante', color: '#facc15', base: [{ n: 2, c: 8, r: 'radiante' }], step: [{ n: 1, c: 8, r: 'radiante' }], clases: ['paladin'], libro: 'PHB', notas: 'Gasta un espacio (máx. 5.º); +1d8 contra muertos vivientes o infernales, no contado. Sin contar el arma.' },
  { id: 'm-ataque-furtivo', nombre: 'Ataque furtivo', icon: 'Eye', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', golpes: 'uno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'perforante', color: '#d1a054', dadosPJ: (lvl) => [{ n: Math.max(1, Math.ceil(lvl / 2)), c: 6, r: 'perforante' }], step: [], clases: ['picaro', 'picaro-arcano'], libro: 'PHB', notas: 'Una vez por turno con ventaja o aliado cerca. Sin contar el arma.' },
  { id: 'm-golpe-divino', nombre: 'Golpe divino', icon: 'Shield', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', golpes: 'uno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'radiante', color: '#facc15', dadosPJ: (lvl) => [{ n: lvl >= 14 ? 2 : 1, c: 8, r: 'radiante' }], step: [], clases: ['clerigo'], libro: 'PHB', notas: 'Una vez por turno al impactar con arma. Sin contar el arma.' },
  { id: 'm-marca-cazador', nombre: 'Marca del cazador', icon: 'Target', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', golpes: 'turno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'del arma', color: '#b08968', base: [{ n: 1, c: 6 }], step: [], clases: ['explorador'], libro: 'PHB', notas: '+1d6 por cada golpe que impacte. Concentración.' },
  { id: 'm-maleficio', nombre: 'Maleficio', icon: 'Moon', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mod', golpes: 'haces', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'necrótico', color: '#a855f7', base: [{ n: 1, c: 6, r: 'necrotico' }], step: [], clases: ['brujo'], libro: 'PHB', notas: 'Supone tus ataques de Explosión sobrenatural (1d6 por haz que impacte). Concentración.' },
  { id: 'm-castigo-sobrenatural', nombre: 'Castigo sobrenatural', icon: 'Ghost', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', golpes: 'uno', tope: 5, tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'fuerza', color: '#60a5fa', base: [{ n: 1, c: 8, r: 'fuerza' }], step: [{ n: 1, c: 8, r: 'fuerza' }], clases: ['brujo'], libro: 'XGtE', notas: 'Con arma de pacto; derriba si es Enorme o menor. Sin contar el arma.' },
  { id: 'm-floreo', nombre: 'Floreo de duelo', icon: 'Music', nivelMin: 1, nivelMax: 9, nivelBase: 1, generic: true, cat: 'mele', mech: 'atk', atkStat: 'mel', golpes: 'uno', tirada: 'ataque', tiradaLabel: 'Ataque (CA)', tipoDano: 'del arma', color: '#b08968', dadosPJ: (lvl) => [{ n: 1, c: lvl >= 15 ? 12 : lvl >= 10 ? 10 : lvl >= 5 ? 8 : 6 }], step: [], clases: ['bardo'], libro: 'XGtE', notas: 'Gasta un dado de Inspiración al impactar. Sin contar el arma.' },
];

SPELLS.push(...MELEE);
