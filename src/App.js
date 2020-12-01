import React, { useEffect, useState } from 'react';
import './App.css';
import { MyComponent, Random, View1 } from './components';
import { themes, useTheme, ThemeContext } from './config/themes';
import { useRandom } from './hooks/useRandom';

function App() {

  /** Changer test ne mettra pas à jour <MyComponent test={test} /> */
  let test = "test";


  /** Hook d'état
   * - theme est une variable d'état
   * - setTheme est un reducer permettant de mettre à jour theme et demander à React d'update le composant
   */
  const [theme, setTheme] = useState('dark');


  /** Tout lier */
  // const random = useRandom(10);

  // useEffect(() => {
  //   (random > 5) 
  //     ? setTheme('light')
  //     : setTheme('dark')
  // })



  return (
    <div className="App">

      {/* Context provider
          Donne à tous les enfants accès au context */}
      <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>

        <h1>{theme.toUpperCase()}</h1>
        <div className="row">
          <MyComponent test={test} />
          {/* <View1 theme={theme} /> */}
          {/* <View1 color={themes.dark[1]} backgroundColor={themes.dark[0]} /> */}
          {/* <View1 color={useTheme(theme, 1)} backgroundColor={useTheme(theme, 0)} /> */}
          {/* <Random /> */}
        </div>

        <div className="row">
          {Object.keys(themes).map((name) => {
            return (
              <input className="button" type="submit" value={name.toUpperCase()} onClick={() => setTheme(name)} />
            )
          })}
        </div>

      </ThemeContext.Provider>

    </div>
  );
}

export default App;
