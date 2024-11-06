import React, { useState } from 'react'

import './index.css'

import signUpImg from '../../assets/signUpImg.png'

import axios from 'axios'

import validation from './signupValidation'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [values, setValues] = useState({
    name : '',
    email: '',
    password: '',
  });
  
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  const { email, password, name } = values;

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    if(errors.name === "" &&  errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/signup',values)
      .then((res)=>{
        navigate('/')
      })
      .catch((err)=>console.log(err))
    }
  }

  return (
    <div className="signup-section">
      <div className="signup-container">
        <form className="form-container" action="" onSubmit={onHandleSubmit}>
          <h1 className='signup-heading'>Sign Up</h1>

          <div className='email-container'>
            <label className='email-text' htmlFor="name">Name</label>
            <input 
              className='email-input' 
              type="text" 
              placeholder='Enter your name' 
              value={name}
              name="name"
              onChange={handleInput}
            />
             {errors.name && <span className='text-red-500'>{errors.name}</span>}
          </div>
          
          <div className='email-container'>
            <label className='email-text' htmlFor="email">Email</label>
            <input 
              className='email-input' 
              type="email" 
              placeholder='Enter Email' 
              value={email}
              name="email"
              onChange={handleInput}
            />
             {errors.email && <span className='text-red-500'>{errors.email}</span>}
          </div>
          <div className='password-container'>
            <label className='password-text' htmlFor='password'>Create Password</label>
            <input 
              className='password-input'  
              type="password" 
              placeholder='Enter Password' 
              value={password}
              name="password"
              onChange={handleInput}
            />
              {errors.password && <span className='text-red-500'>{errors.password}</span>}
          </div>
          <div className='btn-container'>
            <button className='signup-btn' type="submit">Sign Up</button>
          </div>
        </form>
        <img className='sign-up-img' src={signUpImg} alt="signup-img" />
      </div>
    </div>
  )
}

export default Signup
