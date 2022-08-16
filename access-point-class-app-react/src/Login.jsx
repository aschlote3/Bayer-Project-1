import React, { useState } from "react";


const Login = ({ setLoginState }) => {

    const user = "username";
    const pass = "password";
    const [userState, setUserState] = useState(null);
    const [passState, setPassState] = useState(null);

    const checkCredentials = () => {
        if (userState != user && passState != pass) {
            console.log("login fail : invalid username and password")
            return false;
        } else if (userState != user) {
            console.log("login fail : invalid username");
            return false;
        } else if (passState != pass) {
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

    return (
        <div>
            <h1>Access Point Class of 2022</h1>
            <h3>Let's Go Get It</h3><br></br>
            <label for="username">Username</label><br></br>
            <input type="text" id="username" name="username" onInput={e => setUserState(e.target.value)} /><br></br>
            <label for="password">Password</label><br></br>
            <input type="text" id="password" name="password" onInput={e => setPassState(e.target.value)} /><br></br>
            <button onClick={() => doLogin()}>Login</button><br></br>
            <button>Clear</button>
        </div>
    );
}

export default Login;