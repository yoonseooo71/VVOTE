import { styled } from "styled-components"
type Iprops = {
  postData: {
    title: string,
    optionA: string,
    optionB: string, 
    date : string, 
    commant : number,
    totalVotes:number,
    AVotes: number,
    BVotes:number
  }
}
const Post = ({postData}:Iprops)=>{
  /**계시물 투표 점유율 계산 */
  const AShare = postData.AVotes / postData.totalVotes * 100; 
  const BShare = postData.BVotes / postData.totalVotes * 100;
  return (
    <Wrapper>
      <PostContainer> 
        <Title>{postData.title}</Title>
        <PostOption color="orange"><span>A</span>: {postData.optionA}</PostOption>
        <PostOption color="lightblue"><span>B</span>: {postData.optionB}</PostOption>
        <Graph>
          <OptionA share={`${AShare}%`}/>
          <OptionB share={`${BShare}%`}/>
        </Graph>
        <Text fontSize="12px">{postData.date} • 댓글 {postData.commant}개</Text>
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