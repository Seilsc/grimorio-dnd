import { useMemo, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { TrendingUp } from 'lucide-react';
import { SPELLS } from '../data/spells.js';
import { spellDamage } from '../lib/damage.js';
import SpellIcon from './SpellIcon.jsx';

const PALETTE = ['#f59e0b', '#ef4444', '#38bdf8', '#a855f7', '#4ade80', '#fb923c', '#facc15', '#60a5fa', '#2dd4bf', '#f87171', '#c084fc', '#94a3b8'];

export default function DamageChart({ stats, highlight = [] }) {
  const [visible, setVisible] = useState(() =>
    Object.fromEntries(SPELLS.map((s) => [s.id, ['bola-fuego', 'proyectil-magico', 'causar-heridas'].includes(s.id)]))
  );

  const data = useMemo(() => {
    const rows = [];
    for (let lvl = 1; lvl <= 9; lvl++) {
      const row = { nivel: `N${lvl}` };
      for (const s of SPELLS) {
        const r = spellDamage(s, lvl, stats);
        row[s.id] = r.lanzable ? Math.round(r.dmg * 10) / 10 : null;
      }
      rows.push(row);
    }
    return rows;
  }, [stats]);

  const toggle = (id) => setVisible((v) => ({ ...v, [id]: !v[id] }));

  return (
    <section className="panel" id="grafico">
      <h2><TrendingUp size={20} /> Curvas de daño por nivel de espacio</h2>
      <p className="muted small">Activa/desactiva hechizos. Los del duelo aparecen con línea gruesa.</p>
      <div className="chips">
        {SPELLS.map((s, i) => (
          <button
            key={s.id}
            className={`chip ${visible[s.id] ? 'on' : ''}`}
            style={{ '--c': PALETTE[i % PALETTE.length] }}
            onClick={() => toggle(s.id)}
          >
            <SpellIcon spell={s} size={13} /> {s.nombre}
          </button>
        ))}
      </div>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3b3654" />
            <XAxis dataKey="nivel" stroke="#cbbf9a" />
            <YAxis stroke="#cbbf9a" />
            <Tooltip
              contentStyle={{ background: '#1a1625', border: '1px solid #c9a227', color: '#f5e6c8' }}
            />
            <Legend />
            {SPELLS.filter((s) => visible[s.id]).map((s) => (
              <Line
                key={s.id}
                type="monotone"
                dataKey={s.id}
                name={s.nombre}
                stroke={PALETTE[SPELLS.indexOf(s) % PALETTE.length]}
                strokeWidth={highlight.includes(s.id) ? 3.5 : 1.8}
                dot={false}
                connectNulls
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
