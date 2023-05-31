import { styled } from "styled-components";
import Post from "../components/Post";

const Trend = ()=>{
  return (
    <Wrapper>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1500px;
  background-color: green;
  display: flex;
  flex-wrap: wrap;
  @media all and (max-width: 1500px){
    width: 1125px;
  }
  @media all and (max-width: 1125px){
    width: 750px;
  }
  @media all and (max-width: 750px){
    width: 375px;
  }
  
`

export default Trend ; 