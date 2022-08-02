import React, { useEffect } from 'react'
import AddNotes from './AddNotes'
import Alert from './Alert'
import Notes from './Notes'

function Home() {

  return (
    <>
    
    <Alert message={'Hello From website'}/>
    <div className='container'>
      
      
        <AddNotes/>
        <Notes/>
      
    </div>
    </>
  )
}

export default Home