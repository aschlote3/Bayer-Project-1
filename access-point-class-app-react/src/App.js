import logo from './logo.svg';
import Login from './Login';
import Search from './Search';
import Results from './Results';
import React, { useState, setState } from 'react';



function App() {

    const [loginState, setLoginState] = useState(false);

    return (
        <div>
            {loginState === false ?
                <Login setLoginState={setLoginState} />
                : <Search />
            }
            <Results />
        </div>
    );
}

export default App;
