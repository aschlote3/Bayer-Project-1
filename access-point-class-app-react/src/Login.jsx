import React from "react";
import "./Loginstyle.css";


const Login = () => {

    return (
        <div className="loginContainer">
            <h1>Access Point Class of 2022</h1>
            <h3>Let's Go Get It!</h3><br></br>
            <label for="username">Username</label><br></br>
            <input type="text" id="username" name="username" className="username"/><br></br>
            <label for="password">Password</label><br></br>
            <input type="text" id="password" name="password"/><br></br>
            <button className="loginProceed">Login</button>
            <button className="clearName">Clear</button>
        </div>
    );
}

export default Login;   