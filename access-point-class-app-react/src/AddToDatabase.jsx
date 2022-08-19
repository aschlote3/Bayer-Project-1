import React, {useState, useEffect} from "react";
import "./AddToDatabasestyle.css"


const AddToDatabase = () => {

    const [input, setInput] = useState (null);

    const keyword = {
        keyword : input
        };

     const clear = () => {
        setInput('');
        }

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
        <div className="topicsContainer">
            <label for="keyword">Add To Topics</label><br></br>
            <input type="text" id="keyword" name="keyword" value={input} onInput={e => setInput(e.target.value)}/><br></br>
            <button className="clearName" onClick={() => sendRequest(keyword)}>Add To Topics</button>
            <button className="clearName" type="submit" onClick={()=>{clear()}}>Clear</button>
            <br></br>
            
        </div>
    )


}

export default AddToDatabase;