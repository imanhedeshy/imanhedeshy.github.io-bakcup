import React, { useState } from 'react';
import SolarSystem from './SolarSystem';
import Controls from './Controls';
import "./App.scss";

function App() {
  const [multipliers, setMultipliers] = useState({
    speedMultiplier: 1,
    radiusMultiplier: 1,
    sizeMultiplier: 1
  });

  const applyChanges = (newMultipliers) => {
    setMultipliers(newMultipliers);
  };

  return (
    <div className="App">
      <header>
        <h1>Solar System</h1>
      </header>
      <SolarSystem multipliers={multipliers} />
      <Controls applyChanges={applyChanges} />
      <footer>
        <p>© 2023 Solar System By Iman</p>
      </footer>
    </div>
  );
}

export default App;
