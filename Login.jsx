import React from "react"

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import "../index.css"


const signupLink ={
    color: "blue"
}

const formContainer = {
    marginTop: "70px",
}

const loginContainer = {
    fontFamily: "'Poppins', sans-serif "
}

function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onChangeEmail(e){
        setEmail(e.target.value)
    }

    function onChangePassword(e){
        setPassword(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
    }





    return(
        <div style={loginContainer} className="signup-container">
            <div className="signup-text-container">
                <br />
                <h3>Silicon verse</h3>

                <h2>Let's Get Started</h2>
            </div>
            <div style={formContainer} className="login-form-container">
                <form> <br />
                    <h2> Welcome Back <hr /></h2><br />
                    <input name="email" type="email" value={email} onChange={onChangeEmail} placeholder="Email" /><FontAwesomeIcon icon={faEnvelope} className="icon" /> <br /> <br />
                    <input name="password" type="password" value={password} onChange={onChangePassword} placeholder="Password" /><FontAwesomeIcon icon={faLock} className="icon" /> <br /><br />
                    <button type="submit" name="submitBtn">Login</button> <br />
                    <div>
                        <p>Don't have an account? <a style={signupLink} href="/signup">Sign up</a></p>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default Login;