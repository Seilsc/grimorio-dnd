import { useState } from 'react';
import {
  Crown, Medal, Lightbulb, Swords, Scale,
  ShieldAlert, Info, GitBranch,
} from 'lucide-react';
import {
  bestAndSecond, compareAtLevel, fmt, zeroRisk,
  ruptureScan, bonoAtaqueDe,
} from '../lib/damage.js';
import { getSpell, claseLabel, espacioMaximo } from '../data/spells.js';
import SpellIcon from './SpellIcon.jsx';

const WARNINGS = {
  'proyectil-magico': 'El conjuro Escudo lo anula por completo.',
  'marchitar': 'Sin efecto en no-muertos ni constructos.',
  'bola-fuego': 'Daño calculado a un solo objetivo; el área puede alcanzar a más.',
  'lluvia-meteoritos': 'Daño calculado a un solo objetivo; el área puede alcanzar a más.',
  'manos-ardientes': 'Daño calculado a un solo objetivo; el cono puede alcanzar a más.',
  'desintegrar': 'Todo o nada: si el objetivo salva, el daño es 0.',
  'cuchillo-hielo': 'La explosión no se reduce aunque salve (todo o nada).',
  'rayo-abrasador': 'Aquí todos los rayos van al mismo objetivo; repartirlos cambia el total.',
  'dedo-muerte': 'No escala: lanzarlo con un espacio mayor no da más daño.',
  'virote-guia': 'La ventaja que otorga al siguiente ataque no está contada.',
  'orbe-cromatico': 'Elige el tipo de daño tras mirar las resistencias del objetivo.',
  'causar-heridas': 'Requiere toque: es cuerpo a cuerpo.',
};

const RUPTURE_VARS = [
  { key: 'ca', label: 'CA' },
  { key: 'sDes', label: 'DES' },
  { key: 'sCon', label: 'CON' },
  { key: 'sSab', label: 'SAB' },
  { key: 'sFue', label: 'FUE' },
  { key: 'sInt', label: 'INT' },
];

function explainBullets(best, second, stats) {
  const out = [];
  if (best.spell.tirada === 'auto') {
    out.push({ icon: Info, text: `${best.spell.nombre} no tira nada: sus ${best.dados} son daño garantizado, inmune a la CA y a las salvaciones.` });
  } else if (best.spell.tirada === 'ataque') {
    out.push({ icon: Info, text: `Ataca con +${bonoAtaqueDe(best.spell, stats)} contra CA ${stats.ca} (${best.probLabel}). Sus ${best.dados} rinden más que el resto a este nivel.` });
    if (stats.ca >= 17) out.push({ icon: Info, text: `Con una CA tan alta (${stats.ca}), los ataques sufren; aun así compensa por volumen de dados.` });
  } else if (best.spell.tirada.startsWith('salv-')) {
    const sk = best.spell.tirada.slice(5).toLowerCase();
    const sn = { des: 'DES', con: 'CON', sab: 'SAB', fue: 'FUE', int: 'INT' }[sk] ?? sk.toUpperCase();
    const sv = { des: stats.sDes, con: stats.sCon, sab: stats.sSab ?? 2, fue: stats.sFue ?? 2, int: stats.sInt ?? 0 }[sk] ?? 0;
    out.push({ icon: Info, text: `El objetivo falla la salvación el ${(best.prob * 100).toFixed(0)}% de las veces (su ${sn} es ${sv > 0 ? `+${sv}` : sv}).` });
  } else {
    out.push({ icon: Info, text: `${best.spell.nombre} combina ataque y salvación (${best.probLabel}).` });
  }
  if (second) {
    const diff = best.dmg - second.dmg;
    const pct = (diff / second.dmg) * 100;
    if (pct < 10) out.push({ icon: Scale, text: `Victoria ajustada: ${second.spell.nombre} se queda a ${fmt(diff)} (${pct.toFixed(0)}%). Ten la alternativa a mano.` });
    else if (pct > 50) out.push({ icon: Swords, text: `Victoria aplastante: +${fmt(diff)} sobre ${second.spell.nombre} (+${pct.toFixed(0)}%).` });
    else out.push({ icon: Swords, text: `Supera a ${second.spell.nombre} por +${fmt(diff)} (+${pct.toFixed(0)}%).` });
  }
  const warned = new Set();
  for (const r of [best, second]) {
    if (r && WARNINGS[r.spell.id] && !warned.has(r.spell.id)) {
      warned.add(r.spell.id);
      out.push({ icon: ShieldAlert, text: `${r.spell.nombre}: ${WARNINGS[r.spell.id]}` });
    }
  }
  return out;
}

// Consejo personalizado según quiénes son 1.º y 2.º.
function tipAlternativa(best, second, stats) {
  if (!second) return '';
  if (best.spell.id === 'marchitar') return 'Si el objetivo es no-muerto o un constructo, Marchitar no le afecta: esta es tu opción.';
  if (second.spell.id === 'proyectil-magico') return 'Nunca falla e ignora CA y salvaciones; pero un conjuro Escudo lo anula por completo.';
  if (second.spell.id === 'desintegrar') return 'Todo o nada con el pico más alto: si el objetivo salva, hace 0.';
  if (best.spell.tirada === 'ataque' && second.spell.tirada.startsWith('salv-')) return `Si su CA ${stats.ca} es inalcanzable, esta alternativa fuerza salvación en vez de ataque.`;
  if (best.spell.tirada.startsWith('salv-') && second.spell.tirada === 'ataque') return `Si supera salvaciones con facilidad, esta alternativa ataca directamente su CA ${stats.ca}.`;
  if (second.spell.tirada === 'auto') return 'Daño garantizado sin tiradas: no depende de la suerte.';
  return 'Casi tanto daño como la mejor: guárdala por resistencias o inmunidades.';
}

function RuptureCard({ nivel, stats, defaultVar, ids }) {
  const [rvar, setRvar] = useState(defaultVar);
  const ranges = ruptureScan(rvar, nivel, stats, ids);
  const rmin = rvar === 'ca' ? 1 : -5;
  const rmax = rvar === 'ca' ? 39 : 19;
  const curVal = stats[rvar];
  const rLabel = RUPTURE_VARS.find((v) => v.key === rvar)?.label ?? rvar;
  return (
    <div className="card rupture">
      <div className="rupture-head">
        <h3><GitBranch size={16} /> ¿Cuándo dejaría de ganar?</h3>
        <div className="rupture-vars">
          {RUPTURE_VARS.map((v) => (
            <button key={v.key} className={rvar === v.key ? 'active' : ''} onClick={() => setRvar(v.key)}>
              {v.label}
            </button>
          ))}
        </div>
      </div>
      <p className="muted small">Moviendo solo {rLabel} (resto igual), el ganador a nivel {nivel} sería…</p>
      <div className="rupture-bar">
        {ranges.map((r, i) => {
          const w = (r.to - r.from + 1) / (rmax - rmin + 1);
          const sp = r.id ? getSpell(r.id) : null;
          return (
            <div
              key={i}
              className="rupture-seg"
              style={{ flexGrow: Math.max(1, Math.round(w * 100)), background: sp ? sp.color : '#9a8560' }}
                title={sp ? `${rLabel} ${r.from}–${r.to}: ${sp.nombre}` : `${rLabel} ${r.from}–${r.to}: nadie`}
            />
          );
        })}
        <div
          className="rupture-marker"
          style={{ left: `${((curVal - rmin) / (rmax - rmin)) * 100}%` }}
            title={`Tu valor actual: ${rLabel} ${curVal}`}
        />
      </div>
      <ul className="rupture-list">
        {ranges.map((r, i) => {
          const sp = r.id ? getSpell(r.id) : null;
          const here = curVal >= r.from && curVal <= r.to;
          return (
            <li key={i} className={here ? 'here' : ''}>
              {sp ? <SpellIcon spell={sp} size={15} /> : null}
              <span>{rLabel} {r.from}{r.from !== r.to ? `–${r.to}` : ''} → <b>{sp ? sp.nombre : 'nadie'}</b>{here ? ' (estás aquí)' : ''}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function WinnerBoard({ nivel, setNivel, stats, ids, ocultos = 0 }) {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { best, second } = bestAndSecond(nivel, stats, ids);
  const top5 = compareAtLevel(nivel, stats, ids).slice(0, 5);
  const maxTop = top5[0]?.dmg || 1;
  const defaultVar = !best ? 'ca'
    : best.spell.tirada === 'ataque' ? 'ca'
      : best.spell.tirada === 'salv-des' ? 'sDes'
        : best.spell.tirada === 'salv-con' ? 'sCon'
          : best.spell.tirada === 'salv-sab' ? 'sSab'
            : best.spell.tirada === 'salv-fue' ? 'sFue'
              : best.spell.tirada === 'salv-int' ? 'sInt' : 'ca';

  return (
    <section className="panel" id="ganador">
      <div className="section-title">
        <h2><Crown size={20} /> Mejor hechizo para este objetivo</h2>
      </div>
      {ocultos > 0 && (
        <p className="muted small">
          Tu {claseLabel(stats.clase)} de nv. {stats.nivelPJ} {espacioMaximo(stats.clase, stats.nivelPJ) > 0
            ? <>solo llega a espacios de N{espacioMaximo(stats.clase, stats.nivelPJ)}</>
            : 'no tiene espacios de conjuro'}: {ocultos} opcion{ocultos > 1 ? 'es' : ''} oculta{ocultos > 1 ? 's' : ''}. Sube de nivel para ver más.
        </p>
      )}

      {/* Podio completo 1-9 */}
      <div className="podium">
        {levels.map((l) => {
          const b = bestAndSecond(l, stats, ids).best;
          return (
            <button
              key={l}
              className={`podium-cell ${l === nivel ? 'active' : ''}`}
              onClick={() => setNivel(l)}
              title={b ? `${b.spell.nombre}: ${fmt(b.dmg)}` : `Nivel ${l}: sin hechizos`}
            >
              <span className="podium-lvl">N{l}</span>
              {b ? (
                <>
                  <SpellIcon spell={b.spell} size={20} />
                  <span className="podium-dmg">{fmt(b.dmg)}</span>
                </>
              ) : <span className="podium-dmg muted">–</span>}
            </button>
          );
        })}
      </div>

      <div className="winner-grid" style={{ marginTop: 12 }}>
        <div className="card winner">
          <div className="winner-crown"><Crown size={18} /> Nivel {nivel}</div>
          {best ? (
            <>
              <div className="winner-name"><SpellIcon spell={best.spell} size={26} /> {best.spell.nombre}</div>
              <div className="winner-dmg">{fmt(best.dmg)}</div>
              <div className="muted">daño medio esperado · {best.dados}</div>
              <div className="muted small">{best.probLabel}</div>
            </>
          ) : <p className="muted">Sin hechizos a este nivel.</p>}
        </div>
        <div className="card second">
          <div className="second-head"><Medal size={16} /> 2.º mejor · alternativa</div>
          {second ? (
            <>
              <div className="second-name"><SpellIcon spell={second.spell} size={22} /> {second.spell.nombre}</div>
              <div className="second-dmg">{fmt(second.dmg)}</div>
              <div className="muted small">daño medio · {second.dados}</div>
              <div className="muted small">{second.probLabel}</div>
              <div className="muted small">{second.spell.notas}</div>
              <p className="muted small tip"><Lightbulb size={14} /> {tipAlternativa(best, second, stats)}</p>
            </>
          ) : <p className="muted">—</p>}
        </div>
      </div>

      {/* Top 5 con fiabilidad */}
      {top5.length > 0 && (
        <div className="card top5">
          <h3><Swords size={16} /> Los 5 mejores a nivel {nivel}</h3>
          {top5.map((t, i) => {
            const risk = zeroRisk(t.spell, nivel, stats);
            const diff = top5[0].dmg - t.dmg;
            return (
              <div key={t.spell.id} className="top5-row">
                <span className="top5-pos">{i + 1}.</span>
                <SpellIcon spell={t.spell} size={17} />
                <span className="top5-name">{t.spell.nombre}</span>
                <div className="top5-bar"><div className="top5-fill" style={{ width: `${(t.dmg / maxTop) * 100}%` }} /></div>
                <span className="top5-dmg">{fmt(t.dmg)}</span>
                <span className="top5-diff muted small">{i === 0 ? 'mejor' : `−${fmt(diff)}`}</span>
                <span className="top5-risk muted small" title="Probabilidad de hacer 0 de daño">
                  {risk == null ? '' : risk <= 0 ? 'sin fallo' : `riesgo 0: ${(risk * 100).toFixed(0)}%`}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Por qué gana + avisos */}
      {best && (
        <div className="card explain">
          <h3><Lightbulb size={16} /> Por qué gana (y qué vigilar)</h3>
          <ul>
            {explainBullets(best, second, stats).map((b, i) => {
              const Icon = b.icon;
              return <li key={i}><span className="method-icon"><Icon size={16} /></span><span>{b.text}</span></li>;
            })}
          </ul>
        </div>
      )}

      {/* Punto de ruptura (key=nivel: al cambiar de nivel se reinicia la variable) */}
      <RuptureCard key={nivel} nivel={nivel} stats={stats} defaultVar={defaultVar} ids={ids} />
    </section>
  );
}
