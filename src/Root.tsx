import { ThemeProvider } from "styled-components";
import theme from "./Asset/style/theme";
import GlobalStyle from "./Asset/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import GlobalFonts from "./Asset/style/GlobalFonts";
import { useAppDispatch, useAppSelector } from "./lib/store/store";
import Login from "./routes/Login";
import { useEffect } from "react";
import { themeDark } from "./lib/store/themeModeSlice";
import { setUserInfo, userLogin } from "./lib/store/loginSlice";
import Trend from "./routes/Trend";
import Recent from "./routes/Recent";
import PostWrite from "./routes/PostWrite";
const Root = ()=>{
  const dispatch = useAppDispatch(); 
  const isDarkMode = useAppSelector((state)=>state.themeMode.isDarkMode) ;

  useEffect(()=>{
    /**브라우저 새로고침시 유저가 로그인이 이미 되어있는지 확인 */

    async function checkLoggedin() {
      try {
        const res = await fetch('http://localhost:8080/checkLogin',{
          method: 'GET',
          credentials: 'include'
        })
        const data = await res.json(); 
        const isLogin = data.isLogin ; 
        const user = data.user ;
        if(isLogin) {
          dispatch(userLogin()) ;
          dispatch(setUserInfo(user));
        }
      } catch(err){
        console.error(err); 
        alert("유저정보 확인 오류")
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
              <Route path="" element={<Trend/>}/>
              <Route path="recent" element={<Recent/>}/>
            </Route>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/write" element={<PostWrite/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default Root ; 