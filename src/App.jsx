import React, { useState } from "react";
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
import Linkdin from "./windows/linkdin/Linkdin";
import Skills from "./windows/skills/Skills";

function App() {
  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    linkdin: false,
    skills: false,
  });
  return (
    <div className="hero">
      <main>
        {" "}
        <Nav setWindowsState={setwindowsState} />
        <div className="floatingLine">
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
        <Dock windowsState={windowsState} setWindowsState={setwindowsState} />
        {windowsState.github && (
          <Github
            windowName="github"
            windowsState={windowsState}
            setWindowsState={setwindowsState}
          />
        )}
        {windowsState.note && (
          <Note
            windowName="note"
            windowsState={windowsState}
            setWindowsState={setwindowsState}
          />
        )}
        {windowsState.resume && (
          <Resume
            windowName="resume"
            windowsState={windowsState}
            setWindowsState={setwindowsState}
          />
        )}
        {windowsState.skills && (
          <Skills
            windowName="skills"
            windowsState={windowsState}
            setWindowsState={setwindowsState}
          />
        )}
        {windowsState.spotify && (
          <Spotify
            windowName="spotify"
            windowsState={windowsState}
            setWindowsState={setwindowsState}
          />
        )}
        {windowsState.linkdin && (
          <Linkdin
            windowName="linkdin"
            windowsState={windowsState}
            setWindowsState={setwindowsState}
          />
        )}
        {windowsState.cli && (
          <Cli
            windowName="cli"
            windowsState={windowsState}
            setWindowsState={setwindowsState}
          />
        )}
      </main>
    </div>
  );
}

export default App;
