import { useState } from 'react';
import { Dices } from 'lucide-react';
import Hero from './components/Hero.jsx';
import ApartTabs from './components/ApartTabs.jsx';
import InputPanel from './components/InputPanel.jsx';
import Tabs from './components/Tabs.jsx';
import WinnerBoard from './components/WinnerBoard.jsx';
import DuelArena from './components/DuelArena.jsx';
import CompareTable from './components/CompareTable.jsx';
import VisMenu from './components/VisMenu.jsx';
import DamageChart from './components/DamageChart.jsx';
import SpellGrid from './components/SpellGrid.jsx';
import Curacion from './components/Curacion.jsx';
import Utilidad from './components/Utilidad.jsx';
import { RES_DEFAULT } from './lib/damage.js';
import { SPELLS, spellsFor } from './data/spells.js';
export default function App() {
  const [stats, setStats] = useState({
    fue: 16, des: 14, con: 14, int: 16, sab: 12, car: 8,
    nivelPJ: 4, clase: 'todas',
    ca: 15, sDes: 2, sCon: 3, sSab: 2, sFue: 2, sInt: 0,
    res: { ...RES_DEFAULT },
  });
  const [nivel, setNivel] = useState(3);
  const [aId, setAId] = useState('bola-fuego');
  const [bId, setBId] = useState('proyectil-magico');
  const [tab, setTab] = useState('mejor');
  const [apartado, setApartado] = useState('dano');
  const [modo, setModo] = useState('todos');
  const [vis, setVis] = useState(() => Object.fromEntries(SPELLS.map((s) => [s.id, true])));

  const setClase = (c) => setStats((s) => ({ ...s, clase: c }));
  const lista = spellsFor(stats.clase, modo, stats.nivelPJ);
  const ids = lista.map((s) => s.id);
  const ocultos = spellsFor(stats.clase, modo, null).length - lista.length;

  return (
    <div className="app">
      <nav className="topnav">
        <span className="brand"><Dices size={20} /> Grimorio</span>
        <span className="topnav-sub">Comparador de daño · D&D</span>
      </nav>

      <main className="wrap">
        <Hero />
        <ApartTabs active={apartado} onChange={setApartado} />
        {apartado === 'dano' && (
          <>
            <InputPanel stats={stats} setStats={setStats} clase={stats.clase} setClase={setClase} />
            <Tabs active={tab} onChange={setTab} modo={modo} onModo={setModo} />
            {tab === 'mejor' && (
              <WinnerBoard nivel={nivel} setNivel={setNivel} stats={stats} ids={ids} ocultos={ocultos} />
            )}
            {tab === 'duelo' && (
              <DuelArena
                aId={aId} bId={bId} setAId={setAId} setBId={setBId}
                nivel={nivel} setNivel={setNivel} stats={stats}
              />
            )}
            {tab === 'tabla' && (
              <>
                <VisMenu list={lista} vis={vis} setVis={setVis} />
                <CompareTable stats={stats} spells={lista} vis={vis} />
                <DamageChart
                  stats={stats} spells={lista} nivel={nivel}
                  highlight={[aId, bId]} vis={vis} setVis={setVis}
                />
              </>
            )}
            {tab === 'grimorio' && (
              <SpellGrid stats={stats} nivel={nivel} spells={lista} />
            )}
          </>
        )}
        {apartado === 'cura' && (
          <Curacion stats={stats} />
        )}
        {apartado === 'uti' && (
          <Utilidad stats={stats} />
        )}
      </main>
    </div>
  );
}
