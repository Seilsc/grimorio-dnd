import { useState } from 'react';
import Hero from './components/Hero.jsx';
import InputPanel from './components/InputPanel.jsx';
import WinnerBoard from './components/WinnerBoard.jsx';
import DuelArena from './components/DuelArena.jsx';
import CompareTable from './components/CompareTable.jsx';
import DamageChart from './components/DamageChart.jsx';
import SpellGrid from './components/SpellGrid.jsx';
import Methodology from './components/Methodology.jsx';
import { SPELLS } from './data/spells.js';

export default function App() {
  const [stats, setStats] = useState({ mod: 3, comp: 2, ca: 15, des: 2, con: 3 });
  const [nivel, setNivel] = useState(3);
  const [aId, setAId] = useState('bola-fuego');
  const [bId, setBId] = useState('proyectil-magico');

  return (
    <div className="app">
      <nav className="topnav">
        <span className="brand">🐉 Grimorio</span>
        <div className="links">
          <a href="#datos">Datos</a>
          <a href="#ganador">Ganador</a>
          <a href="#duelo">Duelo 1v1</a>
          <a href="#tabla">Tabla</a>
          <a href="#grimorio">Hechizos</a>
        </div>
      </nav>

      <main className="wrap">
        <Hero totalHechizos={SPELLS.length} />
        <div className="sticky-inputs">
          <InputPanel stats={stats} setStats={setStats} />
        </div>
        <WinnerBoard nivel={nivel} setNivel={setNivel} stats={stats} />
        <DuelArena
          aId={aId} bId={bId} setAId={setAId} setBId={setBId}
          nivel={nivel} setNivel={setNivel} stats={stats}
        />
        <CompareTable stats={stats} />
        <DamageChart stats={stats} highlight={[aId, bId]} />
        <SpellGrid stats={stats} nivel={nivel} />
        <Methodology />
      </main>
    </div>
  );
}
