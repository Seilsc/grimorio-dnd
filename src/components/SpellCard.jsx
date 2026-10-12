import { Hourglass } from 'lucide-react';
import { FICHAS, alcanceTxt } from '../data/fichas.js';
import { claseLabel, DDB_SPELL, DDB_EQUIP, DDB_SEARCH } from '../data/spells.js';
import { SCHOOL_ICONS } from '../data/escuelas.js';
import SpellIcon, { ResIcon } from './SpellIcon.jsx';
import SpellLink from './SpellLink.jsx';

/** Nombre en inglés desde el slug de D&D Beyond ("mass-heal" -> "Mass Heal"). */
function englishName(entry) {
  const slug = DDB_SPELL[entry.id] ?? DDB_EQUIP[entry.id] ?? DDB_SEARCH[entry.id];
  if (!slug) return null;
  if (slug.includes(' ')) return slug[0].toUpperCase() + slug.slice(1);
  return slug.split('-').map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(' ');
}

/** Etiqueta de la caja de nivel: Truco, Nv, rango o Melé. */
function nivelBox(entry) {
  if (entry.cat === 'mele') return 'Melé';
  if (entry.truco || entry.nivel === 0) return 'Truco';
  const min = entry.nivelMin ?? entry.min ?? entry.nivel;
  const max = entry.nivelMax ?? entry.max ?? entry.nivel;
  if (min == null) return null;
  return min === max ? `Nv ${min}` : `Nv ${min}–${max}`;
}

/**
 * Carta estilo grimorio impreso, con nuestra estética de pergamino:
 * caja de nivel + nombre (+ oficial e inglés), insignias, daño/cura,
 * franja de Tiempo/Duración/Alcance/Tirada, componentes,
 * descripción completa y enlace a D&D Beyond. Sin desplegables.
 */
export default function SpellCard({ entry, color, badges, stat, notas, footer, desc }) {
  const f = FICHAS[entry.id];
  const en = englishName(entry);
  const sub = [f?.o && f.o !== entry.nombre ? f.o : null, en].filter(Boolean).join(' · ');
  const concentra = /concentraci/i.test(f?.d ?? '');
  const strip = [
    f && { label: 'Tiempo', value: f.t },
    f && { label: 'Duración', value: f.d },
    f && { label: 'Alcance', value: alcanceTxt(f.a) },
    entry.tiradaLabel ? { label: 'Tirada', value: entry.tiradaLabel } : null,
  ].filter(Boolean);
  return (
    <article className="card spell-card">
      <div className="spell-head">
        {nivelBox(entry) && <span className="lvl-box">{nivelBox(entry)}</span>}
        <span className="spell-icon"><SpellIcon spell={{ ...entry, color }} size={30} /></span>
        <div className="spell-titles">
          <h3><SpellLink entry={entry}>{entry.nombre}</SpellLink></h3>
          {sub && <div className="muted small spell-off">{sub}</div>}
          <div className="spell-badges">{badges}</div>
          {entry.clases?.length > 0 && (
            <div className="muted small classes-line">{entry.clases.map(claseLabel).join(' · ')}</div>
          )}
        </div>
        <span className="school-strip">
          {f?.e && SCHOOL_ICONS[f.e] && (
            <span title={`Escuela: ${f.e}`}><ResIcon name={SCHOOL_ICONS[f.e]} size={16} color={color} /></span>
          )}
          {concentra && (
            <span title="Requiere concentración"><Hourglass size={16} className="conc-icon" /></span>
          )}
        </span>
      </div>
      {stat}
      {strip.length > 0 && (
        <dl className="statstrip">
          {strip.map(({ label, value }) => (
            <div className="statcell" key={label}>
              <b>{label}</b>
              <span>{value}</span>
            </div>
          ))}
        </dl>
      )}
      {f?.c && f.c !== '—' && (
        <p className="compband"><b>Componentes</b>{f.c}</p>
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
