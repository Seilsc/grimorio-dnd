import { Flame, HeartPulse, Compass } from 'lucide-react';

const APARTADOS = [
  { id: 'dano', label: 'Daño', desc: 'Hechizos, trucos y melé', icon: Flame },
  { id: 'cura', label: 'Curación', desc: 'Quién cura más por nivel', icon: HeartPulse },
  { id: 'uti', label: 'Utilidad', desc: 'Trucos de juego sin daño', icon: Compass },
];

export default function ApartTabs({ active, onChange }) {
  return (
    <nav className="apart-tabs" aria-label="Apartados del grimorio">
      {APARTADOS.map((a) => {
        const Icon = a.icon;
        return (
          <button
            key={a.id}
            className={`apart ${active === a.id ? 'active' : ''}`}
            aria-pressed={active === a.id}
            onClick={() => onChange(a.id)}
          >
            <Icon size={22} />
            <span className="apart-label">{a.label}</span>
            <span className="apart-desc">{a.desc}</span>
          </button>
        );
      })}
    </nav>
  );
}
