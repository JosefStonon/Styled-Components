import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';


import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {
  constructor(props) {
    super(props); //super faz referencia a classe extends. Como boa pratica e avitar problemas futuros tambem se passa a props no super.


    this.state = {
      theme: 'dark',
      oiTudoBem: true
    };
  }


  render() {

    const { theme } = this.state;

    console.log(this.state)


    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
  
  
          <Layout 
          onToggleTheme={() => {
            this.setState(prevState => ({theme: prevState.theme === 'dark' ? 'light' : 'dark'}));
          }}
          selectedTheme={theme}
        />
  
      </ThemeProvider>
    );
  }
}


/* function App() {


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
  }, [theme])


  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />


        <Layout 
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}
      />

    </ThemeProvider>
  );
}; */

export default App;
