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
  background-color: #FFFFFF;
  color: #141a29;
  height: 100vh;
  width: 100%;
 }

 body {
  position: relative;
 }
`