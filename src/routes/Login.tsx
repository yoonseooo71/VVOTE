import styled from "styled-components";
import { FireSvg } from "../style/svgComponents";
import GoogleLoginBtn from "../components/GoogleLoginBtn";

const Login =()=>{
  return (
    <Wrapper>
      <LoginBox>
        <FireIcon/>
        <BoldText>로그인</BoldText>
        <Text>간편하게 로그인하고 자유롭게 서비스를 이용하세요.</Text>
        <GoogleLoginBtn/>
      </LoginBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: ${({theme})=>theme.colors.mainBackground};
  display: flex; 
  justify-content: center;
  align-items: center;
`
const LoginBox = styled.div`
  width: 500px;
  height: 350px;
  border-radius: 40px;
  background-color: ${({theme})=>theme.colors.subBackground};
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 767px){
    width: 90%;
    padding: 24px;
  }
`
const BoldText = styled.div`
  font-size: 27px;
  font-weight: bold;
`
const Text = styled.div`
  font-size: 21px;
`
const FireIcon = styled(FireSvg)`
  width: 48px;
  height: 48px;
`;

export default Login ; 