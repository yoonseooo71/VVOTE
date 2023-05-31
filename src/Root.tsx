import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import GlobalFonts from "./style/GlobalFonts";
import { useAppDispatch, useAppSelector } from "./lib/store/store";
import Login from "./routes/Login";
import { useEffect } from "react";
import { themeDark } from "./lib/store/themeModeSlice";
import { getLoginData } from "./lib/firebase";
import { setUserInfo, userLogin } from "./lib/store/loginSlice";
import Trend from "./routes/Trend";
import Recent from "./routes/Recent";
const Root = ()=>{
  const dispatch = useAppDispatch(); 
  const isDarkMode = useAppSelector((state)=>state.themeMode.isDarkMode) ;

  useEffect(()=>{
    /**브라우저 새로고침시 유저가 로그인이 이미 되어있는지 확인 */
    async function checkLoggedin() { 
      const isLoggedin  = localStorage.getItem("isLogin") ; 
      const userUid = localStorage.getItem("uid");  

      if (isLoggedin === "true" && userUid !== null) {
        dispatch(userLogin()); //로그인ui를 먼저띄우고 유저 데이터 값을 기다림 
        const userInfo = await getLoginData(userUid); 
        dispatch(setUserInfo(userInfo))//store 에 유저 정보값 넣기
      }
    }
    /**브라우저 새로고침시 기존 테마 설정 유지 */
    const currentTheme = localStorage.getItem("theme") ; 
    if(currentTheme === "dark") {
      dispatch(themeDark()); 
    }
    
    checkLoggedin(); 
  },[dispatch])
  
  return (
    <ThemeProvider theme={isDarkMode? theme.dark : theme.light}>
      <GlobalStyle />
      <GlobalFonts />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}>
              <Route path="/trend" element={<Trend/>}/>
              <Route path="/recent" element={<Recent/>}/>
            </Route>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default Root ; 