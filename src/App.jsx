import { useState } from 'react'
import './App.css'
import teamMember from './components/TeamMemberCard'

const members = [
  {
    id:1,
    name:"Joe mama",
    job:"Software enginer"
  },
  {
    id:2,
    name:"Joe mama",
    job:"Software enginer"
  },
  {
    id:3,
    name:"Joe mama",
    job:"Software enginer"
  }
]

function App() {
  const member = members.map((a)=>{
    teamMember.a
  })
  return (
    <div>
      {/* {member} */}
      <p>
      Joe mama<br/>
      Software enginer<br/>
      </p>
      <p>
      Joe mama<br/>
      Software enginer<br/>
      </p>
    </div>    
  )
}

export default App
