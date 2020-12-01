import React, { useEffect } from 'react';
import './random.css';
import { useRandom } from '../../hooks/useRandom';

const Random = (props) => {

    useEffect(() => {
        console.log("Random updated.");
    })


    /** Custom hook */
    const random1 = useRandom(10);
    // const random2 = useRandom(10);

    return (
        <div className="random">
            <h4>Random1: {random1}</h4>
            {/* <h4>Random2: {random2}</h4> */}
        </div>
    )
};

export { Random };