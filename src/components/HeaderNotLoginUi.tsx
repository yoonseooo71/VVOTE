import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HeaderNotLoginUi = ()=>{
  return (
    <Wrapper>
      <Link to="/login"><Text>로그인</Text></Link>
      <CenterLine/>
      <Text>회원가입</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  background-color: ${({theme})=>theme.colors.loginForm};
  padding: 0px 15px;
`
const Text = styled.div`
  font-size: 15px;
  cursor: pointer;
`
const CenterLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${({theme})=>theme.colors.font};
  border-radius: 0.5px;
`

export default HeaderNotLoginUi ; 