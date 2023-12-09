import React, { useState } from 'react';
import './animations.css';
import './main.css';
import './signup.css';

function SignUp() {

  const [formData, setFormData] = useState({
    email: '',
    phn: '',
    cpassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // Handle response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  return (
    
      <div className="container" style={{ animation: 'transitionIn-X 0.5s' }}>
        <form onSubmit={handleSubmit}>
        <table border="0" >
          <tbody>
          <tr>
              <td colSpan="2">
                <p className="header-text">Let's Get Started</p>
                <p className="sub-text">It's Okey, Now Create User Account.</p>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="email" className="form-label" >Email: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="email" name="email" className="input-text" placeholder="Email Address" onChange={handleInputChange} required />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Mobile Number: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="phn" className="input-text" placeholder="ex: 9712345678"  onChange={handleInputChange} pattern="[0]{1}[0-9]{9}" />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="newpassword" className="form-label">Create New Password: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="password" name="newpassword" className="input-text" placeholder="New Password" required />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="cpassword" className="form-label">Conform Password: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="password" name="cpassword" className="input-text" placeholder="Conform Password" onChange={handleInputChange}  required />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                {/* $error variable replacement */}
                {Error && <p>{Error}</p>}
              </td>
            </tr>
            <tr>
              <td>
                <input type="reset" value="Reset" className="login-btn btn-primary-soft btn" />
              </td>
              <td>
                <input type="submit" value="Sign Up" className="login-btn btn-primary btn" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <br />
                <label htmlFor="" className="sub-text" style={{ fontWeight: 280 }}>
                  Already have an account?
                  <a href="Login" className="hover-link1 non-style-link">
                    Login
                  </a>
                </label>
                <br /><br /><br />
              </td>
            </tr>
          </tbody>
        </table>
        </form>
      </div>
   
  );
}

export default SignUp;
