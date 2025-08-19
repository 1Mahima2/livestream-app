import React, { useState } from 'react';

const OverlayManager = ({ overlays, addOverlay, deleteOverlay }) => {
  const [text, setText] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  const handleAdd = () => {
    const posX = parseInt(x, 10);
    const posY = parseInt(y, 10);

    if (text && !isNaN(posX) && !isNaN(posY)) {
      addOverlay({ text, x: posX, y: posY });
      setText(''); setX(''); setY('');
    } else {
      alert('Please enter valid text and numeric X/Y');
    }
  };

  return (
    <div className="overlay-manager">
      <input placeholder="Text" value={text} onChange={e => setText(e.target.value)} />
      <input type="number" placeholder="X" value={x} onChange={e => setX(e.target.value)} />
      <input type="number" placeholder="Y" value={y} onChange={e => setY(e.target.value)} />
      <button onClick={handleAdd}>Add Overlay</button>

      <ul className="overlay-list">
        {overlays.map((o, i) => (
          <li key={i}>
            {o.text} ({o.x},{o.y})
            <button onClick={() => deleteOverlay(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayManager;
