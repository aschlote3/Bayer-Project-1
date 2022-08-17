import React, { useState } from "react"

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