import React from 'react'
import"./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
// import MacWindow from './windows/MacWindow'
import Github from './windows/github/Github'
import Note from './windows/note/Note'
import Resume from './windows/resume/Resume'
import Spotify from './windows/spotify/Spotify'
import Terminal from 'react-console-emulator'
import Cli from './windows/terminal/Cli'

// import RepoModels from './windows/RepoModels'
function App() {
  return (
<main>
  <Nav/>
  <Dock/>
<Github/>
<Note/>
<Resume/>
<Spotify/>
<Cli/>
  {/* <RepoModels/> */}
</main>
  )
}

export default App