import React, { useState, useEffect } from 'react';

import "./Resultsstyle.css"

const Results = ({ resultsState }) => {

    const getResultsMapping = (results) => {
        return (
            results.map(result =>
                <tr>
                    {result.result}
                </tr>
            )
        )
    }
    return (
        <div className='resultsContainer'>
            <table>
                <tr>
                    <th>RESULTS</th>
                </tr>
                {getResultsMapping(resultsState)}
            </table>
        </div>
    );
}

export default Results;