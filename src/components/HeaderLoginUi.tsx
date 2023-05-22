import styled from "styled-components";
import Userimg from "../Asset/images/sampleuserimg.png";
import { AddBoxIcon,ArrowIcon } from "../style/svgComponents";
const HeaderLoginUi = () =>{
  return (
    <>
      <AddBoxIcon />
      <User>
        <UserName>username</UserName>
        <ArrowIcon />
        <UserImg src={Userimg} />
      </User>
    </>
  )
}
const User = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0px 10px;
`;
const UserName = styled.span`
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: 2px black solid;
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50;
  margin-left: 5px;
`;

export default HeaderLoginUi ; 