import styled from "styled-components";
import {
  LighModeSvg,
  DarkModeSvg,
  SearchSvg,
} from "../style/svgComponents";
import { useAppDispatch, useAppSelector } from "../lib/store/store";
import { themeDark, themeWhite } from "../lib/store/themeModeSlice";
import HeaderUserUi from "../components/HeaderUserUi";
import HeaderLoginUi from "../components/HeaderLoginUi";
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
        {isLogin ? <HeaderUserUi /> : <HeaderLoginUi />}
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
  @media (max-width: 767px){
    justify-content: space-between;
    padding: 0 20px ;
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

const LightModeIcon = styled(LighModeSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
  animation: turnIcon 1s;
  @keyframes turnIcon {
    from {
      transform: rotate(0.5turn);
    }
    to {
      transform: rotate(0);
    }
  }
`;

const DarkModeIcon = styled(DarkModeSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
  animation: turnIcon 1s;
  @keyframes turnIcon {
    from {
      transform: rotate(-90deg);
    }
    to {
      transform: rotate(0);
    }
  }
`;

const SearchIcon = styled(SearchSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;

`;

export default Header;
