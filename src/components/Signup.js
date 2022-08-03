import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  let history=useNavigate()
  let [data,setData]=useState({name:"",email:"",password:""})

  let handler= async(e)=>{
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/createUser', {
        method: 'POST', 
        
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({name:data.name,email:data.email,password:data.password}) 
      });
      let res=await response.json()
      
      if(!res.suc){
       alert("Enter valid email or passowrd")
      }else{
        localStorage.setItem('token',res.token)
        history('/')
      }
  }

  let change=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div className='container mt-5'>
      <form onSubmit={handler}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={data.email} onChange={change}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' value={data.name} onChange={change}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={data.password} onChange={change}/>
  </div>
  <button type="submit" className="btn btn-primary">Sign Up</button>
</form>
    </div>
  )
}

export default Signup