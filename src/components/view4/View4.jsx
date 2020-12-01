import React, { useEffect } from 'react';
import { View5 } from '..';
import './view4.css';

const View4 = (props) => {

    useEffect(() => {
        console.log("View 4 updated.");
    })

    return (
        <div className="view4">
            <h2>{(props.theme !== undefined) ? props.theme : "View 4"}</h2>
            <View5 />
        </div>
    )
};

export { View4 };