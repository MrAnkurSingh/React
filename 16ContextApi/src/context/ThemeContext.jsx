import React from 'react';
import { useState } from 'react';

import { createContext } from 'react';

export const ThemeDataConetext=createContext()
const ThemeContext = (props) => {
    
   const [theme, setTheme] = useState('Light');
    return (
        <ThemeDataConetext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeDataConetext.Provider>
    );
}

export default ThemeContext;
