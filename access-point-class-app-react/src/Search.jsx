import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';


const Search = ({setResultsState, resultsState}) => {

    const [searchState, setSearchState] = useState(null);

    const getRequest = () => {
        fetch(`http://localhost:8090/api/topic/${searchState}`)
            .then(response => response.json())
            .then(data => {
                setResultsState(data);
            })
    }

    const getAllRequest = () => {
        fetch(`http://localhost:8090/api/topic/all`)
            .then(response => response.json())
            .then(data => {
                setResultsState(data);
            })
    }

   var json_data = getAllRequest();
   console.log(json_data + "thing");
   var allRequests =[]
   for(var i in resultsState) {
    allRequests.push([i, resultsState [i]]);
   }
   console.log(json_data)
    return (
        <div>
            
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={allRequests}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Keywords" />}
            />
            <button onClick={() => {getRequest()}}>Search</button>
        </div>
    );
}

export default Search;