import React from 'react'

function Noteitem(props) {
    let { note } = props
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <div className='d-flex flex-row-reverse'>
                        <i className="fa-solid fa-pen-to-square mx-1"></i>
                        <i className="fa-solid fa-trash-can mx-1"></i>
                    </div>
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{note.date}</h6>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>

        </div>
    )
}

export default Noteitem