import React, { useState, useEffect} from 'react';

const Results = () => {


    const [resultsState, setResultsState] = useState([]);

    const fetchResults = async () => {
        try {
            const response = await fetch(`localhost:8090/api/topic/all`);
            setResultsState(response);
        } catch (e) {
        }
    };

    const getResultsMapping = (results) => {
        return (
            results.map(result =>
                <div>
                    {result.result}
                </div>
            )
        )
        
    }
    useEffect(() => {
        fetchResults();
    }, []);

    return (
        <div>
            <h3>Results:</h3>
            {getResultsMapping(resultsState)}
        </div>
    );
}

export default Results;