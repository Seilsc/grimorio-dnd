import { User, Skull } from 'lucide-react';
import { attackBonus, spellDC } from '../lib/damage.js';

function Num({ label, value, min, max, onChange, hint }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <div className="field-row">
        <input
          type="range" min={min} max={max} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <input
          type="number" min={min} max={max} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
      {hint && <span className="field-hint">{hint}</span>}
    </label>
  );
}

export default function InputPanel({ stats, setStats }) {
  const set = (k) => (v) => setStats((s) => ({ ...s, [k]: v }));
  const bono = attackBonus(stats.mod, stats.comp);
  const dc = spellDC(stats.mod, stats.comp);

  return (
    <section className="panel inputs" id="datos">
      <div className="card">
        <h2><User size={18} /> Tus datos</h2>
        <Num label="Mod. característica" value={stats.mod} min={-5} max={10} onChange={set('mod')} />
        <Num label="Bono competencia" value={stats.comp} min={0} max={8} onChange={set('comp')} />
        <div className="derived">
          <div>🎯 Bono ataque: <b>+{bono}</b></div>
          <div>🌀 CD salvación: <b>{dc}</b></div>
        </div>
        <p className="muted">Como las celdas amarillas del Excel: todo se recalcula solo.</p>
      </div>
      <div className="card">
        <h2><Skull size={18} /> El objetivo</h2>
        <Num label="Clase de armadura (CA)" value={stats.ca} min={1} max={39} onChange={set('ca')} hint="1 a 39" />
        <Num label="Salv. Destreza" value={stats.des} min={-5} max={19} onChange={set('des')} hint="−5 a +19" />
        <Num label="Salv. Constitución" value={stats.con} min={-5} max={19} onChange={set('con')} hint="−5 a +19" />
      </div>
    </section>
  );
}
