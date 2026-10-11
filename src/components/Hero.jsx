import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="hero hero-compact">
      <div className="hero-badge"><Sparkles size={14} /> Grimorio completo</div>
      <h1>Daño, curación <span className="gold">y utilidad</span></h1>
      <p className="hero-sub">
        Todos los conjuros, trucos, armas y rasgos oficiales: cuánto pegan,
        cuánto curan y para qué sirve cada utilidad. Elige tu clase y nivel:
        solo verás lo que puedes usar.
      </p>
    </header>
  );
}
