import React,{useContext} from 'react'
import Notecontext from '../context/notes/Notecontext'
import Noteitem from './Noteitem'
function Notes() {
    let note = useContext(Notecontext)
  return (
    <div className='mt-3'>
    <h2>Your Notes</h2>
    <div className='row my-3'>{
        note.map((note)=>{
            return <Noteitem note={note}/>
        })
    }
    
    </div>

  </div>
  )
}

export default Notes