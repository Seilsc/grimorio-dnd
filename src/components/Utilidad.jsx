import { useState } from 'react';
import { Compass, Search } from 'lucide-react';
import { UTILS } from '../data/spells.js';
import { FICHAS } from '../data/fichas.js';
import SpellCard from './SpellCard.jsx';
import { BookLink } from './SpellLink.jsx';

const TAGS = ['control', 'movimiento', 'exploración', 'social', 'información', 'defensa', 'sigilo', 'invocación', 'supervivencia'];

export default function Utilidad({ stats }) {
  const [q, setQ] = useState('');
  const [nv, setNv] = useState('todos');
  const [tag, setTag] = useState('todas');

  const list = UTILS.filter((u) => {
    if (stats.clase && stats.clase !== 'todas' && !u.clases.includes(stats.clase)) return false;
    if (nv !== 'todos' && String(u.nivel) !== nv) return false;
    if (tag !== 'todas' && !u.tags.includes(tag)) return false;
    if (q && !u.nombre.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <section className="panel" id="utilidad">
      <div className="section-title">
        <h2><Compass size={20} /> Utilidad y juego ({list.length})</h2>
      </div>
      <p className="muted small">Ni daño ni curación: control, movimiento, información, engaño y supervivencia. Mano de mago incluida.</p>
      <div className="card uti-filters">
        <label className="uti-search">
          <Search size={15} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar conjuro…" aria-label="Buscar conjuro" />
        </label>
        <label>Nivel
          <select value={nv} onChange={(e) => setNv(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="0">Trucos</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((l) => <option key={l} value={String(l)}>Nivel {l}</option>)}
          </select>
        </label>
        <label>Etiqueta
          <select value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value="todas">Todas</option>
            {TAGS.map((t) => <option key={t} value={t}>{t[0].toUpperCase() + t.slice(1)}</option>)}
          </select>
        </label>
      </div>
      {list.length === 0 && (
        <div className="card"><p className="muted">Nada con estos filtros: prueba con otra clase, nivel o búsqueda.</p></div>
      )}
      <div className="spell-grid">
        {list.map((u) => (
          <SpellCard
            key={u.id}
            entry={u}
            color="#e8cf7a"
            badges={(
              <>
                <span className="badge">{u.nivel === 0 ? 'Truco' : `Nv ${u.nivel}`}</span>
                {FICHAS[u.id]?.e && <span className="badge">{FICHAS[u.id].e}</span>}
                <BookLink libro={u.libro} />
                {u.tags.map((t) => <span key={t} className="badge tag">{t}</span>)}
              </>
            )}
            desc={<p className="muted small" style={{ marginTop: 8 }}>{u.desc}</p>}
          />
        ))}
      </div>
    </section>
  );
}
