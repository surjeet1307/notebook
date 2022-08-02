import { useState } from "react";
import Notecontext from "./Notecontext";

const host='http://localhost:5000'
let Notestate=(props)=>{
    let UserNote=[]
    

       let [state,setState]=useState(UserNote)
       let [enote,seteNote]=useState({})
      
        //get notes from database
        let getNotes=async ()=>{
            const response=await fetch(`${host}/api/note/fetchnotes`,{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6IjYyZGI5NGQ1ZGFkM2NiNDNmNmRiMDZjNCJ9LCJpYXQiOjE2NTg1NTc2NzF9.sm4FB_lt3aPTkoo3BnUEL_UhhkIkStLJQay-0qEI9Fg'
                  },

            })
            let json=await response.json();
            
            setState(json)
        }

     //add notes function
    let addnotes=async (title,description,tag)=>{
        const response = await fetch(`${host}/api/note/addnotes`, {
            method: 'POST', 
            
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6IjYyZGI5NGQ1ZGFkM2NiNDNmNmRiMDZjNCJ9LCJpYXQiOjE2NTg1NTc2NzF9.sm4FB_lt3aPTkoo3BnUEL_UhhkIkStLJQay-0qEI9Fg'
            },
            body: JSON.stringify({title,description,tag}) 
          });
          const res=await response.json(); 
          
         if(!res.errors){

             let note={
               "_id": "62e3699e8b14dcfd6b2e46d9",
                   "user": "62db94d5dad3cb43f6db06c4",
                   "title": title,
                   "description": description,
                   "tag": tag,
                   "date": "2022-07-29T05:01:18.743Z",
                   "__v": 0
             }
             
             setState(state.concat(note))
         }else {
           alert("Invalid value")
         }
    }
     // delete notes function
    let deletenotes=async (id)=>{
        const response=await fetch(`${host}/api/note/delete/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6IjYyZGI5NGQ1ZGFkM2NiNDNmNmRiMDZjNCJ9LCJpYXQiOjE2NTg1NTc2NzF9.sm4FB_lt3aPTkoo3BnUEL_UhhkIkStLJQay-0qEI9Fg'
              },

        })


         let newNotes=state.filter((note)=>{
            return note._id!==id
         })
         setState(newNotes)
    }
    // update function
    let updatenotes=async (id,title,description,tag)=>{
        //api call
            const response = await fetch(`${host}/api/note/update/${id}`, {
              method: 'PATCH', 
              
              headers: {
                'Content-Type': 'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6IjYyZGI5NGQ1ZGFkM2NiNDNmNmRiMDZjNCJ9LCJpYXQiOjE2NTg1NTc2NzF9.sm4FB_lt3aPTkoo3BnUEL_UhhkIkStLJQay-0qEI9Fg'
              },
              body: JSON.stringify({title,description,tag}) 
            });
            const res= response.json(); 
       
        //logic to edit notes
       for(let index=0;index<state.length;index++){
        let ele=state[index]
        if(ele._id===id){
           state[index].title=title;
           state[index].description=description;
           state[index].tag=tag;
           break;
        }
       }
         setState(state)
         
    }
    return (
        <Notecontext.Provider value={{state,enote,addnotes,deletenotes,updatenotes,getNotes,seteNote}}>
        {props.children}
        </Notecontext.Provider>
    )
}
export default Notestate