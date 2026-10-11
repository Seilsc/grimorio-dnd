import { ArrowLeftRight, Crown, Scale } from 'lucide-react';
import { SPELLS } from '../data/spells.js';
import { attackBonus, spellDC, modLanz, compDe, duel, fmt } from '../lib/damage.js';
import SpellIcon from './SpellIcon.jsx';
import SpellLink from './SpellLink.jsx';

function DuelCard({ R, side, isWinner, onPick, max }) {
  return (
    <div className={`card duel-card ${isWinner ? 'duel-win' : ''}`}>
      {isWinner && <div className="duel-crown"><Crown size={14} /> Ganador</div>}
      <div className="duel-pick">
        <SpellIcon spell={R.spell} size={20} />
        <select value={R.spell.id} onChange={(e) => onPick(e.target.value)} aria-label="Elegir conjuro">
          {SPELLS.map((s) => (
            <option key={s.id} value={s.id}>{s.nombre} (Nv {s.nivelMin}{s.nivelMin !== s.nivelMax ? `–${s.nivelMax}` : ''})</option>
          ))}
        </select>
      </div>
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
      <SpellLink entry={R.spell} className="dnd-link">Ficha oficial en D&D Beyond</SpellLink>
    </div>
  );
}

export default function DuelArena({ aId, bId, setAId, setBId, nivel, setNivel, stats }) {
  const { A, B, ganador, diff, pct } = duel(aId, bId, nivel, stats);
  const max = Math.max(A.dmg ?? 0, B.dmg ?? 0, 0.01);
  const bonoD = attackBonus(modLanz(stats), compDe(stats));
  const cdD = spellDC(modLanz(stats), compDe(stats));

  const swap = () => { setAId(bId); setBId(aId); };

  const verdict = () => {
    if (!A.lanzable && !B.lanzable) return 'Ninguno se puede lanzar a este nivel.';
    if (!A.lanzable) return (<><b>{B.spell.nombre}</b> gana: {A.spell.nombre} no es lanzable ({A.motivo}).</>);
    if (!B.lanzable) return (<><b>{A.spell.nombre}</b> gana: {B.spell.nombre} no es lanzable ({B.motivo}).</>);
    if (ganador === null) return <>Empate técnico a nivel {nivel}: ambos hacen {fmt(A.dmg)}.</>;
    const W = ganador === 'A' ? A : B;
    return (<><Crown size={16} /> <b>{W.spell.nombre}</b> gana por +{fmt(Math.abs(diff))} (+{pct.toFixed(0)}%) a nivel {nivel}.</>);
  };

  return (
    <section className="panel" id="duelo">
      <div className="section-title">
        <h2><Scale size={20} /> Arena de duelo · 1 contra 1</h2>
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
      <p className="muted small">El duelo usa tus datos actuales (bono +{bonoD}, CD {cdD}, CA {stats.ca}). Cambia arriba y el duelo se recalcula.</p>
    </section>
  );
}
