import { styled } from "styled-components"
import { LogoutSvg } from "../style/svgComponents";
import { useAppDispatch, useAppSelector } from "../lib/store/store";
import { resetUserInfo, userLogout } from "../lib/store/loginSlice";

const UserPop = ()=>{
  const dispatch = useAppDispatch() ;

  const userName = useAppSelector(state => state.login.name);
  const userPhoto = useAppSelector(state => state.login.photo);
  /** 유저로그아웃 핸들러*/
  const handleLogout = ()=>{
    localStorage.removeItem("isLogin"); 
    localStorage.removeItem("uid");
    
    dispatch(userLogout());
    dispatch(resetUserInfo());
  }
  
  return (
    <Wrapper>
      <User>
        <UserImg src={userPhoto} referrerPolicy="no-referrer"/>
        <UserName>{userName}</UserName>
      </User>
      <LogoutBtn onClick={handleLogout}><LogoutIcon/>로그아웃</LogoutBtn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 240px;
  height: 150px;
  background-color: ${({theme})=>theme.colors.subBackground};
  position: absolute;
  z-index: 10;
  top: 70px;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  
  @media (max-width: 767px){
    right: 10px;
  }
`
const User = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: start;
`
const UserImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 10px;
`
const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme})=>theme.colors.font} ;
  margin-left: 10px; 
`
const LogoutBtn = styled.div`
  width: 200px;
  height: 40px;
  background-color: ${({theme})=>theme.colors.loginForm};
  border-radius: 15px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const LogoutIcon = styled(LogoutSvg)`
  width: 25px;
  height: 25px;
  padding-right: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
`;
export default UserPop ; 