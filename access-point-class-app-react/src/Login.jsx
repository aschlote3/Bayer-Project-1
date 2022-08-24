import React, { useState } from "react";
import "./Loginstyle.css";

const Login = ({ setLoginState }) => {

    const user = "username";
    const pass = "password";
    const [userState, setUserState] = useState(null);
    const [passState, setPassState] = useState(null);

    const checkCredentials = () => {
        if (userState !== user && passState !== pass) {
            alert("login fail : invalid username and password")
            return false;
        } else if (userState !== user) {
            alert("login fail : invalid username");
            return false;
        } else if (passState !== pass) {
            alert("login fail : invalid password");
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
            <img src="https://www.pngitem.com/pimgs/m/256-2564932_bayer-logo-png-transparent-png.png" width="200" height="200"></img>
            <h1>Access Point Class of 2022</h1>
            <h3>Let's Go Get It</h3>
            <label for="username">Username</label><br></br>
            <input autocomplete="on" type="text" id="username" name="username" className="username" onInput={e => setUserState(e.target.value)} value={userState} /><br></br>
            <label for="password">Password</label><br></br>
            <input autocomplete="on" type="password" id="password" name="password" onInput={e => setPassState(e.target.value)} value={passState} /><br></br>
            <button className="loginProceed" onClick={() => doLogin()}>Login</button>
            <button className="clearName" type="submit" onClick={() => { clear() }}>Clear</button>
        </div>
    );
}

export default Login;
