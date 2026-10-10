export default function Methodology() {
  return (
    <section className="panel" id="metodo">
      <h2>📜 Cómo se calcula (como en tu Excel)</h2>
      <div className="card">
        <ul className="method">
          <li>🎯 <b>Ataques (CA):</b> <code>p = (MAX(0,20−MAX(2,CA−bono))+1)/20</code>. Daño = dados × media × <code>(p + 0.05)</code> — el +0.05 es el crítico (20 natural dobla dados). Tirada normal, sin ventaja.</li>
          <li>🌀 <b>Salvaciones:</b> <code>pSupera = MAX(0,MIN(1,(21−(CD−bonoSalv))/20))</code>. Daño = (dados×media+fijo) × <code>(pFalla + pSupera/2)</code>, salvo Desintegrar y explosión de Cuchillo (×0 si salva: todo o nada).</li>
          <li>✨ <b>Proyectil mágico:</b> determinista — dardos × 3.5 (1d4+1). Nunca falla, pero <b>Escudo</b> lo anula.</li>
          <li>❄️ <b>Cuchillo de hielo:</b> 1d10 de ataque (con crítico) + explosión (2d6+1d6/nivel) × prob. de fallar DES.</li>
          <li>⚠️ <b>Límites fieles al Excel:</b> no se cuentan resistencias/inmunidades/vulnerabilidades, ni daño a varios objetivos del área. Marchitar no afecta a no-muertos/constructos (aviso, no descuento).</li>
        </ul>
      </div>
      <footer className="foot">
        Hecho desde <em>hechizos_de_dungeons_and_dragons.xlsx</em> · 🐉 ¡Que tus dados sean altos!
      </footer>
    </section>
  );
}
