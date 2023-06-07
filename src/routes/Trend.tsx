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
  width: 1400px;
  background-color: green;
  display: flex;
  flex-wrap: wrap;
  @media all and (max-width: 1400px){
    width: 1050px;
  }
  @media all and (max-width: 1050px){
    width: 90%;
  }
  
`

export default Trend ; 