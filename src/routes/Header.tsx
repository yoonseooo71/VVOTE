import styled, { keyframes } from "styled-components";
import {
  LighModeSvg,
  DarkModeSvg,
  SearchSvg,
} from "../style/svgComponents";
import { useAppDispatch, useAppSelector } from "../lib/store/store";
import { themeDark, themeWhite } from "../lib/store/themeModeSlice";
import HeaderUserUi from "../components/HeaderUserUi";
import HeaderLoginBtn from "../components/HeaderLoginBtn";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();

  const isDarkMode = useAppSelector((state) => state.themeMode.isDarkMode);
  const isLogin = useAppSelector((state) => state.login.isLogin);

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
        {isLogin ? <HeaderUserUi /> : <HeaderLoginBtn />}
      </Naves>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.subBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  @media (max-width: 767px){
    padding: 0 3%;
  }
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;
const Naves = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const turnIcon = keyframes`
  from {
    transform: rotate(0.5turn);
  }
  to {
    transform: rotate(0);
  }
`

const LightModeIcon = styled(LighModeSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
  animation: ${turnIcon} 1s;
  @media (max-width: 767px){
    margin: 5px;
  }
`;

const DarkModeIcon = styled(DarkModeSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
  animation: ${turnIcon} 1s;
  @media (max-width: 767px){
    margin: 5px;
  }
`;

const SearchIcon = styled(SearchSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
  @media (max-width: 767px){
    margin: 5px;
  }

`;

export default Header;
