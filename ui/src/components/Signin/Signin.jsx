import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './index.css'
import validation from './signInValidation'; 
import loginImg from '../../assets/loginImg.png'


const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    
    if(validationErrors.email === "" && validationErrors.password === ""){
      axios.post('http://localhost:8081/login', values)
      .then((res) => {
        if(res.data === "success"){
          navigate('/home')
        } else {
          navigate('/notfound')
        }
      })
      .catch((err) => console.log(err))
    }
  }

  return (
    <div className="login-section" >
      <div className="login-container">
         <form className="form-container" action="" onSubmit={onHandleSubmit}>
           <h1 className='sign-in-heading'>Sign In</h1>
           <div className='email-container'>
              <label className='email-text' htmlFor="email">Email</label>
              <input 
                className='email-input' 
                type="email" 
                placeholder='Enter Email' 
                value={values.email}
                onChange={handleInput}
                name="email"
              />
              {errors.email && <span className='text-red-500'>{errors.email}</span>}
           </div>

           <div className='password-container'>
              <label className='password-text' htmlFor='password'>Password</label>
              <input 
                className='password-input'  
                type="password" 
                placeholder='Enter Password' 
                value={values.password}
                onChange={handleInput}
                name="password"
              />
               {errors.password && <span className='text-red-500'>{errors.password}</span>}
           </div>
           <div className='btn-container'>
              <button type="submit" className='login-btn'>Login</button>
              <Link to="/signup">
                <button className='signup-btn' type="button">Sign Up?</button>
              </Link>
           </div>
         </form>
         <img className='login-img' src={loginImg} alt="login-img"/>
      </div>
    </div>
  )
}

export default Signin
