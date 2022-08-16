import React, { useState, useEffect } from 'react';

const Results = () => {


    const [resultsState, setResultsState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8090/api/topic/all')
            .then(response => response.json())
            .then(data => {
                setResultsState(data);
            })
    }, []);


    const getResultsMapping = (results) => {
        return (
            results.map(result =>
                <div>
                    {result.result}
                </div>
            )
        )

    }

    return (
        <div>
            <h3>Results:</h3>
            {getResultsMapping(resultsState)}
        </div>
    );
}

export default Results;