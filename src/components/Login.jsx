import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Login() {

  let [data, setData] = useState({ email: '', password: '' })
  let history = useNavigate()
  let handler = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ email: data.email, password: data.password })
    });
    let res = await response.json()
    
    if (!res.suc) {
      alert("Enter valid email or passowrd")
    } else {
      console.log(res.token);
      localStorage.setItem('token', res.token)
      history('/')
    }
  }
  let change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <div className='container d-flex flex-row justify-content-around mt-5'>
      <img src='https://publictrainingcenters.com/img/login-img.png' className="img-fluid w-25" alt="..."></img>
      <form onSubmit={handler}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={change} value={data.email} />

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={change} value={data.password} />
        </div>

        <button type="submit" className="btn btn-primary mx-1" >Login</button>
        <Link to='/signup' className="btn btn-primary mx-1">Sign Up</Link>
      </form>
    </div>
  )
}

export default Login