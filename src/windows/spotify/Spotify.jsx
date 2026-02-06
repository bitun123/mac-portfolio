import React from "react";
import MacWindow from "../MacWindow";
function Spotify({ windowName, windowsState, setWindowsState }) {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
      width="30vw"
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLiRSasKsNU9?utm_source=generator"
          width="100%"
          height="800"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
}

export default Spotify;
