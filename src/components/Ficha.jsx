import { useState } from 'react';
import { ScrollText, ChevronDown, ChevronUp } from 'lucide-react';
import { FICHAS, alcanceTxt } from '../data/fichas.js';
import { BookLink } from './SpellLink.jsx';

/** Bloque de reglas desplegable: libro, nivel, tirada/salvación, tipo de daño,
 *  tiempo, alcance (pies/m/casillas), componentes, duración + resumen y descripción. */
export default function Ficha({ entry, subtitulo }) {
  const [open, setOpen] = useState(false);
  const f = FICHAS[entry.id];
  const tirada = entry.tiradaLabel;
  const dano = entry.tipoDano;
  if (!f && !tirada && !dano) return null;
  return (
    <div className="ficha">
      <button className="link" onClick={() => setOpen((o) => !o)}>
        <ScrollText size={13} /> {open ? 'Ocultar ficha' : 'Ficha completa'} {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
      </button>
      {open && (
        <div className="ficha-body">
          <dl>
            <div><dt>Libro</dt><dd><BookLink libro={entry.libro} /></dd></div>
            {subtitulo && <div><dt>Nivel</dt><dd>{subtitulo}</dd></div>}
            {tirada && <div><dt>Tirada</dt><dd>{tirada}</dd></div>}
            {dano && <div><dt>Daño</dt><dd>{dano}</dd></div>}
            {f && (
              <>
                <div><dt>Tiempo</dt><dd>{f.t}</dd></div>
                <div><dt>Alcance</dt><dd>{alcanceTxt(f.a)}</dd></div>
                <div><dt>Componentes</dt><dd>{f.c}</dd></div>
                <div><dt>Duración</dt><dd>{f.d}</dd></div>
              </>
            )}
          </dl>
          {f && (
            <>
              <p className="ficha-res"><b>En juego:</b> {f.r}</p>
              <p className="muted small">{f.x}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
