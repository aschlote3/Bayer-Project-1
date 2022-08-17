import logo from './logo.svg';
import Login from './Login';
import Search from './Search';
import Results from './Results';
import React, { useState, setState } from 'react';



function App() {

    const base = {
        'key_id':'2',
        'keyword':'lettuce'
    }

    const [loginState, setLoginState] = useState(false);
    const [additionState, setAdditionState] = useState(base);
    
    const [resultsState, setResultsState] = useState([]);

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
            {loginState === false ?
                <Login setLoginState={setLoginState}/>
                : <Search />
            }
            <Search setResultsState={setResultsState}/>
            <Results resultsState={resultsState}/>
        </div>
    );
}

export default App;
