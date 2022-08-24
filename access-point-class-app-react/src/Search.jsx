import React, { useState } from "react";

import "./Searchstyle.css"

const Search = ({ setResultsState, resultsState }) => {

    const [searchState, setSearchState] = useState(null);

    const getRequest = () => {
        fetch(`http://localhost:8090/api/topic/${searchState}`)
            .then(response => response.json())
            .then(data => {
                setResultsState(data);
            })
    }
    const getAllKeywords = () => {
        fetch(`http://localhost:8090/api/keywords/all`)
            .then(response => response.json())
            .then(data => {
                setResultsState(data);
            })
    }


    return (

        <div className="keyContainer">
            <label for="keywords">Keywords: </label>
            <input type="text" id="keywords" name="keywords" onInput={e => setSearchState(e.target.value)} />

            <button onClick={() => { getRequest() }}>Search</button>
            <button onClick={() => { getAllKeywords() }}>View All</button>
        </div>
    );
}

export default Search;