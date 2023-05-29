import styled from "styled-components";
import { AddBoxIcon,ArrowIcon } from "../style/svgComponents";
import UserPop from "./UserPop";
import { useState } from "react";
import { useAppSelector } from "../lib/store/store";
const HeaderUserUi = () =>{
  const [isUserPop,setIsUserPop] = useState<boolean>(false) ; 

  const userName = useAppSelector(state => state.login.name);
  const userPhoto = useAppSelector(state => state.login.photo);

  return (
    <>
      <AddBoxIcon />
      <User onClick={()=>setIsUserPop(!isUserPop)}>
        <UserName>{userName}</UserName>
        <ArrowIcon />
        <UserImg src={userPhoto} referrerPolicy="no-referrer" />
        {isUserPop && <UserPop/>}
      </User>
    </>
  )
}
const User = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px;
  cursor: pointer;
`;
const UserName = styled.span`
  font-size: 15px;
  padding-bottom: 5px;
  border-bottom: ${({theme})=>`2px ${theme.colors.font} solid`};
`;
const UserImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: 5px;
`;

export default HeaderUserUi ; 