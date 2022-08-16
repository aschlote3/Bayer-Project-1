import React from "react";


const Search = () => {

    return (
        <div>
            <label for="keywords">Keywords</label><br></br>
            <input type="text" id="keywords" name="keywords"/><br></br>
            <button>Search</button>
        </div>
    );
}

export default Search;