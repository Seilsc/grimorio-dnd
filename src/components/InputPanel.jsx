import { useState } from 'react';
import { User, Skull, Shield, ChevronDown, Target, ShieldHalf, SlidersHorizontal, Swords } from 'lucide-react';
import { attackBonus, spellDC, modLanz, compDe, modDe, caracLanzDe, ataquesTurno, activeRes } from '../lib/damage.js';
import { RES_TYPES, RES_STATES, CLASES } from '../data/spells.js';
import { ResIcon } from './SpellIcon.jsx';
import Stepper from './Stepper.jsx';

const SCORES = [
  { key: 'fue', label: 'Fuerza' },
  { key: 'des', label: 'Destreza' },
  { key: 'con', label: 'Constitución' },
  { key: 'int', label: 'Inteligencia' },
  { key: 'sab', label: 'Sabiduría' },
  { key: 'car', label: 'Carisma' },
];

export default function InputPanel({ stats, setStats, clase, setClase }) {
  const [open, setOpen] = useState(true);
  const set = (k) => (v) => setStats((s) => ({ ...s, [k]: v }));
  const mod = modLanz(stats);
  const comp = compDe(stats);
  const bono = attackBonus(mod, comp);
  const dc = spellDC(mod, comp);
  const mel = Math.max(modDe(stats.fue), modDe(stats.des));
  const golpes = ataquesTurno(clase, stats.nivelPJ);
  const nRes = activeRes(stats).length;
  const carac = caracLanzDe(stats).toUpperCase();

  return (
    <section className="inputs-wrap" id="datos">
      <button className="inputs-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="inputs-summary">
          <SlidersHorizontal size={16} /> Personalizar datos
          <span className="muted small">
            · Nv{stats.nivelPJ} +{bono}/CD{dc}/CA{stats.ca}{nRes > 0 ? ` · ${nRes} resist.` : ''}
          </span>
        </span>
        <ChevronDown size={18} className={`chev ${open ? 'up' : ''}`} />
      </button>
      {open && (
        <div className="inputs-grid">
          <div className="inputs-group">
            <h2><User size={17} /> Tu personaje</h2>
            <label className="class-label">Clase de tu personaje
              <select value={clase} onChange={(e) => setClase(e.target.value)}>
                {CLASES.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
              </select>
            </label>
            {(clase === 'caballero' || clase === 'picaro-arcano') && (
              <p className="muted small">Usa la lista de mago como aproximación (en mesa se limita por escuela).</p>
            )}
            <div className="scores-grid">
              {SCORES.map((c) => (
                <Stepper
                  key={c.key} label={`${c.label} (${modDe(stats[c.key]) >= 0 ? `+${modDe(stats[c.key])}` : modDe(stats[c.key])})`}
                  value={stats[c.key]} min={1} max={30} onChange={set(c.key)} plain slider={false}
                />
              ))}
            </div>
            <Stepper label="Nivel de personaje" value={stats.nivelPJ ?? 4} min={1} max={20} onChange={set('nivelPJ')} plain hint="Competencia, trucos, rasgos…" />
            <div className="derived">
              <div><Target size={14} /> Ataque <b>+{bono}</b></div>
              <div><ShieldHalf size={14} /> CD <b>{dc}</b> <span className="muted small">({carac})</span></div>
              <div><Swords size={14} /> Melé <b>+{mel + comp}</b> · <b>{golpes}</b> golpe{golpes > 1 ? 's' : ''}</div>
              <div className="muted small">Nv{stats.nivelPJ} · Comp +{comp}</div>
            </div>
          </div>
          <div className="inputs-group">
            <h2><Skull size={17} /> El objetivo</h2>
            <Stepper label="Clase de armadura" value={stats.ca} min={1} max={39} onChange={set('ca')} plain hint="De 1 a 39" />
            <Stepper label="Salv. Destreza" value={stats.sDes} min={-5} max={19} onChange={set('sDes')} hint="De −5 a +19" />
            <Stepper label="Salv. Constitución" value={stats.sCon} min={-5} max={19} onChange={set('sCon')} hint="De −5 a +19" />
            <Stepper label="Salv. Sabiduría" value={stats.sSab} min={-5} max={19} onChange={set('sSab')} hint="De −5 a +19" />
            <Stepper label="Salv. Fuerza" value={stats.sFue} min={-5} max={19} onChange={set('sFue')} hint="De −5 a +19" />
            <Stepper label="Salv. Inteligencia" value={stats.sInt} min={-5} max={19} onChange={set('sInt')} hint="De −5 a +19" />
          </div>
          <div className="inputs-group res-group">
            <h2><Shield size={17} /> Resistencias del objetivo</h2>
            <div className="res-cols">
              {[RES_TYPES.slice(0, 7), RES_TYPES.slice(7)].map((col, ci) => (
                <div key={ci}>
                  <div className="res-head" aria-hidden>
                    <span />
                    {RES_STATES.map((st) => <span key={st.v}>{st.desc}</span>)}
                  </div>
                  {col.map((t) => {
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
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
