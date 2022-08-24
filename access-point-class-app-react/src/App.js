import Login from './Login';

import Tab from './Tab';
import React, { useState, setState } from 'react';



function App() {
    const [loginState, setLoginState] = useState(false);


    return (
        <div>
            <div>
                {loginState === false ?
                    <Login setLoginState={setLoginState} />
                    : <div><Tab setLoginState={setLoginState} /></div>
                }
            </div>

        </div>
    );
}

export default App;
