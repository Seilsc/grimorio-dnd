import {
  Flame, FlameKindling, Sword, Snowflake, Skull, Atom,
  CloudHail, Ghost, CircleDot, WandSparkles, Zap, Crosshair,
  Hammer, Axe, Sun, Waves, Rocket, Shuffle, Music, Bomb, Swords,
  Orbit, Moon, Droplets, CloudLightning, Footprints, Wind, Mountain,
  PlugZap, Timer, Sunrise, CloudFog, BrickWall, Cone, Bug, HeartPulse,
  Hand, Target, FlaskConical, Biohazard, Brain, Volume2, Slice,
  Navigation, Eye, Maximize2, X, LayoutGrid,
} from 'lucide-react';

const MAP = {
  Flame, FlameKindling, Sword, Snowflake, Skull, Atom,
  CloudHail, Ghost, CircleDot, WandSparkles, Zap, Crosshair,
  Hammer, Axe, Sun, Waves, Rocket, Shuffle, Music, Bomb, Swords,
  Orbit, Moon, Droplets, CloudLightning, Footprints, Wind, Mountain,
  PlugZap, Timer, Sunrise, CloudFog, BrickWall, Cone, Bug, HeartPulse,
  Hand, Target, FlaskConical, Biohazard, Brain, Volume2, Slice,
  Navigation, Eye, Maximize2, X, LayoutGrid,
};

/**
 * Icono del hechizo dentro de un medallón que contrasta con el fondo:
 * cuero oscuro sobre pergamino, velo claro sobre superficies oscuras (vía CSS).
 */
export default function SpellIcon({ spell, size = 18 }) {
  const C = MAP[spell.icon] ?? Flame;
  const d = size + 10;
  return (
    <span className="sicon" style={{ '--sc': spell.color, width: d, height: d }}>
      <C size={size} strokeWidth={2.4} />
    </span>
  );
}

/** Icono suelto por nombre (p. ej. resistencias). */
export function ResIcon({ name, size = 15, color = '#e8cf7a' }) {
  const C = MAP[name] ?? Flame;
  const d = size + 10;
  return (
    <span className="sicon" style={{ '--sc': color, width: d, height: d }}>
      <C size={size} strokeWidth={2.4} />
    </span>
  );
}
