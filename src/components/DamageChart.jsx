import { useMemo, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Maximize2, X, Eye, EyeOff, Crown } from 'lucide-react';
import { SPELLS } from '../data/spells.js';
import { spellDamage, compareAtLevel } from '../lib/damage.js';
import SpellIcon from './SpellIcon.jsx';

// Paleta generada por ángulo dorado: tonos distintos y oscuros para el pergamino.
const lineColor = (i) => `hsl(${Math.round((i * 137.508) % 360)}, 62%, 30%)`;

function ChartBody({ data, list, visible, highlight, height }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: -6, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#a68b55" />
        <XAxis dataKey="nivel" stroke="#6d5a3e" tick={{ fontSize: 12, fill: '#6d5a3e' }} />
        <YAxis stroke="#6d5a3e" tick={{ fontSize: 12, fill: '#6d5a3e' }} width={44} />
        <Tooltip
          contentStyle={{ background: '#241708', border: '1px solid #8a6d2f', color: '#e9d9ae', fontSize: 13 }}
          labelStyle={{ color: '#f0d878' }}
          cursor={{ stroke: '#8a6d2f' }}
        />
        <Legend verticalAlign="bottom" height={30} wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
        {list.filter((s) => visible[s.id]).map((s) => (
          <Line
            key={s.id}
            type="monotone"
            dataKey={s.id}
            name={s.nombre}
            stroke={lineColor(list.indexOf(s))}
            strokeWidth={highlight.includes(s.id) ? 3 : 1.5}
            dot={false}
            connectNulls
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default function DamageChart({ stats, spells, nivel = 3, highlight = [], vis, setVis }) {
  const list = spells ?? SPELLS;
  const ids = list.map((s) => s.id);
  const visible = vis ?? Object.fromEntries(ids.map((id) => [id, true]));
  const [expand, setExpand] = useState(false);

  const data = useMemo(() => {
    const rows = [];
    for (let lvl = 1; lvl <= 9; lvl++) {
      const row = { nivel: `N${lvl}` };
      for (const s of list) {
        const r = spellDamage(s, lvl, stats);
        row[s.id] = r.lanzable ? Math.round(r.dmg * 10) / 10 : null;
      }
      rows.push(row);
    }
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats, nivel, list.length, ids.join(',')]);

  const toggle = (id) => setVis && setVis((v) => ({ ...v, [id]: !v[id] }));
  const showAll = () => setVis && setVis((v) => ({ ...v, ...Object.fromEntries(ids.map((id) => [id, true])) }));
  const hideAll = () => setVis && setVis((v) => ({ ...v, ...Object.fromEntries(ids.map((id) => [id, false])) }));
  const onlyTop5 = () => {
    if (!setVis) return;
    const top = compareAtLevel(nivel, stats, ids).slice(0, 5).map((t) => t.spell.id);
    setVis((v) => ({ ...v, ...Object.fromEntries(ids.map((id) => [top.includes(id)])) }));
  };
  const nVis = list.filter((s) => visible[s.id]).length;

  return (
    <section className="panel" id="grafico">
      <div className="section-title">
        <h2><TrendingUp size={20} /> Curvas de daño por nivel de espacio</h2>
        <div className="duel-controls">
          <button className="mini-btn" onClick={onlyTop5} title="Mostrar solo los 5 mejores a este nivel"><Crown size={13} /> Solo top 5</button>
          <button className="mini-btn" onClick={showAll}><Eye size={13} /> Todos</button>
          <button className="mini-btn" onClick={hideAll}><EyeOff size={13} /> Ninguno</button>
          <button className="swap" onClick={() => setExpand(true)}><Maximize2 size={15} /> Ampliar</button>
        </div>
      </div>
      <p className="muted small">
        Misma selección que la tabla ({nVis} visibles). Los del duelo aparecen con línea gruesa.
      </p>
      <div className="chips">
        {list.map((s) => (
          <button
            key={s.id}
            className={`chip ${visible[s.id] ? 'on' : ''}`}
            style={{ '--c': s.color }}
            onClick={() => toggle(s.id)}
          >
            <SpellIcon spell={s} size={13} /> {s.nombre}
          </button>
        ))}
      </div>
      <div className="chart-box">
        <ChartBody data={data} list={list} visible={visible} highlight={highlight} height={340} />
      </div>
      {expand && (
        <div className="chart-modal" role="dialog" aria-label="Gráfica ampliada" onClick={() => setExpand(false)}>
          <div className="chart-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="chart-modal-head">
              <b>Curvas de daño por nivel de espacio</b>
              <button className="swap" onClick={() => setExpand(false)}><X size={15} /> Cerrar</button>
            </div>
            <ChartBody data={data} list={list} visible={visible} highlight={highlight} height={Math.max(420, window.innerHeight * 0.7)} />
          </div>
        </div>
      )}
    </section>
  );
}
