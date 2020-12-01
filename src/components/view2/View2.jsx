import React, { useEffect } from 'react';
import { View3 } from '..';
import './view2.css';

const View2 = (props) => {

    useEffect(() => {
        console.log("View 2 updated.");
    })

    return (
        <div className="view2" style={{color: props.color, backgroundColor: props.backgroundColor, border: '1px solid ' + props.color}}>
            <h2>{(props.theme !== undefined) ? props.theme : "View 2"}</h2>
            <View3 />
        </div>
    )
};

export { View2 };