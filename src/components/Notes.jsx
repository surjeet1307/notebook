import React,{useContext, useEffect} from 'react'
import Notecontext from '../context/notes/Notecontext'
import Noteitem from './Noteitem'
function Notes() {
  
    let {state,getNotes} = useContext(Notecontext)
   useEffect(()=>{
    getNotes()
    
   },[])
  return (
    <div className='mt-3'>
    <h2>Your Notes</h2>
    <div className='row my-3'>{
        state.map((note)=>{
            return <Noteitem note={note} key={note._id}/>
        })
    }
    
    </div>

  </div>
  )
}

export default Notes