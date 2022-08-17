import React, {useState, useEffect} from "react";


const AddToDatabase = () => {

    const [input, setInput] = useState ("");

    const update = {
        keyword : input,
        };
        
        const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
        };

        fetch('localhost:8090/api/keywords', options)
        .then(data => {
            if (!data.ok) {
              throw Error(data.status);
             }
             return data.json();
            }).then(update => {
            console.log(update);
            });
   

    return (
        <div>
            <label for="keyword">Add To Topics</label><br></br>
            <input type="text" id="keyword" name="keyword"/><br></br>
            <button onClick={() => setInput("keyword")}>Add To Topics</button>
            <button>Clear</button>
            <br></br>
            
        </div>
    )


}

export default AddToDatabase;