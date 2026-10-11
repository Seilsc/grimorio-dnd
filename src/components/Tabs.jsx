import { Crown, Swords, Table2, BookOpen } from 'lucide-react';

const TABS = [
  { id: 'mejor', label: 'Mejor hechizo', icon: Crown },
  { id: 'duelo', label: 'Duelo 1v1', icon: Swords },
  { id: 'tabla', label: 'Comparativa', icon: Table2 },
  { id: 'grimorio', label: 'Grimorio', icon: BookOpen },
];

export default function Tabs({ active, onChange }) {
  return (
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
  );
}
