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

const LIBROS = {
  PHB: { nombre: 'Manual del Jugador (PHB, 2014)', url: 'https://www.dndbeyond.com/sources/phb' },
  XGtE: { nombre: 'Guía de Xanathar (XGtE)', url: 'https://www.dndbeyond.com/sources/xgte' },
  TCoE: { nombre: 'Caldero de Tasha (TCoE)', url: 'https://www.dndbeyond.com/sources/tcoe' },
};

/** Insignia de libro clicable al libro oficial en D&D Beyond. */
export function BookLink({ libro }) {
  const b = LIBROS[libro];
  if (!libro) return null;
  if (!b) return <span className="badge book">{libro}</span>;
  return (
    <a className="badge book" href={b.url} target="_blank" rel="noopener noreferrer" title={b.nombre}>
      {libro}
    </a>
  );
}
