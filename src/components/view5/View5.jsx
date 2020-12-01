import React, { useEffect, useContext } from 'react';
import './view5.css';
import { themes, useTheme, ThemeContext } from '../../config/themes';

const View5 = () => {

    useEffect(() => {
        console.log("View 5 updated.");
    })

    /** 
     * Context consumer
     * Permet d'accèder à la référence du contexte depuis ce composant
     */
    const contextTheme = useContext(ThemeContext);

    const handleConsole = () => {
        console.log(contextTheme);
    }

    const handleSwitch = () => {
        (contextTheme.theme === 'dark') ? contextTheme.setTheme('light') : contextTheme.setTheme('dark');
    }

    return (
        <div className="view5">
        {/* <div className="view5" style={{color: useTheme(contextTheme.theme, 1), backgroundColor: useTheme(contextTheme.theme, 0)}}> */}
            <h4>View 5</h4>
            {/* <input type="submit" value="Log context" onClick={() => handleConsole()} /> */}
            {/* <input type="submit" value="Switch theme" onClick={() => handleSwitch()} /> */}
        </div>
    )
};

export { View5 };