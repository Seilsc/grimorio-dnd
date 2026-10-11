import { useState } from 'react';
import { Table2, Crown, Eye, EyeOff } from 'lucide-react';
import { SPELLS } from '../data/spells.js';
import { fullMatrix, bestAndSecond, fmt } from '../lib/damage.js';
import SpellIcon from './SpellIcon.jsx';

export default function CompareTable({ stats }) {
  const [visible, setVisible] = useState(() =>
    Object.fromEntries(SPELLS.map((s) => [s.id, true]))
  );
  const matrix = fullMatrix(stats);
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // máximo y mejor por nivel (una sola vez por render)
  const maxByLvl = {};
  const bestByLvl = {};
  for (const l of levels) {
    let m = 0;
    for (const s of SPELLS) { const v = matrix[l][s.id].dmg; if (v != null && v > m) m = v; }
    maxByLvl[l] = m || 1;
    bestByLvl[l] = bestAndSecond(l, stats).best?.spell.id ?? null;
  }

  const shown = SPELLS.filter((s) => visible[s.id]);
  const toggle = (id) => setVisible((v) => ({ ...v, [id]: !v[id] }));
  const showAll = () => setVisible(Object.fromEntries(SPELLS.map((s) => [s.id, true])));
  const hideAll = () => setVisible(Object.fromEntries(SPELLS.map((s) => [s.id, false])));

  return (
    <section className="panel" id="tabla">
      <h2><Table2 size={20} /> Daño medio de cada hechizo contra este objetivo</h2>
      <p className="muted small">« – » = no se puede lanzar con ese espacio. La celda de lacre es la mejor de su columna.</p>
      <div className="chips chips-row">
        {SPELLS.map((s) => (
          <button
            key={s.id}
            className={`chip ${visible[s.id] ? 'on' : ''}`}
            style={{ '--c': s.color }}
            onClick={() => toggle(s.id)}
            title={visible[s.id] ? `Ocultar ${s.nombre}` : `Mostrar ${s.nombre}`}
          >
            <SpellIcon spell={s} size={13} /> {s.nombre}
          </button>
        ))}
        <span className="chips-actions">
          <button className="mini-btn" onClick={showAll}><Eye size={13} /> Todos</button>
          <button className="mini-btn" onClick={hideAll}><EyeOff size={13} /> Ninguno</button>
        </span>
      </div>
      <div className="table-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th className="sticky">Hechizo</th>
              <th>Tirada</th>
              {levels.map((l) => <th key={l}>N{l}</th>)}
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 && (
              <tr><td colSpan={11} className="muted" style={{ padding: 18 }}>Activa al menos un hechizo arriba para ver la tabla.</td></tr>
            )}
            {shown.map((s) => (
              <tr key={s.id}>
                <td className="sticky">
                  <span className="cell-name"><SpellIcon spell={s} size={15} /> {s.nombre}</span>
                  <span className="cell-sub">{s.tipoDano} · Nv {s.nivelMin}{s.nivelMin !== s.nivelMax ? `–${s.nivelMax}` : ''}</span>
                </td>
                <td><span className="badge">{s.tiradaLabel}</span></td>
                {levels.map((l) => {
                  const r = matrix[l][s.id];
                  const isBest = bestByLvl[l] === s.id;
                  if (!r.lanzable) return <td key={l} className="na">–</td>;
                  // Tinte de bronce SUTIL como fondo: el número siempre va en tinta oscura encima.
                  const alpha = 0.06 + (r.dmg / maxByLvl[l]) * 0.28;
                  return (
                    <td
                      key={l}
                      className={isBest ? 'best' : ''}
                      style={isBest ? undefined : { backgroundColor: `rgba(138,109,47,${alpha.toFixed(3)})` }}
                      title={`${s.nombre} N${l}: ${r.dados} · ${r.probLabel}\n${s.notas}`}
                    >
                      {isBest && <Crown size={12} className="crown-icon" />}{fmt(r.dmg)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
