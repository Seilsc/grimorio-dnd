import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { SPELLS, claseLabel } from '../data/spells.js';
import { spellDamage, fmt } from '../lib/damage.js';
import SpellIcon from './SpellIcon.jsx';

const FILTROS = [
  { id: 'todos', label: 'Todos' },
  { id: 'ataque', label: 'Ataque (CA)' },
  { id: 'salv-des', label: 'Salv. DES' },
  { id: 'salv-con', label: 'Salv. CON' },
  { id: 'auto', label: 'Automático' },
  { id: 'mixto', label: 'Mixto' },
];

export default function SpellGrid({ stats, nivel, spells }) {
  const base = spells ?? SPELLS;
  const [filtro, setFiltro] = useState('todos');
  const [abierto, setAbierto] = useState(null);

  const list = base.filter((s) => filtro === 'todos' || s.tirada === filtro);
  const detail = (s) => spellDamage(s, nivel, stats);

  return (
    <section className="panel" id="grimorio">
      <div className="section-title">
        <h2><BookOpen size={20} /> Grimorio · fichas de hechizo</h2>
        <div className="chips">
          {FILTROS.map((f) => (
            <button key={f.id} className={`chip ${filtro === f.id ? 'on' : ''}`} onClick={() => setFiltro(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <p className="muted small">El daño mostrado es al <b>nivel {nivel}</b> seleccionado (sincronizado con el ganador y el duelo). Sin trucos: escalan con nivel de personaje, no con espacio.</p>
      <div className="spell-grid">
        {list.map((s) => {
          const r = detail(s);
          const open = abierto === s.id;
          return (
            <article key={s.id} className="card spell-card">
              <div className="spell-head">
                <span className="spell-icon"><SpellIcon spell={s} size={30} /></span>
                <div>
                  <h3>{s.nombre}</h3>
                  <div className="spell-badges">
                    <span className="badge">{s.tiradaLabel}</span>
                    <span className="badge dmg" style={{ '--c': s.color }}>{s.tipoDano}</span>
                    <span className="badge lvl">Nv {s.nivelMin}{s.nivelMin !== s.nivelMax ? `–${s.nivelMax}` : ''}</span>
                    {s.libro && <span className="badge book">{s.libro}</span>}
                  </div>
                  {s.clases?.length > 0 && (
                    <div className="muted small classes-line">{s.clases.map(claseLabel).join(' · ')}</div>
                  )}
                </div>
              </div>
              <div className="spell-dmg-row">
                {r.lanzable ? (
                  <>
                    <span className="spell-dmg">{fmt(r.dmg)}</span>
                    <span className="muted small">a N{nivel} · {r.dados}<br />{r.probLabel}</span>
                  </>
                ) : (
                  <span className="muted">– <span className="small">{r.motivo}</span></span>
                )}
              </div>
              <p className="muted small">{s.notas}</p>
              <button className="link" onClick={() => setAbierto(open ? null : s.id)}>
                {open ? <>Ocultar detalle <ChevronUp size={13} /></> : <>Ver detalle por nivel <ChevronDown size={13} /></>}
              </button>
              {open && (
                <table className="mini">
                  <thead><tr><th>Nv</th><th>Dados</th><th>Daño</th><th>Prob.</th></tr></thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((l) => {
                      const rr = spellDamage(s, l, stats);
                      return (
                        <tr key={l} className={l === nivel ? 'hl' : ''}>
                          <td>N{l}</td>
                          <td>{rr.dados}</td>
                          <td>{rr.lanzable ? fmt(rr.dmg) : '–'}</td>
                          <td className="small">{rr.lanzable ? rr.probLabel : rr.motivo}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
