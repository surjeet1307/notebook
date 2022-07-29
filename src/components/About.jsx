import React,{useContext} from 'react'
import Notecontext from '../context/notes/Notecontext'


function About() {
    let a=useContext(Notecontext)
  return (
    <div>About {a.name} {a.class}</div>
  )
}

export default About