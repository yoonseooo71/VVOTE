import { styled } from "styled-components"

const Post = ()=>{
  return (
    <Wrapper>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 350px;
  height: 250px;
  background-color: white;
  padding: 10px;
  background-clip: content-box;

  @media all and (max-width: 1125px){
    flex: 0 0 50%  ;
  }
  @media all and (max-width: 750px){
    flex: 0 0 100% ;
  }
`

export default Post ;