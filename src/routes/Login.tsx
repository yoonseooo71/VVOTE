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
  width: 600px;
  height: 400px;
  border-radius: 40px;
  background-color: ${({theme})=>theme.colors.subBackground};
  padding: 40px 100px;
`
const BoldText = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 10px 0px;
`
const Text = styled.div`
  font-size: 24px;
  margin: 20px 0px 40px 0;
`
const FireIcon = styled(FireSvg)`
  width: 50px;
  height: 50px;
`;

export default Login ; 