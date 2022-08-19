import React from "react"
import { useState } from "react";
import AddToDatabase from "./AddToDatabase";
import Results from "./Results";
import Search from "./Search";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function TextButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button>Topics</Button>
            <Button disabled>Messages</Button>
            <Button href="#text-buttons">Step</Button>
        </Stack>
    );
}

const Tab = ({ setLoginState }) => {

    const [resultsState, setResultsState] = useState([]);
    const [tabState, setTabState] = useState("Topic");
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button onClick={() => { setTabState("Topic") }}>Topics</Button>
                <Button onClick={() => { setTabState("Messages") }}>Messages</Button>
                <Button onClick={() => { setTabState("Steps") }} href="#text-buttons">Step</Button>
                <Button onClick={() => { setLoginState(false) }}>Back</Button>
            </Stack>

            {tabState === "Topic" ? <div><Search setResultsState={setResultsState} /><Results resultsState={resultsState} /><AddToDatabase /></div> :
                tabState === "Messages" ? <div><h1>Messages</h1><br></br><h2>In construction...</h2></div> :
                    tabState === "Steps" ? <div><h1>Steps</h1><br></br><h2>In construction...</h2></div> :
                        null
            }

        </div >


    )
}

export default Tab;