import { ScrollText, Target, ShieldHalf, WandSparkles, Snowflake, TriangleAlert, Dices } from 'lucide-react';

const ITEMS = [
  { icon: Target, title: 'Ataques (CA)', body: (<>Prob. de impacto <code>p = (MAX(0,20−MAX(2,CA−bono))+1)/20</code>. Daño = dados × media × <code>(p + 0.05)</code> — el +0.05 es el crítico (20 natural dobla dados). Tirada normal, sin ventaja.</>) },
  { icon: ShieldHalf, title: 'Salvaciones', body: (<><code>pSupera = MAX(0,MIN(1,(21−(CD−bonoSalv))/20))</code>. Daño = (dados×media+fijo) × <code>(pFalla + pSupera/2)</code>, salvo Desintegrar y explosión de Cuchillo (×0 si salva: todo o nada).</>) },
  { icon: WandSparkles, title: 'Proyectil mágico', body: (<>Determinista — dardos × 3.5 (1d4+1). Nunca falla, pero <b>Escudo</b> lo anula.</>) },
  { icon: Snowflake, title: 'Cuchillo de hielo', body: (<>1d10 de ataque (con crítico) + explosión (2d6+1d6/nivel) × prob. de fallar DES.</>) },
  { icon: TriangleAlert, title: 'Límites fieles al Excel', body: (<>No se cuentan resistencias, inmunidades ni vulnerabilidades, ni daño a varios objetivos del área. Marchitar no afecta a no-muertos ni constructos (aviso, no descuento).</>) },
];

export default function Methodology() {
  return (
    <section className="panel" id="metodo">
      <h2><ScrollText size={20} /> Cómo se calcula (como en tu Excel)</h2>
      <div className="card">
        <ul className="method">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            return (
              <li key={it.title}>
                <span className="method-icon"><Icon size={17} /></span>
                <span><b>{it.title}:</b> {it.body}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <footer className="foot">
        Hecho desde <em>hechizos_de_dungeons_and_dragons.xlsx</em> · <Dices size={14} /> ¡Que tus dados sean altos!
      </footer>
    </section>
  );
}
