import React, {Component} from "react"

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';


import "../index.css"

const linkStyle ={
    color: "blue"

}

const signupContainer = {
    fontFamily: " 'Poppins', sans-serif",
    marginBottom: "30px"
}

function Signup(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")



    function onChangeName(e){
        setName(e.target.value)
    };

    function onChangeEmail(e){
        setEmail(e.target.value)
    }

    function onChangePassword(e){
        setPassword(e.target.value)
    }

    function onChangeConfirmPassword(e){
        setConfirmPassword(e.target.value)
    }

    function onSubmit(e){

    }


    return(
        <div style={signupContainer} className="signup-container">
            <div className="signup-text-container">
                <br />
                <h3>Silicon verse</h3>

                <h2>Let's Get Started</h2>
            </div>
            <div className="signup-form-container">
                <form onSubmit> <br />
                    <h2>Get Started <hr /> </h2>
                    <input name="name" type="text" value={name} onChange={onChangeName} placeholder="Name" /><FontAwesomeIcon icon={faUser} className="icon" /> <br /><br />
                    <input name="email" type="email" value={email} onChange={onChangeEmail} placeholder="Email" /><FontAwesomeIcon icon={faEnvelope} className="icon" /> <br /><br />
                    <input name="password" type="text" value={password} onChange={onChangePassword} placeholder="Password" /><FontAwesomeIcon icon={faLock} className="icon" /> <br /><br />
                    <input name="re-enter-password" type="text" value={confirmPassword} onChange={onChangeConfirmPassword} placeholder="Re-enter password" /><FontAwesomeIcon icon={faLock} className="icon" /> <br />
                    <button type="submit">Sign up</button> <br />
                    <p>Already have an account?<a style={linkStyle} href="/login">Login</a></p>
                </form> 
            </div>
        </div>
    )
}

export default Signup;