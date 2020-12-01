import React, { useEffect } from 'react';
import { View2 } from '..';
import './view1.css';

const View1 = (props) => {

    useEffect(() => {
        console.log("View 1 updated.");
    })

    return (
        <div className="view1" style={{color: props.color, backgroundColor: props.backgroundColor, border: '1px solid ' + props.color}}>
            <h2>{(props.theme !== undefined) ? props.theme : "View 1"}</h2>
            <View2 />
            {/* <View2 color={props.color} backgroundColor={props.backgroundColor} /> */}
        </div>
    )
};

export { View1 };