import styled from "styled-components";
import Userimg from "../Asset/images/sampleuserimg.png";
import { AddBoxIcon,ArrowIcon } from "../style/svgComponents";
import UserPop from "./UserPop";
import { useState } from "react";
const HeaderLoginUi = () =>{
  
  const [isUserPop,setIsUserPop] = useState<boolean>(false) ; 

  return (
    <>
      <AddBoxIcon />
      <User onClick={()=>setIsUserPop(!isUserPop)}>
        <UserName>username</UserName>
        <ArrowIcon />
        <UserImg src={Userimg} />
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
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: ${({theme})=>`2px ${theme.colors.font} solid`};
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 5px;
`;

export default HeaderLoginUi ; 