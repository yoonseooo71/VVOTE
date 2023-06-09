import { styled } from "styled-components";
import Post from "../components/Post";
const dummydata= {
  title: "JavaScript 와 Java 어떤게 좋나요",
  optionA: "JavaScript",
  optionB: "Java", 
  date : "2023-05-31", 
  commant : 5,
  totalVotes:777,
  AVotes:444,
  BVotes:333,
}
const Trend = ()=>{
  return (
    <Wrapper>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
      <Post postData={dummydata}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1400px;
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