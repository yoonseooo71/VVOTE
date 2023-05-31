import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { RecentSvg, TrendSvg } from "../style/svgComponents";

const Home = ()=>{
  return(
    <Wrapper>
      <Category>
        <CategoryLinks>
          <CategoryLink to="/trend"><TrentIcon/>트랜드</CategoryLink>
          <CategoryLink to="/recent"><RecentIcon/>최신</CategoryLink>
        </CategoryLinks>
        <Bar/>
      </Category>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  padding: 24px 10% 0 10%;
  background-color: ${({theme})=>theme.colors.mainBackground};
  @media (max-width: 767px){
    padding: 12px 3% 0 3%;
  }
`
const Category = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const CategoryLinks = styled.div`
  display: flex;
`
const CategoryLink = styled(Link)`
  width: 110px;
  font-size: 1.2em;
  color: ${({theme})=>theme.colors.font};
  display: flex;
  align-items: center;
  justify-content: center;
`

const TrentIcon = styled(TrendSvg)`
  width: 1.5em;
  height: 1.5em;
  margin-right: 7px;
  fill: ${({theme})=>theme.colors.font};
`
const RecentIcon = styled(RecentSvg)`
  width: 1.5em;
  height: 1.5em;
  margin-right: 7px;
  fill: ${({theme})=>theme.colors.font};
`

const Bar = styled.div`
  width: 110px;
  height: 2px;
  background-color: ${({theme})=>theme.colors.font};
`
export default Home ;