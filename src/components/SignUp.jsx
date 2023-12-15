import React, { useState } from 'react';
import './animations.css';
import './main.css';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignUp() {

  var [inputs,setInputs] = useState({
    "uid":'',
    "name":'',
    "age":'',
    "spec":'',
    "edu":'',
    "email":'',
    "phn":'',
    "pass":'',

    })

   const navigate = useNavigate();

  const InputHandler = (event) => {
    const {name,value} = event.target
    setInputs((inputs) => ({...inputs,[name]:value}))
    console.log(inputs)
  }

  const SaveData = () => {
    axios.post("http://localhost:4005/dnew",inputs)
    .then((response) => {alert("Record Saved")} )
    .catch(err=>console.log(err))
    // navigate('/studentview')
  }

  return (
    <center>
      <div className="container" style={{ animation: 'transitionIn-X 0.5s' }} >
        
        
        <table border="0" className="table">
          <tbody>
          <tr>
              <td colSpan="2">
                <p className="header-text">Let's Get Started</p>
                <p className="sub-text">It's Okey, Now Create doctor's Account.</p>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">NMC UID: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="uid" className="input-text" placeholder="ex:1757"  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.uid} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">NAME: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="name" className="input-text" placeholder="DR."  onChange={InputHandler }  value={inputs.name}/>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">AGE: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="age" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.age} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">SPECIALTIES: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="spec" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler } pattern="[0]{1}[0-9]{9}"  value={inputs.spec}/>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">EDUCATION: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="edu" className="input-text" placeholder="MBBS,MD,..."  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.edu}/>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">experience: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="exp" className="input-text" placeholder="in years"  onChange={InputHandler }  value={inputs.exp}/>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">LANGUAGE: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="lang" className="input-text" placeholder="for communication"  onChange={InputHandler }  value={inputs.lang}/>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">LOCATION: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="name" className="input-text" placeholder="google map link"  onChange={InputHandler }  value={inputs.name}/>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">ABOUT YOU: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="textarea" name="name" className="input-text" placeholder="DR."  onChange={InputHandler }  value={inputs.name}/>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="email" className="form-label" >Email: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="email" name="email" className="input-text" placeholder="Email Address" value={inputs.email} onChange={InputHandler } required  />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Mobile Number: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="phn" className="input-text" placeholder="ex: 9712345678" value={inputs.phn} onChange={InputHandler } pattern="[0]{1}[0-9]{9}" />
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
                <label htmlFor="cpassword" className="form-label">Confirm Password: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="password" name="pass" className="input-text" placeholder="Confirm Password" value={inputs.pass} onChange={InputHandler }  required />
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
                <input type="submit" value="Sign Up" onClick={SaveData }  className="login-btn btn-primary btn" />
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
        
        
       
      </div>
      </center>
   
  );
}

export default SignUp;
