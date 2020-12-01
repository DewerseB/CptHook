import React, { useEffect } from 'react';
import { View4 } from '..';
import './view3.css';

const View3 = (props) => {

    useEffect(() => {
        console.log("View 3 updated.");
    })

    return (
        <div className="view3">
            <h2>{(props.theme !== undefined) ? props.theme : "View 3"}</h2>
            <View4 />
        </div>
    )
};

export { View3 };