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
    const { tabState, settabState } = useState("Topic")

    const tabMenu = () => {
        if (tabState == "Topic") {
            return (<Results />)
        } else if (tabState === "Messages") {
            return (<div></div>);
        } else if (tabState === "Steps") {
            return (<div></div>);
        }

    }
  

    

    return (
        <div>
            {loginState === false ?
                <Login setLoginState={setLoginState}/>
                : <div><Tab setLoginState={setLoginState} tabMenu={tabMenu}/><Search setResultsState={setResultsState}/><Results resultsState={resultsState}/><AddToDatabase/></div>
            }
            

        </div>
    );
}

export default App;
