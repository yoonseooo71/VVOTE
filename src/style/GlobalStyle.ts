import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
    box-sizing: border-box;
    color: ${({theme})=>theme.colors.font};
    transition:background-color 0.3s; 
  }
  a {
    text-decoration: none;
  }
  
`

export default GlobalStyle ; 