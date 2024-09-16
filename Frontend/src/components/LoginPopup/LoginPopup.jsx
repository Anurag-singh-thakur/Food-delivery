import React, { useContext,  useState } from 'react'
import './LoginPopup.css'
import axios from 'axios'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
const LoginPopUp = ({ setShowLogin }) => {
  const { url , setToken} = useContext(StoreContext);
  const [currentState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;

    const value = event.target.value;
    //console.log(`Input changed: ${name} = ${value}`); // Debug statement
    setData(data => ({ ...data, [name]: value }))
  }



  const onLogin = async (event) => {
      event.preventDefault();
      let newUrl = url; 
      if (currentState === "Login") {
        newUrl += "/api/user/login";
      } else {
        newUrl += "/api/user/register";
      }
      const response = await axios.post(newUrl , data);
      if(response.data.success){
        setToken(response.data.token);
        
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      }
      else{
        alert(response.data.message);
      }

  }
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name ' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email ' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password ' required />
        </div>
        <button type='submit'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login"
          ? <p>Create a new account ? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
        }
      </form>
    </div>
  )
}
export default LoginPopUp