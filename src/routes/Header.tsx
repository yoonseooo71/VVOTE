import styled from "styled-components";
import SearchIcon from '../Asset/images/search.svg';
import LighModeIcon from '../Asset/images/light_mode.svg';
import AddBoxIcon from '../Asset/images/add_box.svg'
import ArrowIcon from '../Asset/images/arrow.svg'
import Userimg from '../Asset/images/sampleuserimg.png'
const Header = ()=>{
  return (
    <Wrapper>
      <Title>hotissue</Title>
      <Naves>
        <Icon src={LighModeIcon}/>
        <Icon src={SearchIcon}/>
        <Icon src={AddBoxIcon}/>
        <User>
          <UserName>username</UserName>
          <Arrow src={ArrowIcon}/>
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
const Icon = styled.img`
  width: 28px;
  height: 28px;
  margin:10px;
`
const User = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0px 10px;
`
const Arrow = styled(Icon)`
  width: 15px;
  height: 15px;
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