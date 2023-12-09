
import React, { useState } from 'react';
import './animations.css';
import './main.css';
import './login.css';

const Login = () => {

  return (
       <div className="container">
      <form onSubmit={handleSubmit} >
        
        <p className="header-text">Welcome Back!</p>
        <p className="sub-text">Login with your details to continue</p>
        <label htmlFor="useremail" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="useremail"
          className="input-text"
          placeholder="Email Address"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <label htmlFor="userpassword" className="form-label">
          Password:
        </label>
        <input
          type="password"
          name="userpassword"
          className="input-text"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        {error && <label className="form-label" style={{ color: 'rgb(255, 62, 62)', textAlign: 'center' }}>{error}</label>}
        <input type="submit" value="Login" className="login-btn btn-primary btn" />
        <p className="sub-text" style={{ fontWeight: '280' }}>
          Don't have an account? <a href="Signup" className="hover-link1 non-style-link">Sign Up</a>
        </p>
      </form>
    </div>
  )
}

export default Login
