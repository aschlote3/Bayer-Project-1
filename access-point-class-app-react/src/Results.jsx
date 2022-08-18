import React, { useState, useEffect } from 'react';
import './ResultsStyle.css'

const Results = ({resultsState}) => {


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
        <div className='resultsContainer'>
            <h3>Results:</h3>
            {getResultsMapping(resultsState)}
        </div>
    );
}

export default Results;