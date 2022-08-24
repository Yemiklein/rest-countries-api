import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


html{ 
    box-sizing: border-box;
}
*,*::after,*::before{
    box-sizing: inherit;
    transition: background-color 150ms;
} 
body{
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    min-height: 100vh;
    
}
a, button{
    font-family: inherit;
}
.footer{
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: rgb(235, 195, 64);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }
`;
