import React from 'react'
import"./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
// import MacWindow from './windows/MacWindow'
import Github from './windows/github/Github'
import Note from './windows/note/Note'

// import RepoModels from './windows/RepoModels'
function App() {
  return (
<main>
  <Nav/>
  <Dock/>
<Github/>
<Note/>
  {/* <RepoModels/> */}
</main>
  )
}

export default App