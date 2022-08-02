import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Notecontext from '../context/notes/Notecontext'
import Update from './Update'
function Noteitem(props) {
    let context=useContext(Notecontext)
    let {deletenotes,seteNote,state}=context
    let { note } = props
    let updateNote=(note)=>{
        seteNote(note)
    }
    useEffect(()=>{},[state])
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <div className='d-flex flex-row-reverse'>
                        <i className="fa-solid fa-trash-can mx-1" onClick={()=>{deletenotes(note._id)}}></i>
                      <Link to='./update'>  <i className="fa-solid fa-pen-to-square mx-1" onClick={()=>{updateNote(note)}}></i></Link>
                    </div>
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>

        </div>
    )
}

export default Noteitem