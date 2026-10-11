import { useMemo, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import {
  HeartPulse, Crown, Medal, Table2, BookOpen, Lightbulb, Swords,
  TrendingUp, Maximize2, X, ArrowLeftRight, Info, ShieldAlert,
} from 'lucide-react';
import { CURAS, claseLabel } from '../data/spells.js';
import { curaDe, fmt, modLanz, caracLanzDe } from '../lib/damage.js';
import SpellIcon from './SpellIcon.jsx';
import SpellLink, { BookLink } from './SpellLink.jsx';
import Ficha from './Ficha.jsx';
import Tabs from './Tabs.jsx';
import { Crown as CrownIcon, Swords as SwordsIcon, Table2 as Table2Icon, BookOpen as BookOpenIcon } from 'lucide-react';

const CURA_TABS = [
  { id: 'mejor', label: 'Mejor curación', icon: CrownIcon },
  { id: 'duelo', label: 'Duelo 1v1', icon: SwordsIcon },
  { id: 'tabla', label: 'Comparativa', icon: Table2Icon },
  { id: 'grimorio', label: 'Grimorio', icon: BookOpenIcon },
];

const ADICIONAL = new Set(['c-palabra-curativa', 'c-palabra-masa', 'c-luz-curativa']);

const WARN_CURA = {
  'c-transferencia': 'Te dañas tú 4d8 necróticos al lanzarlo.',
  'c-aura-vitalidad': 'Requiere concentración y bonus cada asalto.',
  'c-festin': 'Cuesta 1 hora y 1000 po en componentes.',
  'c-plegaria': 'Tarda 10 minutos en lanzarse: no es de combate.',
  'c-imposicion': 'Reserva limitada: 5 PV por nivel y se agota.',
  'c-bayas': 'Preventivas: no sirven en plena pelea.',
  'c-espiritu': 'Requiere concentración; sana al pasar por el espíritu.',
  'c-ayuda': 'Sube también el máximo: no desperdicies el exceso.',
};

function curasDe(clase) {
  if (!clase || clase === 'todas') return CURAS;
  return CURAS.filter((c) => c.clases.includes(clase));
}

function explainCura(best, second, stats) {
  const out = [];
  const mod = modLanz(stats);
  const carac = caracLanzDe(stats).toUpperCase();
  out.push({ icon: Info, text: `${best.spec.nombre}: ${best.dados} = ${fmt(best.dmg)} de media por objetivo.` });
  if (!best.spec.sinMod && !best.spec.especial) {
    out.push({ icon: Info, text: `Tu ${carac} (+${mod}) entra en cada curación.` });
  }
  if (ADICIONAL.has(best.spec.id)) {
    out.push({ icon: Info, text: 'Se lanza con acción adicional: curas y aún te queda la acción.' });
  }
  if (second) {
    const diff = best.dmg - second.dmg;
    const pct = (diff / second.dmg) * 100;
    if (pct < 10) out.push({ icon: HeartPulse, text: `Victoria ajustada: ${second.spec.nombre} se queda a ${fmt(diff)} (${pct.toFixed(0)}%).` });
    else out.push({ icon: HeartPulse, text: `Supera a ${second.spec.nombre} por +${fmt(diff)} (+${pct.toFixed(0)}%).` });
  }
  for (const r of [best, second]) {
    if (r && WARN_CURA[r.spec.id]) out.push({ icon: ShieldAlert, text: `${r.spec.nombre}: ${WARN_CURA[r.spec.id]}` });
  }
  return out;
}

function CuraDuelCard({ R, spec, side, isWinner, onPick, max, opciones }) {
  return (
    <div className={`card duel-card ${isWinner ? 'duel-win' : ''}`}>
      {isWinner && <div className="duel-crown"><Crown size={14} /> Ganador</div>}
      <div className="duel-pick">
        <SpellIcon spell={{ ...spec, color: '#4ade80', icon: spec.icon }} size={20} />
        <select value={spec.id} onChange={(e) => onPick(e.target.value)} aria-label="Elegir curación">
          {opciones.map((c) => (
            <option key={c.id} value={c.id}>{c.nombre} (Nv {c.min}{c.min !== c.max ? `–${c.max}` : ''})</option>
          ))}
        </select>
      </div>
      {!R.lanzable ? (
        <div className="not-cast">–<div className="muted small">Fuera de rango</div></div>
      ) : (
        <>
          <div className="duel-dmg">{fmt(R.dmg)}</div>
          <div className="muted small">curación media · {R.dados}</div>
          <div className="bar"><div className={`bar-fill ${side}`} style={{ width: `${(R.dmg / max) * 100}%` }} /></div>
        </>
      )}
      <p className="muted small">{spec.notas}</p>
      <SpellLink entry={spec} className="dnd-link">Ficha oficial en D&D Beyond</SpellLink>
    </div>
  );
}

function CuraDuel({ stats, nivel, lista }) {
  const ids = lista.filter((c) => !c.especial).map((c) => c.id);
  const [aId, setAId] = useState(ids[0] ?? null);
  const [bId, setBId] = useState(ids[1] ?? ids[0] ?? null);
  if (!ids.length) return null;
  const A = lista.find((c) => c.id === aId) ?? lista[0];
  const B = lista.find((c) => c.id === bId) ?? lista[1] ?? lista[0];
  const ra = curaDe(A, nivel, stats);
  const rb = curaDe(B, nivel, stats);
  const max = Math.max(ra.dmg ?? 0, rb.dmg ?? 0, 0.01);
  const diff = (ra.dmg ?? 0) - (rb.dmg ?? 0);
  const ganador = !ra.lanzable || !rb.lanzable ? null : Math.abs(diff) < 0.05 ? null : diff > 0 ? 'A' : 'B';
  const opciones = lista.filter((c) => !c.especial);

  return (
    <>
      <div className="section-title" style={{ marginTop: 18 }}>
        <h2><Swords size={20} /> Duelo de curación · 1 contra 1</h2>
        <button className="swap" onClick={() => { setAId(bId); setBId(aId); }}><ArrowLeftRight size={15} /> Intercambiar</button>
      </div>
      <div className="duel-grid">
        <CuraDuelCard R={ra} spec={A} side="A" isWinner={ganador === 'A'} onPick={setAId} max={max} opciones={opciones} />
        <div className="vs">VS</div>
        <CuraDuelCard R={rb} spec={B} side="B" isWinner={ganador === 'B'} onPick={setBId} max={max} opciones={opciones} />
      </div>
      <div className="card verdict">
        {ganador === null ? 'Empate técnico.' : (<><Crown size={16} /> <b>{(ganador === 'A' ? A : B).nombre}</b> cura +{fmt(Math.abs(diff))} más a nivel {nivel}.</>)}
      </div>
    </>
  );
}

function CuraChart({ stats, lista }) {
  const [expand, setExpand] = useState(false);
  const data = useMemo(() => {
    const rows = [];
    for (let lvl = 1; lvl <= 9; lvl++) {
      const row = { nivel: `N${lvl}` };
      for (const c of lista) {
        const r = curaDe(c, lvl, stats);
        row[c.id] = r.lanzable && !r.especial ? Math.round(r.dmg * 10) / 10 : null;
      }
      rows.push(row);
    }
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats, lista.length]);
  const conDatos = lista.filter((c) => !c.especial);

  const body = (height, showLegend) => (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: -6, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#a68b55" />
        <XAxis dataKey="nivel" stroke="#6d5a3e" tick={{ fontSize: 12, fill: '#6d5a3e' }} />
        <YAxis stroke="#6d5a3e" tick={{ fontSize: 12, fill: '#6d5a3e' }} width={44} />
        <Tooltip
          contentStyle={{ background: '#241708', border: '1px solid #8a6d2f', color: '#e9d9ae', fontSize: 13 }}
          labelStyle={{ color: '#f0d878' }}
          cursor={{ stroke: '#8a6d2f' }}
        />
        {showLegend && <Legend verticalAlign="bottom" height={30} wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />}
        {conDatos.map((c, i) => (
          <Line
            key={c.id} type="monotone" dataKey={c.id} name={c.nombre}
            stroke={`hsl(${Math.round((i * 137.508) % 360)}, 55%, 28%)`}
            strokeWidth={1.8} dot={false} connectNulls
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <div className="section-title" style={{ marginTop: 18 }}>
        <h2><TrendingUp size={20} /> Curvas de curación por nivel</h2>
        <button className="swap" onClick={() => setExpand(true)}><Maximize2 size={15} /> Ampliar</button>
      </div>
      <div className="chart-box">{body(320, conDatos.length <= 14)}</div>
      {expand && (
        <div className="chart-modal" role="dialog" aria-label="Gráfica ampliada" onClick={() => setExpand(false)}>
          <div className="chart-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="chart-modal-head">
              <b>Curvas de curación por nivel</b>
              <button className="swap" onClick={() => setExpand(false)}><X size={15} /> Cerrar</button>
            </div>
            {body(Math.max(420, window.innerHeight * 0.7), conDatos.length <= 14)}
          </div>
        </div>
      )}
    </>
  );
}

export default function Curacion({ stats }) {
  const [nivel, setNivel] = useState(1);
  const [tab, setTab] = useState('mejor');
  const lista = curasDe(stats.clase);
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const rank = (l) => lista
    .map((c) => ({ spec: c, ...curaDe(c, l, stats) }))
    .filter((r) => r.lanzable && !r.especial)
    .sort((a, b) => b.dmg - a.dmg);
  const best = (l) => rank(l)[0] ?? null;
  const top = rank(nivel).slice(0, 5);
  const second = top[1] ?? null;
  const first = top[0] ?? null;
  const maxTop = first?.dmg || 1;

  return (
    <section className="panel" id="curacion">
      <div className="section-title">
        <h2><HeartPulse size={20} /> Quién cura más por nivel de espacio</h2>
      </div>
      <p className="muted small">Curación media por objetivo (dados + tu modificador). Sin tiradas ni resistencias.</p>
      <Tabs active={tab} onChange={setTab} items={CURA_TABS} />

      {tab === 'mejor' && (
        <>
          <div className="podium">
        {levels.map((l) => {
          const b = best(l);
          return (
            <button
              key={l}
              className={`podium-cell ${l === nivel ? 'active' : ''}`}
              onClick={() => setNivel(l)}
              title={b ? `${b.spec.nombre}: ${fmt(b.dmg)}` : `Nivel ${l}: sin curación`}
            >
              <span className="podium-lvl">N{l}</span>
              {b ? (
                <>
                  <SpellIcon spell={{ ...b.spec, color: '#4ade80', icon: b.spec.icon }} size={20} />
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
          {first ? (
            <>
              <div className="winner-name"><SpellIcon spell={{ ...first.spec, color: '#4ade80', icon: first.spec.icon }} size={26} /> {first.spec.nombre}</div>
              <div className="winner-dmg">{fmt(first.dmg)}</div>
              <div className="muted">curación media · {first.dados}</div>
            </>
          ) : <p className="muted">Sin curación a este nivel.</p>}
        </div>
        <div className="card second">
          <div className="second-head"><Medal size={16} /> 2.ª mejor · alternativa</div>
          {second ? (
            <>
              <div className="second-name"><SpellIcon spell={{ ...second.spec, color: '#4ade80', icon: second.spec.icon }} size={22} /> {second.spec.nombre}</div>
              <div className="second-dmg">{fmt(second.dmg)}</div>
              <div className="muted small">curación media · {second.dados}</div>
              <div className="muted small">{second.spec.notas}</div>
            </>
          ) : <p className="muted">—</p>}
        </div>
      </div>

      {top.length > 0 && (
        <div className="card top5">
          <h3><Crown size={16} /> Las 5 mejores a nivel {nivel}</h3>
          {top.map((t, i) => (
            <div key={t.spec.id} className="top5-row">
              <span className="top5-pos">{i + 1}.</span>
              <SpellIcon spell={{ ...t.spec, color: '#4ade80', icon: t.spec.icon }} size={17} />
              <span className="top5-name">{t.spec.nombre}</span>
              <div className="top5-bar"><div className="top5-fill" style={{ width: `${(t.dmg / maxTop) * 100}%` }} /></div>
              <span className="top5-dmg">{fmt(t.dmg)}</span>
              <span className="top5-diff muted small">{i === 0 ? 'mejor' : `−${fmt(top[0].dmg - t.dmg)}`}</span>
            </div>
          ))}
        </div>
      )}

      {first && (
        <div className="card explain">
          <h3><Lightbulb size={16} /> Por qué cura más (y qué vigilar)</h3>
          <ul>
            {explainCura(first, second, stats).map((b, i) => {
              const Icon = b.icon;
              return <li key={i}><span className="method-icon"><Icon size={16} /></span><span>{b.text}</span></li>;
            })}
          </ul>
        </div>
      )}
        </>
      )}

      {tab === 'duelo' && (
        <CuraDuel stats={stats} nivel={nivel} lista={lista} />
      )}

      {tab === 'tabla' && (
        <>
          <h2 className="sub-h2"><Table2 size={20} /> Curación media por nivel</h2>
      <div className="table-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th className="sticky">Curación</th>
              <th>Clases</th>
              {levels.map((l) => <th key={l}>N{l}</th>)}
            </tr>
          </thead>
          <tbody>
            {lista.map((c) => (
              <tr key={c.id}>
                <td className="sticky">
                  <span className="cell-name"><SpellIcon spell={{ ...c, color: '#4ade80', icon: c.icon }} size={15} /> {c.nombre}</span>
                  <span className="cell-sub">{c.libro}</span>
                </td>
                <td><span className="badge">{c.clases.map(claseLabel).join(' · ')}</span></td>
                {levels.map((l) => {
                  const r = curaDe(c, l, stats);
                  if (!r.lanzable) return <td key={l} className="na">–</td>;
                  if (r.especial) return <td key={l} className="na" title={c.notas}>esp.</td>;
                  return <td key={l} title={`${c.nombre} N${l}: ${r.dados}\n${c.notas}`}>{fmt(r.dmg)}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CuraChart stats={stats} lista={lista} />
        </>
      )}

      {tab === 'grimorio' && (
        <>
          <h2 className="sub-h2"><BookOpen size={20} /> Fichas de curación</h2>
      <div className="spell-grid">
        {lista.map((c) => {
          const r = curaDe(c, nivel, stats);
          return (
            <article key={c.id} className="card spell-card">
              <div className="spell-head">
                <span className="spell-icon"><SpellIcon spell={{ ...c, color: '#4ade80', icon: c.icon }} size={30} /></span>
                <div>
                  <h3><SpellLink entry={c}>{c.nombre}</SpellLink></h3>
                  <div className="spell-badges">
                    <span className="badge">Nv {c.min}{c.min !== c.max ? `–${c.max}` : ''}</span>
                    <BookLink libro={c.libro} />
                  </div>
                  <div className="muted small classes-line">{c.clases.map(claseLabel).join(' · ')}</div>
                </div>
              </div>
              <div className="spell-dmg-row">
                {r.especial ? (
                  <span className="muted small">{c.notas}</span>
                ) : r.lanzable ? (
                  <>
                    <span className="spell-dmg">{fmt(r.dmg)}</span>
                    <span className="muted small">a N{nivel} · {r.dados}</span>
                  </>
                ) : (
                  <span className="muted">– <span className="small">Fuera de rango</span></span>
                )}
              </div>
              {!r.especial && <p className="muted small">{c.notas}</p>}
              <Ficha entry={c} subtitulo={`Nv ${c.min}${c.min !== c.max ? `–${c.max}` : ''} · ${r.dados}`} />
            </article>
          );
        })}
      </div>
        </>
      )}
    </section>
  );
}
