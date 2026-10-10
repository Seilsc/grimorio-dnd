import { Sparkles, Swords, Table2 } from 'lucide-react';

export default function Hero({ totalHechizos = 12 }) {
  return (
    <header className="hero">
      <div className="hero-runes" aria-hidden>✦ ᚠ ᚢ ᚦ ᚨ ᚱ ✦ ᚲ ᚷ ᚹ ✦</div>
      <div className="hero-badge"><Sparkles size={14} /> Grimorio del Excel</div>
      <h1>⚔️ Mejor hechizo de daño <span className="gold">según la situación</span></h1>
      <p className="hero-sub">
        Toda la sabiduría de tu Excel <em>hechizos_de_dungeons_and_dragons.xlsx</em> en una
        página épica: mete tu bono, la CA y las salvaciones del monstruo y descubre
        qué hechizo hace más daño medio con cada espacio de conjuro.
      </p>
      <div className="hero-stats">
        <div className="hstat"><Swords size={16} /><b>{totalHechizos}</b><span>hechizos</span></div>
        <div className="hstat"><b>9</b><span>niveles de espacio</span></div>
        <div className="hstat"><Table2 size={16} /><b>1v1</b><span>arena de duelo</span></div>
      </div>
    </header>
  );
}
