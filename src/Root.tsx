import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import GlobalFonts from "./style/GlobalFonts";
import { useEffect, useState } from "react";
const Root = ()=>{
  const [isDarkMode,setIsDarkMode] = useState<boolean>(false);
  const changeThemeMode = (state:boolean|undefined)=>{
    if(state === undefined) setIsDarkMode(!isDarkMode) ; 
    else setIsDarkMode(state) ;  
  }
  useEffect(()=>{
  },[])
  return (
    <ThemeProvider theme={isDarkMode? theme.dark : theme.light}>
      <GlobalStyle />
      <GlobalFonts />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default Root ; 