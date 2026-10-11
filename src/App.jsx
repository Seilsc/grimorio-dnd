import { useState } from 'react';
import { Dices } from 'lucide-react';
import Hero from './components/Hero.jsx';
import InputPanel from './components/InputPanel.jsx';
import Tabs from './components/Tabs.jsx';
import WinnerBoard from './components/WinnerBoard.jsx';
import DuelArena from './components/DuelArena.jsx';
import CompareTable from './components/CompareTable.jsx';
import DamageChart from './components/DamageChart.jsx';
import SpellGrid from './components/SpellGrid.jsx';
import { RES_DEFAULT } from './lib/damage.js';
import { SPELLS, spellsFor } from './data/spells.js';

export default function App() {
  const [stats, setStats] = useState({
    mod: 3, comp: 2, ca: 15, des: 2, con: 3, sab: 2, fue: 2, int: 0,
    mel: 3, nivelPJ: 5, clase: 'todas', res: { ...RES_DEFAULT },
  });
  const [nivel, setNivel] = useState(3);
  const [aId, setAId] = useState('bola-fuego');
  const [bId, setBId] = useState('proyectil-magico');
  const [tab, setTab] = useState('mejor');
  const [modo, setModo] = useState('todos');
  const [vis, setVis] = useState(() => Object.fromEntries(SPELLS.map((s) => [s.id, true])));

  const setClase = (c) => setStats((s) => ({ ...s, clase: c }));
  const lista = spellsFor(stats.clase, modo);
  const ids = lista.map((s) => s.id);

  return (
    <div className="app">
      <nav className="topnav">
        <span className="brand"><Dices size={20} /> Grimorio</span>
        <span className="topnav-sub">Comparador de daño · D&D</span>
      </nav>

      <main className="wrap">
        <Hero />
        <InputPanel stats={stats} setStats={setStats} clase={stats.clase} setClase={setClase} />
        <Tabs active={tab} onChange={setTab} modo={modo} onModo={setModo} />

        {tab === 'mejor' && (
          <WinnerBoard nivel={nivel} setNivel={setNivel} stats={stats} ids={ids} />
        )}
        {tab === 'duelo' && (
          <DuelArena
            aId={aId} bId={bId} setAId={setAId} setBId={setBId}
            nivel={nivel} setNivel={setNivel} stats={stats}
          />
        )}
        {tab === 'tabla' && (
          <>
            <CompareTable stats={stats} spells={lista} vis={vis} setVis={setVis} />
            <DamageChart
              stats={stats} spells={lista} nivel={nivel}
              highlight={[aId, bId]} vis={vis} setVis={setVis}
            />
          </>
        )}
        {tab === 'grimorio' && (
          <SpellGrid stats={stats} nivel={nivel} spells={lista} />
        )}
      </main>
    </div>
  );
}
