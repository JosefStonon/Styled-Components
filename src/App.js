import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';


import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';


import themes from './styles/themes';

class App extends React.Component {

  state ={
    change: false,
  };


  /* didMount é semelhante ao useEffect com array de dependencias, onde o componente é reiderizado e executado somente um vez. ja o useEfect sem o array de dependencia seria o mesmo que montar uma função dentro do render, assim toda vez q o componete é montado a funcção tbm é reinderizada. */
  componentDidMount() {
    console.log('executed component')
  };

  componentDidUpdate(prevProps, prevState) {
    console.log({
      currentState: this.state,
      prevState,
      prevProps,
    });
  }




/*   constructor(props) {
    super(props); //super faz referencia a classe extends. Como boa pratica e avitar problemas futuros tambem se passa a props no super.


    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  } */
  

  /* //em comp de classe nao existe useState, se atribui o valor do estado deste forma:
  state = {
    theme: 'dark',
    oiTudoBem: true
  }; */

  /* handleToggleTheme = () => {    //atribuindo uma arrow function a um valor desta forma, o ibjeto this passa a ser herdado do objeto pai. 
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
  } */



  render() {
    return (

      <ThemeProvider>

        <button onClick={() => this.setState({ change: true})}></button>
        <ThemeContext.Consumer>
         {({theme, handleToggleTheme}) => (
           <StyledThemeProvider theme={themes[theme] || themes.dark}>
           <GlobalStyle />
     
     
             <Layout 
             onToggleTheme={handleToggleTheme}
             selectedTheme={theme}
           />
   
         </StyledThemeProvider>
         )}
        </ThemeContext.Consumer>
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
