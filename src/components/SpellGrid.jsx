import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { SPELLS } from '../data/spells.js';
import { FICHAS } from '../data/fichas.js';
import { spellDamage, fmt } from '../lib/damage.js';
import { BookLink } from './SpellLink.jsx';
import SpellCard from './SpellCard.jsx';

const FILTROS = [
  { id: 'todos', label: 'Todos' },
  { id: 'ataque', label: 'Ataque (CA)' },
  { id: 'salv-des', label: 'Salv. DES' },
  { id: 'salv-con', label: 'Salv. CON' },
  { id: 'salv-sab', label: 'Salv. SAB' },
  { id: 'salv-fue', label: 'Salv. FUE' },
  { id: 'salv-int', label: 'Salv. INT' },
  { id: 'auto', label: 'Automático' },
  { id: 'mixto', label: 'Mixto' },
];

function coincide(s, q) {
  if (!q.trim()) return true;
  const hay = [s.nombre, s.tipoDano, FICHAS[s.id]?.o, FICHAS[s.id]?.e]
    .filter(Boolean).join(' ').toLowerCase();
  return q.toLowerCase().split(/\s+/).every((w) => hay.includes(w));
}

export default function SpellGrid({ stats, nivel, spells, niveles = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) {
  const base = spells ?? SPELLS;
  const [filtro, setFiltro] = useState('todos');
  const [abierto, setAbierto] = useState(null);
  const [q, setQ] = useState('');

  const list = base.filter((s) => (filtro === 'todos' || s.tirada === filtro) && coincide(s, q));
  const detail = (s) => spellDamage(s, nivel, stats);

  return (
    <section className="panel" id="grimorio">
      <div className="section-title">
        <h2><BookOpen size={20} /> Grimorio · fichas de conjuro</h2>
        <div className="chips">
          {FILTROS.map((f) => (
            <button key={f.id} className={`chip ${filtro === f.id ? 'on' : ''}`} onClick={() => setFiltro(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grim-bar">
        <label className="uti-search">
          <Search size={15} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por nombre, escuela o daño…" aria-label="Buscar conjuro" />
        </label>
        <span className="spell-count">{list.length} de {base.length}</span>
      </div>
      <p className="muted small">El daño mostrado es al <b>nivel {nivel}</b> seleccionado (sincronizado con el ganador y el duelo). Los trucos no gastan espacio: escalan con tu nivel de personaje. El melé usa tu Mod. cuerpo a cuerpo y tus ataques por turno.</p>
      {list.length === 0 && (
          <div className="card"><p className="muted">Sin resultados: prueba con otro nombre, cambia de clase, sube de nivel o elige otro filtro.</p></div>
      )}
      <div className="spell-grid">
        {list.map((s) => {
          const r = detail(s);
          const open = abierto === s.id;
          return (
            <SpellCard
              key={s.id}
              entry={s}
              color={s.color}
              badges={(
                <>
                  <span className="badge">{s.tiradaLabel}</span>
                  <span className="badge dmg" style={{ '--c': s.color }}>{s.tipoDano}</span>
                  <span className="badge lvl">Nv {s.nivelMin}{s.nivelMin !== s.nivelMax ? `–${s.nivelMax}` : ''}</span>
                  {FICHAS[s.id]?.e && <span className="badge">{FICHAS[s.id].e}</span>}
                  <BookLink libro={s.libro} />
                </>
              )}
              stat={r.lanzable ? (
                <div className="spell-dmg-row">
                  <span className="spell-dmg">{fmt(r.dmg)}</span>
                  <span className="muted small">a N{nivel} · {r.dados}<br />{r.probLabel}</span>
                </div>
              ) : (
                <div className="spell-dmg-row">
                  <span className="muted">– <span className="small">{r.motivo}</span></span>
                </div>
              )}
              notas={s.notas}
              footer={(
                <>
                  <button className="link" onClick={() => setAbierto(open ? null : s.id)}>
                    {open ? <>Ocultar detalle <ChevronUp size={13} /></> : <>Ver detalle por nivel <ChevronDown size={13} /></>}
                  </button>
                  {open && (
                    <table className="mini">
                      <thead><tr><th>Nv</th><th>Dados</th><th>Daño</th><th>Prob.</th></tr></thead>
                      <tbody>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].filter((l) => niveles.includes(l)).map((l) => {
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
                </>
              )}
            />
          );
        })}
      </div>
    </section>
  );
}
