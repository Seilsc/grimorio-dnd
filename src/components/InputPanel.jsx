import { useState } from 'react';
import { User, Skull, Shield, ChevronDown, Target, ShieldHalf } from 'lucide-react';
import { attackBonus, spellDC, activeRes } from '../lib/damage.js';
import { RES_TYPES, RES_STATES } from '../data/spells.js';
import { ResIcon } from './SpellIcon.jsx';
import Stepper from './Stepper.jsx';

export default function InputPanel({ stats, setStats }) {
  const [open, setOpen] = useState(true);
  const set = (k) => (v) => setStats((s) => ({ ...s, [k]: v }));
  const bono = attackBonus(stats.mod, stats.comp);
  const dc = spellDC(stats.mod, stats.comp);
  const nRes = activeRes(stats).length;

  return (
    <section className="card inputs-card" id="datos">
      <button className="inputs-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="inputs-summary">
          <Target size={16} /> Bono +{bono} · CD {dc} · CA {stats.ca} · DES {stats.des > 0 ? `+${stats.des}` : stats.des} · CON {stats.con > 0 ? `+${stats.con}` : stats.con}{nRes > 0 ? ` · ${nRes} resist.` : ''}
        </span>
        <ChevronDown size={18} className={`chev ${open ? 'up' : ''}`} />
      </button>
      {open && (
        <div className="inputs-grid">
          <div className="inputs-group">
            <h2><User size={17} /> Tu lanzador</h2>
            <Stepper label="Mod. característica" value={stats.mod} min={-5} max={10} onChange={set('mod')} />
            <Stepper label="Bono competencia" value={stats.comp} min={0} max={8} onChange={set('comp')} />
            <div className="derived">
              <div><Target size={14} /> Ataque <b>+{bono}</b></div>
              <div><ShieldHalf size={14} /> CD <b>{dc}</b></div>
            </div>
          </div>
          <div className="inputs-group">
            <h2><Skull size={17} /> El objetivo</h2>
            <Stepper label="Clase de armadura" value={stats.ca} min={1} max={39} onChange={set('ca')} plain hint="De 1 a 39" />
            <Stepper label="Salv. Destreza" value={stats.des} min={-5} max={19} onChange={set('des')} hint="De −5 a +19" />
            <Stepper label="Salv. Constitución" value={stats.con} min={-5} max={19} onChange={set('con')} hint="De −5 a +19" />
          </div>
          <div className="inputs-group">
            <h2><Shield size={17} /> Resistencias del objetivo</h2>
            <p className="muted small">El Excel las ignora; aquí sí cuentan (×½, ×0, ×2).</p>
            {RES_TYPES.map((t) => {
              const cur = stats.res?.[t.key] ?? 1;
              return (
                <div key={t.key} className="res-row">
                  <span className="res-name"><ResIcon name={t.icon} size={15} /> {t.label}</span>
                  <div className="res-seg" role="group" aria-label={`Resistencia a ${t.label}`}>
                    {RES_STATES.map((st) => (
                      <button
                        key={st.v}
                        type="button"
                        title={st.desc}
                        className={`res-btn ${cur === st.v ? 'on' : ''}`}
                        onClick={() => setStats((s) => ({ ...s, res: { ...(s.res ?? {}), [t.key]: st.v } }))}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
