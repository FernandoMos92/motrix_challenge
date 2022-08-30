import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;500;600;700&display=swap');
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Darker Grotesque', sans-serif;
 }

 html {
  background-color: #141a29;
  color: #F2F2F2;
  height: 100vh;
  width: 100%;
 }
`
