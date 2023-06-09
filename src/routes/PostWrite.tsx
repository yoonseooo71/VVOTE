import { styled } from "styled-components";
import { ArrowBackSvg } from "../Asset/style/svgComponents";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setPostData } from "../lib/database";
type IpostDom = {
  [key: string]: null | HTMLInputElement;
};
export type IpostData = {
  title: string;
  optionA: string;
  optionB: string;
  totalVotes: number;
  AVotes: number;
  BVotes: number;
  commant: number;
  date: string;
};

function PostWrite() {
  const [isOptionA, setIsOptionA] = useState(true);
  const navigate = useNavigate();
  const postDom = useRef<IpostDom>({
    title: null,
    optionA: null,
    optionB: null,
  });

  /**서밋이벤트 */
  function submitHandler() {
    const title = postDom.current.title?.value;
    const optionA = postDom.current.optionA?.value;
    const optionB = postDom.current.optionB?.value;
    if (title && optionA && optionB) {
      const postData: IpostData = {
        title: title,
        optionA: optionA,
        optionB: optionB,
        totalVotes: 1,
        AVotes: 0,
        BVotes: 0,
        commant: 0,
        date: Date(),
      };
      if (isOptionA) postData.AVotes += 1;
      else postData.BVotes += 1;
      setPostData(postData)
        .then(() => {
          navigate(-1);
        })
        .catch((err) => {
          alert(`error: ${err}`);
        });
    } else {
      alert("빈공간이 없는지 다시 확인해 주세요.");
    }
  }

  return (
    <Wrapper>
      <Container>
        <WriteContainer>
          <Option>
            <OptionText>제목</OptionText>
            <OptionInput
              ref={(el: HTMLInputElement) => (postDom.current.title = el)}
            />
          </Option>
          <Option>
            <OptionText>옵션 A</OptionText>
            <OptionInput
              ref={(el: HTMLInputElement) => (postDom.current.optionA = el)}
            />
          </Option>
          <Option>
            <OptionText>옵션 B</OptionText>
            <OptionInput
              ref={(el: HTMLInputElement) => (postDom.current.optionB = el)}
            />
          </Option>
          <Option>
            <OptionText>본인의 선택</OptionText>
            <SelectBox>
              <SelectOptionA
                select={isOptionA.toString()}
                onClick={() => {
                  if (!isOptionA) setIsOptionA(!isOptionA);
                }}
              >
                A
              </SelectOptionA>
              <SelectOptionB
                select={(!isOptionA).toString()}
                onClick={() => {
                  if (isOptionA) setIsOptionA(!isOptionA);
                }}
              >
                B
              </SelectOptionB>
            </SelectBox>
          </Option>
        </WriteContainer>
        <BottomContainer>
          <BackBox
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackIcon />
            <Text>나가기</Text>
          </BackBox>
          <WriteBtn onClick={submitHandler}>작성하기</WriteBtn>
        </BottomContainer>
      </Container>
      <Background />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
`;
const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 769px) {
    width: 100%;
  }
`;

const Background = styled.div`
  width: 50%;
  height: 100%;
  opacity: 70%;
  background-color: black;
  @media all and (max-width: 769px) {
    width: 0%;
  }
`;

const WriteContainer = styled.div`
  width: 100%;
  height: calc(100% - 66px);
  background-color: ${({ theme }) => theme.colors.subBackground};
  padding: 10% 10% 0 10%;
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 66px;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const OptionText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font};
  margin-bottom: 5px;
`;

const OptionInput = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid #52b69a;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.subBackground};
  &:focus {
    border: 2px solid #42a5f5;
    outline: none;
  }
`;
const SelectBox = styled.div`
  width: 150px;
  height: 45px;
  display: flex;
`;
const SelectOptionA = styled.div<{ select: string }>`
  flex: 0 0 50%;
  height: 100%;
  border: 2px solid #52b69a;
  border-right: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 10px 0px 0px 10px;
  background-color: ${({ select, theme }) =>
    select === "true" ? "#52b69a" : theme.colors.subBackground};
  color: ${({ select, theme }) =>
    select === "true" ? "#e3e3e3" : theme.colors.font};
  cursor: pointer;
`;

const SelectOptionB = styled(SelectOptionA)`
  border-radius: 0px 10px 10px 0px;
  border: 2px solid #52b69a;
  border-left: none;
`;
const BackBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const BackIcon = styled(ArrowBackSvg)`
  width: 32px;
  height: 32px;
  fill: ${({ theme }) => theme.colors.font};
`;
const Text = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font};
`;
const WriteBtn = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.subBackground};
  border: 2px solid #52b69a;
  cursor: pointer;
  &:active {
    border: 2px solid #42a5f5;
  }
`;
export default PostWrite;
