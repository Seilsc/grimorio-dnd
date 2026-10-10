import { Crown, Medal } from 'lucide-react';
import { bestAndSecond, fmt } from '../lib/damage.js';

export default function WinnerBoard({ nivel, setNivel, stats }) {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { best, second } = bestAndSecond(nivel, stats);

  return (
    <section className="panel" id="ganador">
      <div className="section-title">
        <h2>👑 Mejor hechizo para este objetivo</h2>
        <div className="lvl-tabs">
          {levels.map((l) => (
            <button key={l} className={l === nivel ? 'active' : ''} onClick={() => setNivel(l)}>
              N{l}
            </button>
          ))}
        </div>
      </div>
      <div className="winner-grid">
        <div className="card winner">
          <div className="winner-crown"><Crown size={18} /> Nivel {nivel}</div>
          {best ? (
            <>
              <div className="winner-name">{best.spell.icono} {best.spell.nombre}</div>
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
              <div className="second-name">{second.spell.icono} {second.spell.nombre} — <b>{fmt(second.dmg)}</b></div>
              <div className="muted small">{second.spell.notas}</div>
            </>
          ) : <p className="muted">—</p>}
          <p className="muted small tip">💡 Útil si el mejor no vale (p. ej. Marchitar vs no-muertos, Escudo vs Proyectil).</p>
        </div>
      </div>
    </section>
  );
}
