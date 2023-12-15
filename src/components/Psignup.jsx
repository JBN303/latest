import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Psignup = () => {
    const [inputs, setInputs] = useState({
        "Name": '',
        "Address": '',
        "Phone": '',
        "Email": '',
        "Age": '',
        "Gender": '',
        "Username": '',
        "Password": '',
      });
    
      const navigate = useNavigate();
    
      const InputHandler = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        console.log(inputs);
      };
    
      const SaveData = () => {
        axios.post("http://localhost:4005/dnew", inputs)
          .then((response) => {
            alert("Record Saved");
          })
          .catch((err) => console.log(err));
        // navigate('/studentview')
      };
  return (
    
<center>
      <div className="container" style={{ animation: 'transitionIn-X 0.5s' }} >
        
        
        <table border="0" className="table">
          <tbody>
          <tr>
              <td colSpan="2">
                <p className="header-text">Let's Get Started</p>
                <p className="sub-text">It's Okey, Now Create User's Account.</p>
              </td>
            </tr>
            
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Name: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="pname" className="input-text" placeholder="mr"  onChange={InputHandler }  value={inputs.pname} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Address: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="paddress" className="input-text" placeholder="ex: "  onChange={InputHandler }  value={inputs.paddress} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Phone: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="pphone" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.pphone} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Email: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="pemail" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler }  value={inputs.pemail} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">AGE: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="page" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler }  value={inputs.page} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Gender: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="pgender" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler }  value={inputs.pgender} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Username: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="email" name="pusername" className="input-text" placeholder="ex: 123@gmail.com"  onChange={InputHandler }  value={inputs.username} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Password: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="password" name="ppassword" className="input-text" placeholder="ex: 9712345678"  onChange={InputHandler } value={inputs.ppassword} />
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
v
</tbody>
</table>
    </div>
    </center>
  )
}

export default Psignup