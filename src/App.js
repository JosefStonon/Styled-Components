import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';


import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {


  const [theme, setTheme] = useState('dark');
  console.log(firstRender)

  const firstRender = useRef(true);

  const currentTheme = useMemo(() => {
      return themes[theme] || theme.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

      console.log({ theme });
  }, [theme])


  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <button onClick={handleToggleTheme}>Toogle</button>
      {theme === 'dark' && (
        <Layout 
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}
      />
      )}
    </ThemeProvider>
  );
};

export default App;
