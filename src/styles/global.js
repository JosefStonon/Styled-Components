import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${props => props.theme};
    color: ${props => props.theme.textColor};
    font-family: sans-serif;
  }
`;


