import React, { useEffect } from 'react';
import './myComponent.css';
// import { useRandom } from '../../hooks/useRandom';

const MyComponent = (props) => {

    /** Let =/= variable d'état */
    let test = props.test;

    const handleLog = () => {
        console.log(test);
    }
    
    const handleTest = () => {
        test = "Youpla";
    }

    useEffect(() => {
        console.log("MyComponent updated.");
    })

    /** Un composant ne peut pas modifier ses props */
    // props.test = "Youpla";


    return (
        <div className="test">
            <h4>Props: {props.test}</h4>
            <h4>Test: {test}</h4>
            <input type="submit" value="Log test" onClick={handleLog} />
            <input type="submit" value="Change test to 'Youpla'" onClick={handleTest} />
        </div>
    )
};

export { MyComponent };