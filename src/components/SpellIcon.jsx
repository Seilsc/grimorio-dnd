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

/** Icono Lucide por nombre, teñido con el color dado. */
export default function SpellIcon({ spell, size = 18 }) {
  const C = MAP[spell.icon] ?? Flame;
  return <C size={size} color={spell.color} strokeWidth={2.2} />;
}

/** Icono suelto por nombre (p. ej. resistencias). */
export function ResIcon({ name, size = 15, color = '#8a6d2f' }) {
  const C = MAP[name] ?? Flame;
  return <C size={size} color={color} strokeWidth={2.2} />;
}
