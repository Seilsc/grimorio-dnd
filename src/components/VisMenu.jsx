import { Eye, EyeOff, ListChecks } from 'lucide-react';
import SpellIcon from './SpellIcon.jsx';

/** Único menú de selección: lo que marques aquí se muestra en tabla Y gráfica. */
export default function VisMenu({ list, vis, setVis }) {
  const ids = list.map((s) => s.id);
  const nVis = list.filter((s) => vis[s.id]).length;
  const toggle = (id) => setVis((v) => ({ ...v, [id]: !v[id] }));
  const showAll = () => setVis((v) => ({ ...v, ...Object.fromEntries(ids.map((id) => [id, true])) }));
  const hideAll = () => setVis((v) => ({ ...v, ...Object.fromEntries(ids.map((id) => [id, false])) }));

  return (
    <div className="vis-menu">
      <div className="vis-head">
        <span><ListChecks size={15} /> Elige qué se muestra ({nVis}/{list.length})</span>
        <span className="chips-actions">
          <button className="mini-btn" onClick={showAll}><Eye size={13} /> Todos</button>
          <button className="mini-btn" onClick={hideAll}><EyeOff size={13} /> Ninguno</button>
        </span>
      </div>
      <div className="chips">
        {list.map((s) => (
          <button
            key={s.id}
            className={`chip ${vis[s.id] ? 'on' : ''}`}
            style={{ '--c': s.color }}
            onClick={() => toggle(s.id)}
            title={vis[s.id] ? `Ocultar ${s.nombre}` : `Mostrar ${s.nombre}`}
          >
            <SpellIcon spell={s} size={13} /> {s.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}
