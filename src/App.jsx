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
import { SPELLS, CURAS, spellsFor, espacioMaximo } from './data/spells.js';

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
  const [vis, setVis] = useState(() => Object.fromEntries([...SPELLS, ...CURAS].map((s) => [s.id, true])));

  const setClase = (c) => setStats((s) => ({ ...s, clase: c }));
  const lista = spellsFor(stats.clase, modo, stats.nivelPJ);
  const ids = lista.map((s) => s.id);
  const ocultos = spellsFor(stats.clase, modo, null).length - lista.length;

  // Niveles de espacio que el personaje puede usar (si no tiene, [1] de referencia).
  const maxSlot = stats.clase === 'todas' ? 9 : (espacioMaximo(stats.clase, stats.nivelPJ) ?? 9);
  const niveles = maxSlot >= 1 ? Array.from({ length: maxSlot }, (_, i) => i + 1) : [1];
  const nivelEf = niveles.includes(nivel) ? nivel : niveles[niveles.length - 1];

  return (
    <div className="app">
      <nav className="topnav">
        <span className="brand"><Dices size={20} /> Grimorio</span>
        <span className="topnav-sub">Comparador de daño · D&D</span>
      </nav>

      <main className="wrap">
        <Hero />
        <InputPanel stats={stats} setStats={setStats} clase={stats.clase} setClase={setClase} apartado={apartado} />
        <ApartTabs active={apartado} onChange={setApartado} />
        {apartado === 'dano' && (
          <>
            <Tabs active={tab} onChange={setTab} modo={modo} onModo={setModo} />
            {tab === 'mejor' && (
              <WinnerBoard nivel={nivelEf} setNivel={setNivel} stats={stats} ids={ids} ocultos={ocultos} niveles={niveles} maxSlot={maxSlot} />
            )}
            {tab === 'duelo' && (
              <DuelArena
                aId={aId} bId={bId} setAId={setAId} setBId={setBId}
                nivel={nivelEf} setNivel={setNivel} stats={stats} niveles={niveles} spells={lista}
              />
            )}
            {tab === 'tabla' && (
              <>
                <VisMenu list={lista} vis={vis} setVis={setVis} />
                <CompareTable stats={stats} spells={lista} vis={vis} niveles={niveles} />
                <DamageChart
                  stats={stats} spells={lista} nivel={nivelEf}
                  highlight={[aId, bId]} vis={vis} setVis={setVis} niveles={niveles}
                />
              </>
            )}
            {tab === 'grimorio' && (
              <SpellGrid stats={stats} nivel={nivelEf} spells={lista} niveles={niveles} />
            )}
          </>
        )}
        {apartado === 'cura' && (
          <Curacion stats={stats} vis={vis} setVis={setVis} niveles={niveles} />
        )}
        {apartado === 'uti' && (
          <Utilidad stats={stats} />
        )}
      </main>
    </div>
  );
}
