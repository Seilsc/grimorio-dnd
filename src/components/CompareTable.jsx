import { Table2, Crown } from 'lucide-react';
import { SPELLS } from '../data/spells.js';
import { fullMatrix, bestAndSecond, fmt } from '../lib/damage.js';
import SpellIcon from './SpellIcon.jsx';

export default function CompareTable({ stats }) {
  const matrix = fullMatrix(stats);
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // para el heatmap: máximo por nivel
  const maxByLvl = {};
  for (const l of levels) {
    let m = 0;
    for (const s of SPELLS) { const v = matrix[l][s.id].dmg; if (v != null && v > m) m = v; }
    maxByLvl[l] = m || 1;
  }

  return (
    <section className="panel" id="tabla">
      <h2><Table2 size={20} /> Daño medio de cada hechizo contra este objetivo</h2>
      <p className="muted small">« – » = no se puede lanzar con ese espacio. La celda dorada es la mejor de su columna.</p>
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
            {SPELLS.map((s) => (
              <tr key={s.id}>
                <td className="sticky">
                  <span className="cell-name"><SpellIcon spell={s} size={15} /> {s.nombre}</span>
                  <span className="cell-sub" style={{ '--c': s.color }}>{s.tipoDano} · Nv {s.nivelMin}{s.nivelMin !== s.nivelMax ? `–${s.nivelMax}` : ''}</span>
                </td>
                <td><span className="badge">{s.tiradaLabel}</span></td>
                {levels.map((l) => {
                  const r = matrix[l][s.id];
                  const { best } = bestAndSecond(l, stats);
                  const isBest = best && best.spell.id === s.id;
                  if (!r.lanzable) return <td key={l} className="na">–</td>;
                  const intensity = r.dmg / maxByLvl[l];
                  return (
                    <td key={l} className={isBest ? 'best' : ''} title={`${s.nombre} N${l}: ${r.dados} · ${r.probLabel}\n${s.notas}`}>
                      <div className="heat" style={{ opacity: 0.15 + intensity * 0.85 }} />
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
