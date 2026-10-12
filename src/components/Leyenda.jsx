import { BookOpenText, Hourglass } from 'lucide-react';
import { ResIcon } from './SpellIcon.jsx';
import { SCHOOL_ICONS } from '../data/escuelas.js';

/**
 * Rúbrica de todos los signos de las cartas: nivel, escuela, tirada,
 * alcance, componentes, concentración, daño medio, libro y clases.
 */
export default function Leyenda() {
  return (
    <section className="panel" id="leyenda">
      <div className="section-title">
        <h2><BookOpenText size={20} /> Leyenda de signos</h2>
      </div>
      <p className="muted small">Qué significa cada marca de las fichas del Grimorio.</p>
      <div className="ley-grid">
        <div className="card ley">
          <h3>Nivel</h3>
          <div className="ley-row"><span className="lvl-box">Truco</span><span>No gasta espacio; mejora con tu nivel de personaje (5/11/17).</span></div>
          <div className="ley-row"><span className="lvl-box">Nv 1</span><span>Se lanza con un espacio de ese nivel o superior.</span></div>
          <div className="ley-row"><span className="lvl-box">Nv 1–9</span><span>Rango de espacios con los que se puede lanzar.</span></div>
          <div className="ley-row"><span className="lvl-box">Nv 7</span><span>Solo con ese espacio exacto (p. ej. Dedo de la muerte).</span></div>
          <div className="ley-row"><span className="lvl-box">Melé</span><span>Arma o rasgo: no gasta espacio, usa tus ataques del turno.</span></div>
        </div>
        <div className="card ley">
          <h3>Escuela</h3>
          <div className="ley-row ley-icons">
            {Object.entries(SCHOOL_ICONS).map(([esc, icon]) => (
              <span key={esc} className="ley-icon" title={esc}>
                <ResIcon name={icon} size={15} color="#8a6d2f" /> {esc}
              </span>
            ))}
          </div>
        </div>
        <div className="card ley">
          <h3>Tirada</h3>
          <div className="ley-row"><span className="badge">Ataque (CA)</span><span>Tiras 1d20 contra su CA (+5% de crítico).</span></div>
          <div className="ley-row"><span className="badge">Salvación DES · CON · SAB · FUE · INT</span><span>Mitad de daño si supera (o nada, si lo indica).</span></div>
          <div className="ley-row"><span className="badge">Automático</span><span>Sin tirada: daño garantizado.</span></div>
          <div className="ley-row"><span className="badge">Ataque + salv. DES</span><span>Mixto: ataque y salvación a la vez.</span></div>
        </div>
        <div className="card ley">
          <h3>Alcance y componentes</h3>
          <div className="ley-row"><b>150 pies · 46 m · 30 casillas</b></div>
          <p><b>Toque</b> = 5 pies a tu alcance (1 casilla). <b>Personal</b> = sobre ti mismo.</p>
          <p><b>V</b> verbal (palabras) · <b>S</b> somático (gestos) · <b>M</b> material (objeto).</p>
          <div className="ley-row"><Hourglass size={15} className="conc-icon" /><span><b>Concentración</b>: la mantienes o el efecto se pierde.</span></div>
        </div>
        <div className="card ley">
          <h3>Daño medio y libros</h3>
          <p><b>12,5 a N3 · 8d6 · 65% fallo salv.</b> = daño esperado con ese espacio, dados y probabilidad.</p>
          <p><b>En juego</b> = consejo táctico. <b>Clases</b> = quién puede lanzarlo.</p>
          <p><b>PHB</b> Manual del Jugador · <b>XGtE</b> Guía de Xanathar · <b>TCoE</b> Caldero de Tasha.</p>
        </div>
      </div>
    </section>
  );
}
