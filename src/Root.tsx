import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import GlobalFonts from "./style/GlobalFonts";
import { useAppSelector } from "./store/store";
const Root = ()=>{
  const isDarkMode = useAppSelector((state)=>state.themeMode.currentMode) ;
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