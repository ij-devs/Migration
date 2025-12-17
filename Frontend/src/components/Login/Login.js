// Making a Login Component basic
import {  useState } from "react";
import "./Login.css"
import {login} from "../../services/loginservice.js"
import { useNavigate } from "react-router-dom";


function Login(){
    
    const [empCode, setEmpCode] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const [messageColor, setMessageColor] = useState("red");
const navigate = useNavigate();


const handleLogin = async ()=>{
  setMessage("");
 setMessageColor("red");

        try{
             const user = await login(empCode,password);

             if(user.isSuccess){
              setMessage("User logged in Succesfully");
             setMessageColor("green");
             localStorage.setItem("token",user.token);
              navigate("/targetting");
             }
            else {
      // 👈 THIS else is required
      setMessage(user.message);
      setMessageColor("red");
    }
             
          }
        catch(error){
              setMessage(error.message);
    setMessageColor("red");
        }         
};

    return (
    <div className="login-page">
        <div className="login-card">

          <div className="login-container">
            <img src="images/logo.jpg" alt="logo" className="logo"></img>
          </div>
           
           <h2 className="title">Member Login</h2>
            
            <div className="input-group">
                <span className="icon"><i className="fas fa-user"></i></span>
                <input type="text" className="input-field" placeholder="Enter Employee Code"
                value={empCode} onChange={ (e)=>setEmpCode(e.target.value)}
                ></input>
            </div>

            <div className="input-group">
                <span className="icon"><i className="fas fa-key"></i></span>
                <input type="password" className="input-field" placeholder="Enter your Password"
                value={password} onChange={ (e)=>setPassword(e.target.value)}
                ></input>
            </div>
 

            <div className="remember">
                <input type="checkbox" />
                <label>Remember me</label>
            </div>


             <button className="login-btn"
              onClick={handleLogin}
             > Login</button>

            <div className="message-area">
               <h5 style={{color:messageColor}}>{message}</h5>
            </div>
                
        </div>
        <p className="version">v2.4.5.14</p>

    </div>
    );
}

export default Login;