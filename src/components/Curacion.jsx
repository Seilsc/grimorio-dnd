import { useState } from 'react';
import { HeartPulse, Crown, Table2, BookOpen } from 'lucide-react';
import { CURAS, claseLabel } from '../data/spells.js';
import { curaDe, fmt } from '../lib/damage.js';
import SpellIcon from './SpellIcon.jsx';

function curasDe(clase) {
  if (!clase || clase === 'todas') return CURAS;
  return CURAS.filter((c) => c.clases.includes(clase));
}

export default function Curacion({ stats }) {
  const [nivel, setNivel] = useState(1);
  const lista = curasDe(stats.clase);
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const rank = (l) => lista
    .map((c) => ({ spec: c, ...curaDe(c, l, stats) }))
    .filter((r) => r.lanzable && !r.especial)
    .sort((a, b) => b.dmg - a.dmg);
  const best = (l) => rank(l)[0] ?? null;
  const top = rank(nivel).slice(0, 5);
  const maxTop = top[0]?.dmg || 1;

  return (
    <section className="panel" id="curacion">
      <div className="section-title">
        <h2><HeartPulse size={20} /> Quién cura más por nivel de espacio</h2>
        <div className="lvl-tabs">
          {levels.map((l) => (
            <button key={l} className={l === nivel ? 'active' : ''} onClick={() => setNivel(l)}>
              N{l}
            </button>
          ))}
        </div>
      </div>
      <p className="muted small">Curación media por objetivo (dados + tu modificador). Sin tiradas ni resistencias.</p>

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

      <h2 className="sub-h2"><BookOpen size={20} /> Fichas de curación</h2>
      <div className="spell-grid">
        {lista.map((c) => {
          const r = curaDe(c, nivel, stats);
          return (
            <article key={c.id} className="card spell-card">
              <div className="spell-head">
                <span className="spell-icon"><SpellIcon spell={{ ...c, color: '#4ade80', icon: c.icon }} size={30} /></span>
                <div>
                  <h3>{c.nombre}</h3>
                  <div className="spell-badges">
                    <span className="badge">Nv {c.min}{c.min !== c.max ? `–${c.max}` : ''}</span>
                    <span className="badge lvl">{c.libro}</span>
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
            </article>
          );
        })}
      </div>
    </section>
  );
}
