import { Ruler, Timer, Hourglass, FlaskConical } from 'lucide-react';
import { FICHAS, alcanceTxt } from '../data/fichas.js';
import { claseLabel } from '../data/spells.js';
import SpellIcon from './SpellIcon.jsx';
import SpellLink from './SpellLink.jsx';

/**
 * Tarjeta única del Grimorio: cabecera (icono + nombre + nombre oficial),
 * insignias, dato de daño/cura, los 4 datos clave siempre visibles
 * (alcance en pies/m/casillas, tiempo, duración, componentes),
 * descripción completa y enlace a D&D Beyond. Sin desplegables.
 */
export default function SpellCard({ entry, color, badges, stat, notas, footer, desc }) {
  const f = FICHAS[entry.id];
  const facts = f ? [
    { icon: Ruler, label: 'Alcance', value: alcanceTxt(f.a) },
    { icon: Timer, label: 'Tiempo', value: f.t },
    { icon: Hourglass, label: 'Duración', value: f.d },
    { icon: FlaskConical, label: 'Componentes', value: f.c },
  ] : [];
  return (
    <article className="card spell-card">
      <div className="spell-head">
        <span className="spell-icon"><SpellIcon spell={{ ...entry, color }} size={30} /></span>
        <div>
          <h3><SpellLink entry={entry}>{entry.nombre}</SpellLink></h3>
          {f?.o && f.o !== entry.nombre && (
            <div className="muted small spell-off">Nombre oficial: {f.o}</div>
          )}
          <div className="spell-badges">{badges}</div>
          {entry.clases?.length > 0 && (
            <div className="muted small classes-line">{entry.clases.map(claseLabel).join(' · ')}</div>
          )}
        </div>
      </div>
      {stat}
      {facts.length > 0 && (
        <dl className="facts">
          {facts.map(({ icon: Icon, label, value }) => (
            <div className="fact" key={label}>
              <dt><Icon size={14} /> {label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
      {desc}
      {f && <p className="spell-desc">{f.x}</p>}
      {f?.r && <p className="ficha-res"><b>En juego:</b> {f.r}</p>}
      {notas && <p className="muted small">{notas}</p>}
      <SpellLink entry={entry} className="dnd-link">Ficha oficial en D&D Beyond</SpellLink>
      {footer}
    </article>
  );
}
