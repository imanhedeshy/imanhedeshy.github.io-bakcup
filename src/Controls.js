import React, { useState } from 'react';

const Controls = ({ applyChanges }) => {
  const [controls, setControls] = useState({
    speedMultiplier: 1,
    radiusMultiplier: 1,
    sizeMultiplier: 1
  });

  const handleChange = (event) => {
    setControls({
      ...controls,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    applyChanges(controls);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Multipliers</h3>
      <label htmlFor="speedMultiplier">Speed:</label>
      <input type="number" name="speedMultiplier" value={controls.speedMultiplier} onChange={handleChange} step="0.05" min="0.1" />
      <label htmlFor="radiusMultiplier">Radius:</label>
      <input type="number" name="radiusMultiplier" value={controls.radiusMultiplier} onChange={handleChange} step="0.05" min="0.1" />
      <label htmlFor="sizeMultiplier">Size:</label>
      <input type="number" name="sizeMultiplier" value={controls.sizeMultiplier} onChange={handleChange} placeholder="Disabled" step="0.1" min="0.1" />
      <button type="submit">Apply</button>
    </form>
  );
}

export default Controls;
