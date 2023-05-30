import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HeaderLoginBtn = ()=>{
  return (
      <Link to="/login"><Text>로그인</Text></Link>
  )
}

const Text = styled.div`
  font-size: 15px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: ${({theme})=>theme.colors.loginForm};
`
export default HeaderLoginBtn ; 