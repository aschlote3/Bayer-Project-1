import React, {useState} from "react";


const Search = ({setResultsState}) => {

    const [searchState, setSearchState] = useState(null);

    const getRequest = () => {
        fetch(`http://localhost:8090/api/topic/${searchState}`)
            .then(response => response.json())
            .then(data => {
                setResultsState(data);
            })
    }

    return (
        <div>
            <label for="keywords">Keywords</label><br></br>
            <input type="text" id="keywords" name="keywords" onInput={e => setSearchState(e.target.value)}/><br></br>
            <button onClick={() => {getRequest()}}>Search</button>
        </div>
    );
}

export default Search;