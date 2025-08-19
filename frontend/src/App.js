import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import OverlayManager from './OverlayManager';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [overlays, setOverlays] = useState([]);

  // Load overlays from backend on page load
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/overlays')
      .then(res => setOverlays(res.data))
      .catch(err => console.log(err));
  }, []);

  const addOverlay = (overlay) => {
    axios.post('http://127.0.0.1:5000/overlays', overlay)
      .then(res => setOverlays([...overlays, overlay]))
      .catch(err => console.log(err));
  };

  const deleteOverlay = (index) => {
    axios.delete(`http://127.0.0.1:5000/overlays/${index}`)
      .then(res => {
        const newOverlays = overlays.filter((_, i) => i !== index);
        setOverlays(newOverlays);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h1>Livestream App</h1>
      <input
        type="text"
        placeholder="Enter HLS URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      {url && <div className="video-container">
        <VideoPlayer url={url} overlays={overlays} />
      </div>}
      <OverlayManager overlays={overlays} addOverlay={addOverlay} deleteOverlay={deleteOverlay} />
    </div>
  );
}

export default App;
