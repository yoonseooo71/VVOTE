import { styled } from "styled-components";
import { ArrowBackSvg } from "../style/svgComponents";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
function PostWrite() {
  const [isA,setIsA] = useState(true) ; 
    const navigate = useNavigate() ; 
  return (
    <Wrapper>
      <Container>
        <WriteContainer>
          <Option>
            <OptionText>제목</OptionText>
            <OptionInput/>
          </Option>
          <Option>
            <OptionText>옵션 A</OptionText>
            <OptionInput/>
          </Option>
          <Option>
            <OptionText>옵션 B</OptionText>
            <OptionInput/>
          </Option>
          <SelectBox>
            <SelectOptionA isA={isA} onClick={()=>setIsA(!isA)}>A</SelectOptionA>
            <SelectOptionB isA={!isA} onClick={()=>setIsA(!isA)}>B</SelectOptionB>
          </SelectBox>
        </WriteContainer>
        <BottomContainer>
          <BackBox onClick={()=>{navigate(-1)}}>
            <BackIcon/>
            <Text>나가기</Text>
          </BackBox>
          <WriteBtn>작성하기</WriteBtn>
        </BottomContainer>
      </Container>
      <Background/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
`
const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 769px){
    width: 100%
  }
`

const Background =styled.div`
  width: 50%;
  height: 100%;
  opacity: 70%;
  background-color: black;
  @media all and (max-width: 769px){
    width: 0%
  }
`

const WriteContainer = styled.div`
  width: 100%;
  height: calc(100% - 66px);
  background-color: ${({theme})=>theme.colors.subBackground};
  padding: 10% 10% 0 10%;
`
const BottomContainer = styled.div`
  width: 100%;
  height: 66px;
  background-color: ${({theme})=>theme.colors.mainBackground};
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const OptionText = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${({theme})=>theme.colors.font} ; 
  margin-bottom: 5px;
`

const OptionInput = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid #52b69a ;
  border-radius: 5px;
  background-color: ${({theme})=>theme.colors.subBackground};
  &:focus {
    border: 2px solid #1e6091;
    outline: none;
  }
`
const SelectBox = styled.div`
  width: 150px;
  height: 45px;
  display: flex;
`
const SelectOptionA = styled.div<{isA:boolean}>`
  flex: 0 0 50%;
  height: 100%;
  border: 2px  solid #52b69a;
  border-right: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 15px 0px 0px 15px;
  background-color: ${({isA,theme})=>isA?"#1e6091" :theme.colors.subBackground};
` 

const SelectOptionB = styled(SelectOptionA)`
  border-radius: 0px 15px 15px 0px; 
  border: 2px  solid #52b69a;
  border-left: none;
` 
const BackBox = styled.div`
  display: flex;
  align-items: center;
`
const BackIcon = styled(ArrowBackSvg)`
  width: 32px;
  height: 32px;
  fill: ${({theme})=>theme.colors.font};
`
const Text = styled.div`
  font-size: 18px;
  color: ${({theme})=>theme.colors.font};
`
const WriteBtn = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({theme})=>theme.colors.subBackground};
  border: 2px solid #52b69a ;
  &:active {
    border: 2px solid #1e6091;
  }
`
export default PostWrite ; 