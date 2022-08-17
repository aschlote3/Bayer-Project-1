import React from "react"
import { useState } from "react";
import AddToDatabase from "./AddToDatabase";
import Results from "./Results";
import Search from "./Search";

const Tab = ({setLoginState, tabMenu}) => {
    
    return (
        <div>
            <button>Topic</button>
            <button>Messages</button>
            <button>Steps</button>
            <button onClick={() => {setLoginState(false)}}>Back</button>
            <div>{tabMenu()}</div>
        </div>
    )

}

export default Tab;