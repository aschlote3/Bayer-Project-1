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

const Tab = ({ setLoginState, tabMenu }) => {

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button>Topics</Button>
                <Button>Messages</Button>
                <Button href="#text-buttons">Step</Button>
                <Button onClick={() => { setLoginState(false) }}>Back</Button>
            </Stack>

            <div>{tabMenu()}</div>

        </div >

    )

}

export default Tab;