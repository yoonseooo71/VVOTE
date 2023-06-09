import { styled } from "styled-components"

const Post = ()=>{
  return (
    <Wrapper>
      <PostContainer> 
        <Title>JavaScript 와 Java 어떤게 좋나요</Title>
        <PostOption color="orange"><span>A</span>: JavaScript</PostOption>
        <PostOption color="lightblue"><span>B</span>: Java</PostOption>
        <Graph>
          <OptionA share="30%"/>
          <OptionB share="70%"/>
        </Graph>
        <Text fontSize="12px">2023-05-31 • 댓글 5개</Text>
      </PostContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 350px;
  aspect-ratio: 3/2;
  background-color: ${({theme})=>theme.colors.post};
  padding: 10px;
  background-clip: content-box;
  border-radius: 20px;

  @media all and (max-width: 1125px){
    flex: 0 0 50%  ;
  }
  @media all and (max-width: 750px){
    flex: 0 0 100% ;
  }
`
const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: flex-start;

`
const Text = styled.div<{fontSize:string}>`
  font-size: ${({fontSize})=>fontSize};
  color: ${({theme})=>theme.colors.font} ;
`
const Title = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: ${({theme})=>theme.colors.font} ; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
` 

const PostOption = styled.div<{color:string}>`
  width: 100%;
  font-size: 14px;
  color: ${({theme})=>theme.colors.font} ;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    color: ${({color})=>color};
    font-weight: bold;
  }
`
const Graph = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  align-self: center;
  overflow: hidden;
  display: flex;
  align-items: center;
`
const OptionA = styled.div<{share:string}>`
  width: ${({share})=>share};
  height: 100%;
  background-color: orange;
`
const OptionB = styled(OptionA)`
  background-color: lightblue;
`
export default Post ;