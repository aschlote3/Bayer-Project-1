import React, { useState } from "react"
import Search from './Search';
import Results from './Results';
import AddToDatabase from './AddToDatabase';

const Tab = ({ setLoginState }) => {

    const [resultsState, setResultsState] = useState([]);
    const [tabState, setTabState] = useState("Topic");
    console.log(tabState);

    return (
        <div>
            <button onClick={() => {setTabState("Topic")}}>Topic</button>
            <button onClick={() => {setTabState("Messages")}}>Messages</button>
            <button onClick={() => {setTabState("Steps")}}>Steps</button>
            <button onClick={() => { setLoginState(false) }}>Back</button>
            {tabState === "Topic" ? <div><Search setResultsState={setResultsState}/><Results resultsState={resultsState}/><AddToDatabase/></div> :
            tabState === "Messages" ? <div><h1>Messages</h1><br></br><h2>In construction...</h2></div> :
            tabState === "Steps" ? <div><h1>Steps</h1><br></br><h2>In construction...</h2></div> :
            null
            }
        </div>
    )
}

export default Tab;