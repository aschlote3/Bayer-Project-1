import logo from './logo.svg';
import Login from './Login';
import Search from './Search';
import Results from './Results';
import AddToDatabase from './AddToDatabase';
import Tab from './Tab';
import React, { useState, setState } from 'react';



function App() {

    

    const [loginState, setLoginState] = useState(false);
    
    
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
                : <div><Tab/><Search setResultsState={setResultsState}/><Results resultsState={resultsState}/><AddToDatabase/></div>
            }
            
            
            

        </div>
    );
}

export default App;
