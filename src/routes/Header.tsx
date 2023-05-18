import styled from "styled-components";
const Header = ()=>{
  return (
    <Wrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${({theme})=>theme.colors.light.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header ;