import Login from './Login';

import Tab from './Tab';
import React, { useState, setState } from 'react';



function App() {
    const [loginState, setLoginState] = useState(false);

    
    const sendRequest = (data) => {
        fetch("http://localhost:8090/api/keywords", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => {
            console.log("Request complete! response:", res);
        });
    }
    return (
        <div>
            <div>
                {loginState === false ?
                    <Login setLoginState={setLoginState} />
                    : <div><Tab setLoginState={setLoginState}/></div>
                }
            </div>
        </div>
    );
}

export default App;
