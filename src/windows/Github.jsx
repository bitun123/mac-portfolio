import React from 'react'
import MacWindow from './MacWindow'
import github from "../assets/github.json"
function Github() {

  return (
 <MacWindow>
<div className="cards">
    {
        github.map((e )=>{

        })
    }
</div>
 </MacWindow>
  )
}

export default Github