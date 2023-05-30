import { styled } from "styled-components";

const Home = ()=>{
  return(
    <Wrapper>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  padding: 0 10%;
  background-color: ${({theme})=>theme.colors.mainBackground};
`

export default Home ;