import { ExternalLink } from 'lucide-react';
import { dndUrl } from '../data/spells.js';

/** Nombre clicable que abre la ficha oficial en D&D Beyond (pestaña nueva). */
export default function SpellLink({ entry, children, className = '' }) {
  return (
    <a
      className={`spell-link ${className}`}
      href={dndUrl(entry)}
      target="_blank"
      rel="noopener noreferrer"
      title="Abrir ficha oficial en D&D Beyond"
    >
      {children}
      <ExternalLink size={12} className="ext" />
    </a>
  );
}
