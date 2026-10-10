import { ArrowLeftRight, Crown } from 'lucide-react';
import { SPELLS } from '../data/spells.js';
import { duel, fmt } from '../lib/damage.js';

function DuelCard({ R, side, isWinner, onPick, max }) {
  return (
    <div className={`card duel-card ${isWinner ? 'duel-win' : ''}`}>
      {isWinner && <div className="duel-crown"><Crown size={14} /> Ganador</div>}
      <select value={R.spell.id} onChange={(e) => onPick(e.target.value)}>
        {SPELLS.map((s) => (
          <option key={s.id} value={s.id}>{s.icono} {s.nombre} (Nv {s.nivelMin}{s.nivelMin !== s.nivelMax ? `–${s.nivelMax}` : ''})</option>
        ))}
      </select>
      <div className="duel-badges">
        <span className="badge">{R.spell.tiradaLabel}</span>
        <span className="badge dmg" style={{ '--c': R.spell.color }}>{R.spell.tipoDano}</span>
      </div>
      {!R.lanzable ? (
        <div className="not-cast">–<div className="muted small">{R.motivo}</div></div>
      ) : (
        <>
          <div className="duel-dmg">{fmt(R.dmg)}</div>
          <div className="muted small">daño medio · {R.dados}</div>
          <div className="muted small">{R.probLabel}</div>
          <div className="bar"><div className={`bar-fill ${side}`} style={{ width: `${(R.dmg / max) * 100}%` }} /></div>
        </>
      )}
      <p className="muted small">{R.spell.notas}</p>
    </div>
  );
}

export default function DuelArena({ aId, bId, setAId, setBId, nivel, setNivel, stats }) {
  const { A, B, ganador, diff, pct } = duel(aId, bId, nivel, stats);
  const max = Math.max(A.dmg ?? 0, B.dmg ?? 0, 0.01);

  const swap = () => { setAId(bId); setBId(aId); };

  const verdict = () => {
    if (!A.lanzable && !B.lanzable) return 'Ninguno se puede lanzar a este nivel.';
    if (!A.lanzable) return `${B.spell.icono} ${B.spell.nombre} gana: ${A.spell.nombre} no es lanzable (${A.motivo}).`;
    if (!B.lanzable) return `${A.spell.icono} ${A.spell.nombre} gana: ${B.spell.nombre} no es lanzable (${B.motivo}).`;
    if (ganador === null) return `Empate técnico a nivel ${nivel}: ambos hacen ${fmt(A.dmg)}.`;
    const W = ganador === 'A' ? A : B;
    return `👑 ${W.spell.icono} ${W.spell.nombre} gana por +${fmt(Math.abs(diff))} (+${pct.toFixed(0)}%) a nivel ${nivel}.`;
  };

  return (
    <section className="panel" id="duelo">
      <div className="section-title">
        <h2>⚔️ Arena de duelo · 1v1 al mismo nivel</h2>
        <div className="duel-controls">
          <label>Nivel
            <select value={nivel} onChange={(e) => setNivel(Number(e.target.value))}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((l) => <option key={l} value={l}>Espacio {l}</option>)}
            </select>
          </label>
          <button className="swap" onClick={swap}><ArrowLeftRight size={15} /> Intercambiar</button>
        </div>
      </div>
      <div className="duel-grid">
        <DuelCard R={A} side="A" isWinner={ganador === 'A'} onPick={setAId} max={max} />
        <div className="vs">VS</div>
        <DuelCard R={B} side="B" isWinner={ganador === 'B'} onPick={setBId} max={max} />
      </div>
      <div className="card verdict">{verdict()}</div>
      <p className="muted small">El duelo usa tus datos actuales (bono +{stats.mod + stats.comp}, CD {8 + stats.mod + stats.comp}, CA {stats.ca}, DES {stats.des}, CON {stats.con}). Cambia arriba y el duelo se recalcula.</p>
    </section>
  );
}
