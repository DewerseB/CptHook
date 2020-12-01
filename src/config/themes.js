import React from 'react';

// 0 = background, 1 = text and border
export const themes = {
    dark: {
        0: '#000000',
        1: '#FFFFFF',
    },
    light: {
        0: '#FFFFFF',
        1: '#000000',
    },
};

export const useTheme = (name, shade) => {
    return (themes[name] !== undefined && themes[name][shade] !== undefined)
        ? themes[name][shade]
        : (themes.dark[shade] !== undefined)
            ? themes.dark[shade]
            : (shade >= 1)
                ? themes.dark[1]
                : themes.dark[0]
};

export const ThemeContext = React.createContext();