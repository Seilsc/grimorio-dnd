import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="hero hero-compact">
      <div className="hero-badge"><Sparkles size={14} /> Grimorio del Excel</div>
      <h1>Mejor hechizo de daño <span className="gold">según la situación</span></h1>
      <p className="hero-sub">
        Ajusta tus datos y los del objetivo: el grimorio recalcula qué hechizo
        hace más daño medio con cada espacio de conjuro.
      </p>
    </header>
  );
}
