import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import errorImg from '../../assets/errorImg.png'


const NotFound = () => {
  return (
    <div className='error-container'>
        <img className='error-img' src={errorImg} alt="notfound"/>
        <div className='btn-container'>
              <Link to="/">
                <button type="submit" className='login-btn'>Login</button>
              </Link>
              
              <Link to="/signup">
              <button className='signup-btn' type="button">Sign Up?</button>
              </Link>
           </div>
    </div>
  )
}

export default NotFound