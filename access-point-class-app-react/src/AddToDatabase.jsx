import React, {useState, useEffect} from "react";
import "./AddToDatabasestyle.css"


const AddToDatabase = () => {

    const [input, setInput] = useState ("");

    const data = {
        keyword : input,
        };

     const sendRequest = (data) => {
            fetch("http://localhost:8090/api/keywords", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then(res => {
                console.log("Request complete! response:", res);
            });
        }
    return (
        <div className="topicsContainer">
            <label for="keyword">Add To Topics</label><br></br>
            <input type="text" id="keyword" name="keyword"/><br></br>
            <button onClick={() => setInput("keyword")}>Add To Topics</button>
            <button>Clear</button>
            <br></br>
            
        </div>
    )


}

export default AddToDatabase;