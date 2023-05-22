import styled from "styled-components";
import {
  LightModeIcon,
  DarkModeIcon,
  SearchIcon,
} from "../style/svgComponents";
import { useAppDispatch, useAppSelector } from "../store/store";
import { changeThemeMode } from "../store/themeModeSlice";
import HeaderLoginUi from "../components/HeaderLoginUi";
import HeaderNotLoginUi from "../components/HeaderNotLoginUi";


const Header = () => {
  const isLogin = false ; 

  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.themeMode.currentMode);
  const changeThemeHandler = () => {
    dispatch(changeThemeMode());
  };
  return (
    <Wrapper>
      <Title>hotissue</Title>
      <Naves>
        {isDarkMode ? (
          <DarkModeIcon onClick={changeThemeHandler} />
        ) : (
          <LightModeIcon onClick={changeThemeHandler} />
        )}
        <SearchIcon />
        {isLogin? <HeaderLoginUi/> : <HeaderNotLoginUi/>}
        
      </Naves>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.header};
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
