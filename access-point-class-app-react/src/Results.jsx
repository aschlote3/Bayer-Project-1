import React from "react";
import "./Resultsstyle.css";


const Results = (results) => {


    const getResultsMapping = (results) => {
        return (
            <h4>Future Results</h4>
        )
    }

    return (
        <div className="resultsContainer">
        <h3>Results:</h3>
        {getResultsMapping(results)}
        </div>
    );
}

export default Results;