// Motor de daño — réplica exacta de las fórmulas del Excel.
import { SPELLS, getSpell } from '../data/spells.js';

export const avgDie = (caras) => (caras + 1) / 2;

export const attackBonus = (mod, comp) => mod + comp;
export const spellDC = (mod, comp) => 8 + mod + comp;

// Excel ataque: =(MAX(0,20-MAX(2,CA-bono))+1)/20
export const pHit = (ca, bono) => (Math.max(0, 20 - Math.max(2, ca - bono)) + 1) / 20;

// Excel salvación: =MAX(0,MIN(1,(21-(CD-bono))/20))
export const pSaveSuccess = (dc, bonoSalv) =>
  Math.max(0, Math.min(1, (21 - (dc - bonoSalv)) / 20));

const attackDmg = (nDados, caras, probHit) => nDados * avgDie(caras) * (probHit + 0.05);

const saveDmg = (nDados, caras, fijo, pFail, pSave, fraction) =>
  (nDados * avgDie(caras) + fijo) * (pFail + pSave * fraction);

// Resistencias del objetivo: multiplicador por tipo de daño (1 normal, 0.5 resiste, 0 inmune, 2 vulnerable).
// El Excel las ignora; la web las aplica encima del cálculo del Excel.
export const RES_DEFAULT = { fuego: 1, frio: 1, necrotico: 1, fuerza: 1, contundente: 1, perforante: 1, radiante: 1 };

export function dadosStr(spell, nivel) {
  if (nivel < spell.nivelMin || nivel > spell.nivelMax) return '–';
  switch (spell.id) {
    case 'proyectil-magico': {
      const d = spell.dardosBase + (nivel - 1) * spell.dardosExtra;
      return `${d} dardos (1d4+1)`;
    }
    case 'rayo-abrasador': {
      const r = spell.rayosBase + (nivel - spell.nivelBase) * spell.rayosExtra;
      return `${r} rayos (2d6 c/u)`;
    }
    case 'cuchillo-hielo': {
      const e = spell.explosion.dadosBase + (nivel - 1) * spell.explosion.extraPorNivel;
      return `1d10 + ${e}d6 explosión`;
    }
    case 'dedo-muerte': return '7d8+30';
    case 'desintegrar': {
      const n = spell.dadosBase + (nivel - spell.nivelBase) * spell.extraPorNivel;
      return `${n}d6+40`;
    }
    case 'lluvia-meteoritos': return '40d6 (20 fuego + 20 cont.)';
    default: {
      const n = spell.dadosBase + (nivel - spell.nivelBase) * spell.extraPorNivel;
      const f = spell.fijo ? `+${spell.fijo}` : '';
      return `${n}d${spell.caras}${f}`;
    }
  }
}

/**
 * stats = { mod, comp, ca, des, con, res }
 * devuelve { dmg, lanzable, motivo, prob, probLabel, dados }
 */
export function spellDamage(spellOrId, nivel, stats) {
  const spell = typeof spellOrId === 'string' ? getSpell(spellOrId) : spellOrId;
  const { mod, comp, ca, des, con, sab } = stats;
  const res = (k) => stats.res?.[k] ?? 1;
  const bono = attackBonus(mod, comp);
  const dc = spellDC(mod, comp);

  if (nivel < spell.nivelMin || nivel > spell.nivelMax) {
    return {
      dmg: null, lanzable: false,
      motivo: nivel < spell.nivelMin ? `Requiere espacio ${spell.nivelMin}+` : 'Sin mejora con nivel superior',
      prob: null, probLabel: '–', dados: '–',
    };
  }

  const pH = pHit(ca, bono);
  const pSdes = pSaveSuccess(dc, des);
  const pScon = pSaveSuccess(dc, con);
  const pSsab = pSaveSuccess(dc, sab ?? 2);
  const fDes = 1 - pSdes, fCon = 1 - pScon, fSab = 1 - pSsab;

  // Hechizos añadidos (spec genérica): mismo modelo probabilístico que el Excel.
  if (spell.generic) return genericDamage(spell, nivel, { stats, bono, dc, pH, pSdes, pScon, pSsab, fDes, fCon, fSab });

  switch (spell.id) {
    case 'bola-fuego':
    case 'manos-ardientes': {
      const n = spell.dadosBase + (nivel - spell.nivelBase) * spell.extraPorNivel;
      const dmg = saveDmg(n, spell.caras, 0, fDes, pSdes, 0.5) * res('fuego');
      return { dmg, lanzable: true, prob: fDes, probLabel: `${(fDes * 100).toFixed(0)}% fallo salv.`, dados: dadosStr(spell, nivel) };
    }
    case 'marchitar': {
      const n = spell.dadosBase + (nivel - spell.nivelBase) * spell.extraPorNivel;
      const dmg = saveDmg(n, spell.caras, 0, fCon, pScon, 0.5) * res('necrotico');
      return { dmg, lanzable: true, prob: fCon, probLabel: `${(fCon * 100).toFixed(0)}% fallo salv.`, dados: dadosStr(spell, nivel) };
    }
    case 'dedo-muerte': {
      const dmg = saveDmg(7, 8, 30, fCon, pScon, 0.5) * res('necrotico');
      return { dmg, lanzable: true, prob: fCon, probLabel: `${(fCon * 100).toFixed(0)}% fallo salv.`, dados: dadosStr(spell, nivel) };
    }
    case 'desintegrar': {
      const n = spell.dadosBase + (nivel - spell.nivelBase) * spell.extraPorNivel;
      const dmg = saveDmg(n, spell.caras, spell.fijo, fDes, pSdes, 0) * res('fuerza');
      return { dmg, lanzable: true, prob: fDes, probLabel: `${(fDes * 100).toFixed(0)}% fallo salv. (0 si salva)`, dados: dadosStr(spell, nivel) };
    }
    case 'lluvia-meteoritos': {
      const base = saveDmg(40, 6, 0, fDes, pSdes, 0.5);
      const dmg = base * (0.5 * res('fuego') + 0.5 * res('contundente'));
      return { dmg, lanzable: true, prob: fDes, probLabel: `${(fDes * 100).toFixed(0)}% fallo salv.`, dados: dadosStr(spell, nivel) };
    }
    case 'causar-heridas': {
      const n = spell.dadosBase + (nivel - spell.nivelBase) * spell.extraPorNivel;
      const dmg = attackDmg(n, spell.caras, pH) * res('necrotico');
      return { dmg, lanzable: true, prob: pH, probLabel: `${(pH * 100).toFixed(0)}% impacto (+5% crít.)`, dados: dadosStr(spell, nivel) };
    }
    case 'orbe-cromatico': {
      const n = spell.dadosBase + (nivel - spell.nivelBase) * spell.extraPorNivel;
      // tipo a elegir: se supone que eliges uno sin resistencia (×1)
      const dmg = attackDmg(n, spell.caras, pH);
      return { dmg, lanzable: true, prob: pH, probLabel: `${(pH * 100).toFixed(0)}% impacto (+5% crít.)`, dados: dadosStr(spell, nivel) };
    }
    case 'virote-guia': {
      const n = spell.dadosBase + (nivel - spell.nivelBase) * spell.extraPorNivel;
      const dmg = attackDmg(n, spell.caras, pH) * res('radiante');
      return { dmg, lanzable: true, prob: pH, probLabel: `${(pH * 100).toFixed(0)}% impacto (+5% crít.)`, dados: dadosStr(spell, nivel) };
    }
    case 'rayo-abrasador': {
      const rays = spell.rayosBase + (nivel - spell.nivelBase) * spell.rayosExtra;
      const perRay = attackDmg(spell.dadosPorRayo, spell.caras, pH);
      const dmg = rays * perRay * res('fuego');
      return { dmg, lanzable: true, prob: pH, probLabel: `${(pH * 100).toFixed(0)}% por rayo ×${rays}`, dados: dadosStr(spell, nivel) };
    }
    case 'proyectil-magico': {
      const darts = spell.dardosBase + (nivel - 1) * spell.dardosExtra;
      const dmg = darts * 3.5 * res('fuerza');
      return { dmg, lanzable: true, prob: 1, probLabel: '100% (nunca falla)', dados: dadosStr(spell, nivel) };
    }
    case 'cuchillo-hielo': {
      const atk = attackDmg(1, 10, pH) * res('perforante');
      const nE = spell.explosion.dadosBase + (nivel - 1) * spell.explosion.extraPorNivel;
      const exploFull = nE * avgDie(spell.explosion.caras);
      const explo = exploFull * fDes * res('frio'); // fracción 0: sin mitad
      return {
        dmg: atk + explo, lanzable: true, prob: pH,
        probLabel: `${(pH * 100).toFixed(0)}% ataque + ${(fDes * 100).toFixed(0)}% explo.`,
        dados: dadosStr(spell, nivel),
        desglose: { atk, explo },
      };
    }
    default:
      return { dmg: null, lanzable: false, motivo: '—', prob: null, probLabel: '–', dados: '–' };
  }
}

/**
 * Calculadora genérica para los hechizos añadidos: mismo modelo que el Excel
 * (crítico +5% en ataques, mitad al salvar salvo saveFrac 0), con dados por partes
 * [{n, c(caras), r(tipo de resistencia)}], escalado por nivel y resistencias.
 */
export function genericDamage(spec, nivel, ctx) {
  const { stats } = ctx;
  const res = (k) => (!k ? 1 : stats.res?.[k] ?? 1);
  const subidas = spec.cada
    ? Math.floor((nivel - spec.nivelBase) / spec.cada)
    : nivel - spec.nivelBase;
  // media de dados por tipo de resistencia
  const dice = {};
  const add = (parts, mult) => {
    for (const p of parts || []) {
      const k = p.r || '_';
      dice[k] = (dice[k] || 0) + p.n * mult * avgDie(p.c);
    }
  };
  add(spec.base, 1);
  add(spec.step, subidas);
  const fijo = (spec.fijo || 0) + (spec.bonoMod ? stats.mod : 0);
  const keys = Object.keys(dice);
  const fijoKey = spec.fijoR || keys[0] || '_';
  const dmgKey = (k) => (dice[k] || 0) + (k === fijoKey ? fijo : 0);

  const saveMap = { des: [ctx.fDes, ctx.pSdes], con: [ctx.fCon, ctx.pScon], sab: [ctx.fSab, ctx.pSsab] };
  let dmg = 0, prob = null, probLabel = '';
  if (spec.mech === 'atk') {
    for (const k of keys) {
      const dAvg = dice[k] || 0;
      const fAvg = k === fijoKey ? fijo : 0;
      dmg += (dAvg * (ctx.pH + 0.05) + fAvg * ctx.pH) * res(k === '_' ? null : k);
    }
    prob = ctx.pH;
    probLabel = `${(ctx.pH * 100).toFixed(0)}% impacto (+5% crít.)`;
  } else if (spec.mech === 'auto') {
    for (const k of keys) dmg += dmgKey(k) * res(k === '_' ? null : k);
    prob = 1;
    probLabel = spec.mechNote || '100% (sin tirada)';
  } else {
    const [pFail, pSave] = saveMap[spec.mech] || saveMap.des;
    const frac = spec.saveFrac ?? 0.5;
    for (const k of keys) dmg += dmgKey(k) * (pFail + pSave * frac) * res(k === '_' ? null : k);
    prob = pFail;
    const sabLabel = spec.mech === 'sab' ? 'SAB' : spec.mech === 'con' ? 'CON' : 'DES';
    probLabel = `${(pFail * 100).toFixed(0)}% fallo ${sabLabel}${frac === 0 ? ' (0 si salva)' : ''}`;
  }
  return { dmg, lanzable: true, prob, probLabel, dados: dadosGeneric(spec) };
}

export function dadosGeneric(spec) {
  const fmtParts = (parts) => (parts || []).map((p) => `${p.n}d${p.c}`).join(' + ');
  let s = fmtParts(spec.base);
  if (spec.fijo) s += `+${spec.fijo}`;
  if (spec.bonoMod) s += '+mod';
  if (spec.step?.length) s += ` (+${fmtParts(spec.step)}${spec.cada ? ` cada ${spec.cada} niveles` : '/nivel'})`;
  return s;
}

export function compareAtLevel(nivel, stats, ids = null) {
  return SPELLS
    .filter((s) => !ids || ids.includes(s.id))
    .map((s) => {
      const r = spellDamage(s, nivel, stats);
      return { spell: s, ...r };
    })
    .filter((r) => r.lanzable)
    .sort((a, b) => b.dmg - a.dmg);
}

export function bestAndSecond(nivel, stats, ids = null) {
  const arr = compareAtLevel(nivel, stats, ids);
  return { best: arr[0] ?? null, second: arr[1] ?? null };
}

export function fullMatrix(stats, ids = null) {
  const out = {};
  const list = SPELLS.filter((s) => !ids || ids.includes(s.id));
  for (let lvl = 1; lvl <= 9; lvl++) {
    out[lvl] = {};
    for (const s of list) out[lvl][s.id] = spellDamage(s, lvl, stats);
  }
  return out;
}

export function duel(aId, bId, nivel, stats) {
  const a = spellDamage(aId, nivel, stats);
  const b = spellDamage(bId, nivel, stats);
  const A = { spell: getSpell(aId), ...a };
  const B = { spell: getSpell(bId), ...b };
  let ganador = null, diff = null, pct = null;
  if (A.lanzable && B.lanzable) {
    diff = A.dmg - B.dmg;
    if (Math.abs(diff) < 0.05) { ganador = null; }
    else ganador = diff > 0 ? 'A' : 'B';
    const base = Math.max(A.dmg, B.dmg);
    pct = base ? (Math.abs(diff) / Math.min(A.dmg, B.dmg)) * 100 : 0;
  } else if (A.lanzable && !B.lanzable) ganador = 'A';
  else if (!A.lanzable && B.lanzable) ganador = 'B';
  return { A, B, ganador, diff, pct };
}

export const fmt = (v) => (v == null ? '–' : (Math.round(v * 10) / 10).toFixed(1));

/**
 * Probabilidad de hacer 0 de daño con ese hechizo y nivel (fiabilidad).
 * Ataque simple: fallar el ataque. Rayo: fallar todos los rayos.
 * Salvación con mitad: nunca 0. Todo-o-nada (Desintegrar, explosión): que salve.
 * Cuchillo: fallar ataque Y que salve la explosión. Automático: 0.
 */
export function zeroRisk(spellOrId, nivel, stats) {
  const spell = typeof spellOrId === 'string' ? getSpell(spellOrId) : spellOrId;
  const { mod, comp, ca, des, sab } = stats;
  if (nivel < spell.nivelMin || nivel > spell.nivelMax) return null;
  const bono = attackBonus(mod, comp);
  const dc = spellDC(mod, comp);
  const pH = pHit(ca, bono);
  const pSdes = pSaveSuccess(dc, des);
  if (spell.generic) {
    if (spell.mech === 'auto') return 0;
    if (spell.mech === 'atk') return 1 - pH;
    const ps = spell.mech === 'con' ? pSaveSuccess(dc, stats.con) : spell.mech === 'sab' ? pSaveSuccess(dc, sab ?? 2) : pSdes;
    return (spell.saveFrac ?? 0.5) === 0 ? ps : 0;
  }
  switch (spell.id) {
    case 'proyectil-magico':
      return 0;
    case 'bola-fuego':
    case 'manos-ardientes':
    case 'marchitar':
    case 'dedo-muerte':
    case 'lluvia-meteoritos':
    case 'orbe-cromatico':
      // mitad al salvar (orbe es ataque simple... se trata abajo)
      if (spell.id === 'orbe-cromatico') return 1 - pH;
      return 0;
    case 'causar-heridas':
    case 'virote-guia':
      return 1 - pH;
    case 'rayo-abrasador': {
      const rays = spell.rayosBase + (nivel - spell.nivelBase) * spell.rayosExtra;
      return Math.pow(1 - pH, rays);
    }
    case 'desintegrar':
      return pSdes;
    case 'cuchillo-hielo':
      return (1 - pH) * pSdes;
    default:
      return null;
  }
}

/**
 * Punto de ruptura: recorre todo el rango de una variable del objetivo
 * (ca 1–39, des/con −5–19) y comprime los tramos donde gana cada hechizo.
 * Devuelve [{ id, from, to }].
 */
export function ruptureScan(varKey, nivel, stats, ids = null) {
  const min = varKey === 'ca' ? 1 : -5;
  const max = varKey === 'ca' ? 39 : 19;
  const out = [];
  let cur = null;
  for (let v = min; v <= max; v++) {
    const b = bestAndSecond(nivel, { ...stats, [varKey]: v }, ids).best;
    const id = b ? b.spell.id : null;
    if (!cur || cur.id !== id) { cur = { id, from: v, to: v }; out.push(cur); }
    else cur.to = v;
  }
  return out;
}

/** Resistencias no normales, para avisos y veredicto. Devuelve [{key, mult}]. */
export function activeRes(stats) {
  const r = stats.res ?? {};
  return Object.entries(RES_DEFAULT)
    .filter(([k]) => (r[k] ?? 1) !== 1)
    .map(([k]) => ({ key: k, mult: r[k] ?? 1 }));
}

export const RES_MULT_LABEL = { 0: '×0 inmune', 0.5: '×½ resiste', 1: '×1 normal', 2: '×2 vulnerable' };
