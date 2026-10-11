import { Crown, Swords, Table2, BookOpen, WandSparkles, Sword, LayoutGrid } from 'lucide-react';

const TABS = [
  { id: 'mejor', label: 'Mejor hechizo', icon: Crown },
  { id: 'duelo', label: 'Duelo 1v1', icon: Swords },
  { id: 'tabla', label: 'Comparativa', icon: Table2 },
  { id: 'grimorio', label: 'Grimorio', icon: BookOpen },
];

const MODOS = [
  { id: 'todos', label: 'Todos', icon: LayoutGrid },
  { id: 'hechizos', label: 'Hechizos', icon: WandSparkles },
  { id: 'mele', label: 'Melé', icon: Sword },
];

export default function Tabs({ active, onChange, modo, onModo }) {
  return (
    <div className="tabs-wrap">
      <nav className="tabs" role="tablist" aria-label="Secciones del grimorio">
        {TABS.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              className={`tab ${active === t.id ? 'active' : ''}`}
              onClick={() => onChange(t.id)}
            >
              <Icon size={16} />
              {t.label}
            </button>
          );
        })}
      </nav>
      <div className="modebar" role="group" aria-label="Qué mostrar">
        {MODOS.map((m) => {
          const Icon = m.icon;
          return (
            <button
              key={m.id}
              className={`mode ${modo === m.id ? 'active' : ''}`}
              aria-pressed={modo === m.id}
              onClick={() => onModo(m.id)}
              title={m.id === 'hechizos' ? 'Conjuros y trucos' : m.id === 'mele' ? 'Armas y rasgos de clase' : 'Todo junto'}
            >
              <Icon size={15} />
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
