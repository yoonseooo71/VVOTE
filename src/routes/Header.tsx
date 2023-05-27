import {useEffect} from "react"
import styled from "styled-components";
import {
  LightModeIcon,
  DarkModeIcon,
  SearchIcon,
} from "../style/svgComponents";
import { useAppDispatch, useAppSelector } from "../lib/store/store";
import { themeDark, themeWhite } from "../lib/store/themeModeSlice";
import HeaderLoginUi from "../components/HeaderLoginUi";
import HeaderNotLoginUi from "../components/HeaderNotLoginUi";
import { Link } from "react-router-dom";
import { setUserInfo, userLogin } from "../lib/store/loginSlice";
import { getLoginData } from "../lib/firebase";

const Header = () => {
  const dispatch = useAppDispatch();

  const isDarkMode = useAppSelector((state) => state.themeMode.isDarkMode);
  const isLogin = useAppSelector((state) => state.login.isLogin);

  useEffect(()=>{
    /** 유저가 로그인이 이미 되어있는지 확인 */
    async function checkLoggedin() { 
      const isLoggedin  = localStorage.getItem("isLogin") ; 
      const userUid = localStorage.getItem("uid");  
      if (isLoggedin === "true" && userUid !== null) {
        dispatch(userLogin()); //로그인ui를 먼저띄우고 유저 데이터 값을 기다림 
        const userInfo = await getLoginData(userUid); 
        dispatch(setUserInfo(userInfo))//store 에 유저 정보값 넣기
      }
    }
    
    checkLoggedin(); 
  })

  const changeThemeWhite = () => {
    dispatch(themeWhite());
    localStorage.setItem("theme","white");
  };
  const changeThemeDark = () => {
    dispatch(themeDark());
    localStorage.setItem("theme","dark");
  };

  return (
    <Wrapper>
      <Link to="/">
        <Title>VVOTE</Title>
      </Link>
      <Naves>
        {isDarkMode ? (
          <DarkModeIcon onClick={changeThemeWhite} />
        ) : (
          <LightModeIcon onClick={changeThemeDark} />
        )}
        <SearchIcon />
        {isLogin ? <HeaderLoginUi /> : <HeaderNotLoginUi />}
      </Naves>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.subBackground};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
const Naves = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
