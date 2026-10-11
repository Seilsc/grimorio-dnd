import { useState } from 'react';
import { User, Skull, Shield, ChevronDown, Target, ShieldHalf, SlidersHorizontal, Swords } from 'lucide-react';
import { attackBonus, spellDC, activeRes, ataquesTurno } from '../lib/damage.js';
import { RES_TYPES, RES_STATES, CLASES } from '../data/spells.js';
import { ResIcon } from './SpellIcon.jsx';
import Stepper from './Stepper.jsx';

export default function InputPanel({ stats, setStats, clase, setClase }) {
  const [open, setOpen] = useState(true);
  const set = (k) => (v) => setStats((s) => ({ ...s, [k]: v }));
  const bono = attackBonus(stats.mod, stats.comp);
  const dc = spellDC(stats.mod, stats.comp);
  const nRes = activeRes(stats).length;

  return (
    <section className="card inputs-card" id="datos">
      <button className="inputs-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="inputs-summary">
          <SlidersHorizontal size={16} /> Personalizar datos
          <span className="muted small">
            · +{bono} / CD {dc} / CA {stats.ca}{nRes > 0 ? ` · ${nRes} resist.` : ''}
          </span>
        </span>
        <ChevronDown size={18} className={`chev ${open ? 'up' : ''}`} />
      </button>
      {open && (
        <div className="inputs-grid">
          <div className="inputs-group">
            <h2><User size={17} /> Tu lanzador</h2>
            <label className="class-label">Clase de tu personaje
              <select value={clase} onChange={(e) => setClase(e.target.value)}>
                {CLASES.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
              </select>
            </label>
            {(clase === 'caballero' || clase === 'picaro') && (
              <p className="muted small">Usa la lista de mago como aproximación (en mesa se limita por escuela).</p>
            )}
            <Stepper label="Mod. característica" value={stats.mod} min={-5} max={10} onChange={set('mod')} />
            <Stepper label="Bono competencia" value={stats.comp} min={0} max={8} onChange={set('comp')} />
            <Stepper label="Nivel de personaje" value={stats.nivelPJ ?? 5} min={1} max={20} onChange={set('nivelPJ')} plain hint="Trucos, Ataque furtivo, rasgos…" />
            <Stepper label="Mod. cuerpo a cuerpo" value={stats.mel ?? 3} min={-5} max={10} onChange={set('mel')} hint="Fue o Des para armas y rasgos" />
            <div className="derived">
              <div><Target size={14} /> Ataque <b>+{bono}</b></div>
              <div><ShieldHalf size={14} /> CD <b>{dc}</b></div>
              <div><Swords size={14} /> Melé <b>+{(stats.mel ?? 3) + stats.comp}</b> · <b>{ataquesTurno(clase, stats.nivelPJ)}</b> golpe{ataquesTurno(clase, stats.nivelPJ) > 1 ? 's' : ''}</div>
            </div>
          </div>
          <div className="inputs-group">
            <h2><Skull size={17} /> El objetivo</h2>
            <Stepper label="Clase de armadura" value={stats.ca} min={1} max={39} onChange={set('ca')} plain hint="De 1 a 39" />
            <Stepper label="Salv. Destreza" value={stats.des} min={-5} max={19} onChange={set('des')} hint="De −5 a +19" />
            <Stepper label="Salv. Constitución" value={stats.con} min={-5} max={19} onChange={set('con')} hint="De −5 a +19" />
            <Stepper label="Salv. Sabiduría" value={stats.sab ?? 2} min={-5} max={19} onChange={set('sab')} hint="De −5 a +19" />
            <Stepper label="Salv. Fuerza" value={stats.fue ?? 2} min={-5} max={19} onChange={set('fue')} hint="De −5 a +19" />
            <Stepper label="Salv. Inteligencia" value={stats.int ?? 0} min={-5} max={19} onChange={set('int')} hint="De −5 a +19" />
          </div>
          <div className="inputs-group">
            <h2><Shield size={17} /> Resistencias del objetivo</h2>
            <div className="res-head" aria-hidden>
              <span />
              {RES_STATES.map((st) => <span key={st.v}>{st.desc}</span>)}
            </div>
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
