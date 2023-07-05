import styled from "styled-components";
import { AddBoxSvg, ArrowSvg } from "../Asset/style/svgComponents";
import UserPop from "./UserPop";
import { useState } from "react";
import { useAppSelector } from "../lib/store/store";
import { Link } from "react-router-dom";
const HeaderUserUi = () =>{
  const [isUserPop,setIsUserPop] = useState<boolean>(false) ; 

  const userName = useAppSelector(state => state.login.name);
  const userPhoto = useAppSelector(state => state.login.photo);

  return (
    <>
      <Link to="/write"><AddBoxIcon /></Link>
      <User onClick={()=>setIsUserPop(!isUserPop)}>
        <UserNameBox>
          <UserName>{userName}</UserName>
          <ArrowIcon />
        </UserNameBox>
        {isUserPop && <UserPop/>}
        <UserImg src={userPhoto} referrerPolicy="no-referrer" />
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
const UserNameBox = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px){
    display: none;
  }
`
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
  @media (max-width: 767px){
    margin: 0;
  }
`;

const AddBoxIcon = styled(AddBoxSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
  @media (max-width: 767px){
    margin: 5px;
  }
`;
const ArrowIcon = styled(ArrowSvg)`
  width: 13px;
  height: 13px;
  margin: 5px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
`;

export default HeaderUserUi ; 