import React from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
// import MacWindow from './windows/MacWindow'
import Github from "./windows/github/Github";
import Note from "./windows/note/Note";
import Resume from "./windows/resume/Resume";
import Spotify from "./windows/spotify/Spotify";
import Cli from "./windows/terminal/Cli";
import FloatingLines from "./FloatingLines";

function App() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <main style={{ position: "relative", zIndex: 1 }}>
        {" "}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
        <Nav />
        <Dock />
        <Github />
        <Note />
        <Resume />
        <Spotify />
        <Cli />
      </main>
    </div>
  );
}

export default App;
