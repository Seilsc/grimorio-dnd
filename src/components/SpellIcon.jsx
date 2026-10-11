import {
  Flame, FlameKindling, Sword, Snowflake, Skull, Atom,
  CloudHail, Ghost, CircleDot, WandSparkles, Zap, Crosshair,
} from 'lucide-react';

const MAP = {
  Flame, FlameKindling, Sword, Snowflake, Skull, Atom,
  CloudHail, Ghost, CircleDot, WandSparkles, Zap, Crosshair,
};

/** Icono Lucide del hechizo, teñido con su color de tipo de daño. */
export default function SpellIcon({ spell, size = 18 }) {
  const C = MAP[spell.icon] ?? SparklesFallback;
  return <C size={size} color={spell.color} strokeWidth={2.2} />;
}

function SparklesFallback(props) {
  return <Flame {...props} />;
}
