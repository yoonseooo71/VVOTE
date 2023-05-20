import styled from "styled-components";
import Userimg from '../Asset/images/sampleuserimg.png'
import { AddBoxIcon, ArrowIcon, LightModeIcon, SearchIcon } from "../style/svgComponents";
const Header = ()=>{
  return (
    <Wrapper>
      <Title>hotissue</Title>
      <Naves>
        <LightModeIcon/>
        <SearchIcon/>
        <AddBoxIcon/>
        <User>
          <UserName>username</UserName>
          <ArrowIcon/>
          <UserImg src={Userimg}/>
        </User>
      </Naves>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  height: 64px;

  background-color: ${({theme})=>theme.colors.header};
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`
const Naves = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const User = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0px 10px;
`
const UserName = styled.span`
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: 2px black solid;
`
const UserImg = styled.img`
  width: 40px;
  height: 40px; 
  border-radius: 50;
  margin-left: 5px;
`


export default Header ;