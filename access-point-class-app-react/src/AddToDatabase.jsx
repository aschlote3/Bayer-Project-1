import React, {useState, useEffect} from "react";


const AddToDatabase = () => {

    const [input, setInput] = useState (null);

    const keyword = {
        keyword : input
        };

     const sendRequest = (keyword) => {
            fetch("http://localhost:8090/api/keywords", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(keyword)
            }).then(res => {
                console.log("Request complete! response:", res);
                console.log(keyword);
            });
        }
    return (
        <div>
            <label for="keyword">Add To Topics</label><br></br>
            <input type="text" id="keyword" name="keyword" onInput={e => setInput(e.target.value)}/><br></br>
            <button onClick={() => sendRequest(keyword)}>Add To Topics</button>
            <button>Clear</button>
            <br></br>
            
        </div>
    )


}

export default AddToDatabase;