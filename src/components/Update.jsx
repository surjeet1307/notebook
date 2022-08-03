import React, { useContext } from 'react'
import Notecontext from '../context/notes/Notecontext'
import {Link} from 'react-router-dom'

function Update() {
    let context=useContext(Notecontext)
    let {enote,updatenotes,seteNote}=context

    let handlerUpdate=()=>{
         updatenotes(enote._id,enote.title,enote.description,enote.tag)
         
         
    }
    let change=(e)=>{
        
        seteNote({...enote,[e.target.name]:e.target.value})
        
    }
  return (
    <div>
        <div className='container'>
        <h2 className='text-center mt-2'>Edit Notes</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder={enote.title} onChange={change}/>
         
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description"  name='description' placeholder={enote.description} onChange={change}/>
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag"  name='tag' placeholder={enote.tag} onChange={change} />
        </div>
        
        <Link to='/'><button type="submit" className="btn btn-primary" onClick={handlerUpdate}>Submit</button></Link>
      </form>
    </div>
    </div>
  )
}

export default Update