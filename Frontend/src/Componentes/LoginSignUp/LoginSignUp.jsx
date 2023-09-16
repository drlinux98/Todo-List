import React, { useState } from "react";
import './LoginSignUP.css'
import email_icon from '../Assets/email.jpg'
import user_icon from '../Assets/user.jpg'
import password_icon from '../Assets/password.jpg'
const LoginSignUP =()=>{
const [action,setAction] =useState ("Login");


    return (
        <div className='container'>
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
            </div> 
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
               <img src={user_icon} alt=""/> 
               <input type="text"placeholder= "Nombre"/>
               </div> }
              
               <div className="inputs">
              <div className="input">
               <img src={email_icon} alt=""/> 
               <input type="email" placeholder="Mail"/>
               </div>    
            </div> 
            <div className="inputs">
              <div className="input">
               <img src={password_icon} alt=""/> 
               <input type="password" placeholder="Contraseña"/>
               </div>    
            </div> 
            {action=== "Sign up"?<div></div>: <div className="forgot-password">¿Olvidaste tu contraseña? <span>¡Hacé click aquí!</span></div> }
           
            <div className="submit-container">
             <div className={action==="Login"?"submit gray":"submit"}onClick={()=> {setAction("Sign Up")}}>Sign Up </div>
             <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=> {setAction("Login")}}>Login </div>
            
             </div>
            </div> 
        </div>
    );
     
};

export default LoginSignUP;