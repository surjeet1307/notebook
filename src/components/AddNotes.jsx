import React,{useContext, useState} from 'react'
import Notecontext from '../context/notes/Notecontext'

function AddNotes() {
  
   let context=useContext(Notecontext)
   let {addnotes}=context
    let [note,setNote]=useState({title:"",description:"",tag:"default"})
    let handleradd=(e)=>{
       e.preventDefault()
       addnotes(note.title,note.description,note.tag)
    }

    let change=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

  return (
    <div className='container'>
        <h2 className='text-center mt-2'>Add Notes</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder='Min 3 Length' onChange={change}/>
         
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description"  name='description' placeholder='Min 3 Length' onChange={change}/>
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag"  name='tag'  onChange={change}/>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={handleradd}>Add Note</button>
      </form>
    </div>
  )
}

export default AddNotes