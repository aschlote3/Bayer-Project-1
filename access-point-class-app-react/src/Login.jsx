import React, { useState } from "react";
import "./Loginstyle.css";

const Login = ({ setLoginState }) => {

    const user = "username";
    const pass = "password";
    const [userState, setUserState] = useState(null);
    const [passState, setPassState] = useState(null);


    const checkCredentials = () => {
        if (userState !== user && passState !== pass) {
            console.log("login fail : invalid username and password")
            return false;
        } else if (userState !== user) {
            console.log("login fail : invalid username");
            return false;
        } else if (passState !== pass) {
            console.log("login fail : invalid password");
            return false;
        } else {
            console.log("login success");
            return true;
        }
    }

    const doLogin = () => {
        setLoginState(checkCredentials());
    }
    const clear = () => {
        setUserState('');
        setPassState('');
    }

    return (
        <div className="loginContainer">
            <h1>Access Point Class of 2022</h1>
            <h3>Let's Go Get It</h3><br></br>
            <label for="username">Username</label><br></br>
            <input type="text" id="username" name="username" className="username" onInput={e => setUserState(e.target.value)} value={userState}/><br></br>
            <label for="password">Password</label><br></br>
            <input type="password" id="password" name="password" onInput={e => setPassState(e.target.value)} value={passState}/><br></br>
            <button className="loginProceed" onClick={() => doLogin()}>Login</button>
            <button className="clearName" type="submit" onClick={()=>{clear()}}>Clear</button>
        </div>
    );
}

export default Login;