import React from "react";


const Login = (setLoginState) => {

    return (
        <div>
            <h1>Access Point Class of 2022</h1>
            <h3>Let's Go Get It</h3><br></br>
            <label for="username">Username</label><br></br>
            <input type="text" id="username" name="username"/><br></br>
            <label for="password">Password</label><br></br>
            <input type="text" id="password" name="password"/><br></br>
            <button onClick={() => setLoginState(true)}>Login</button><br></br>
            <button>Clear</button>
        </div>
    );
}

export default Login;