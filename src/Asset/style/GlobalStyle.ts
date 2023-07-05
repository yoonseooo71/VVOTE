import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
    box-sizing: border-box;
    color: ${({theme})=>theme.colors.font};
  }
  body {
    
    background-color: ${({theme})=>theme.colors.mainBackground};
  }
  a {
    text-decoration: none;
  }
  
`

export default GlobalStyle ; 