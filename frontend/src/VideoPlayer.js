import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ url, overlays }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      fluid: true,
      sources: [{ src: url, type: 'application/x-mpegURL' }]
    });

    return () => player.dispose();
  }, [url]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <video ref={videoRef} className="video-js vjs-big-play-centered"></video>

      {overlays.map((o, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${o.y}px`,
            left: `${o.x}px`,
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '2px 5px',
            borderRadius: '4px',
            pointerEvents: 'none'
          }}
        >
          {o.text}
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
