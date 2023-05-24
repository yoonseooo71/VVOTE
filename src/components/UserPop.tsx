import { styled } from "styled-components"
import Userimg from "../Asset/images/sampleuserimg.png";
import { LogoutIcon } from "../style/svgComponents";
import { useAppDispatch } from "../lib/store/store";
import { userLogout } from "../lib/store/loginSlice";

const UserPop = ()=>{
  const dispatch = useAppDispatch() ;

  const handleLogout = ()=>{
    dispatch(userLogout());
  }
  
  return (
    <Wrapper>
      <User>
        <UserImg src={Userimg}/>
        <UserName>UserName</UserName>
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
  top: 70px;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: default;
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
export default UserPop ; 