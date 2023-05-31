import { Link, Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { RecentSvg, TrendSvg } from "../style/svgComponents";
import { useEffect, useState } from "react";

const Home = ()=>{

  const location = useLocation() ; 
  const [isRecent, setIsRecent] = useState(false) ;

  useEffect(()=>{
    if (location.pathname === "/recent") setIsRecent(true) ;
    else setIsRecent(false) ; 
  },[location])

  return(
    <Wrapper>
      <Category>
        <CategoryLinks>
          <CategoryLink to="/" current={(!isRecent).toString()}><TrentIcon/>트랜드</CategoryLink>
          <CategoryLink to="/recent" current={isRecent.toString()}><RecentIcon/>최신</CategoryLink>
        </CategoryLinks>
        <Bar move={isRecent.toString()}/>
      </Category>
      <Outlet/>
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
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const CategoryLinks = styled.div`
  display: flex;
`
const CategoryLink = styled(Link)<{current:string}>`
  width: 110px;
  font-size: 1.2em;
  font-weight: ${({current}) =>current ==="true" ? "bold" : "500"};
  opacity: ${({current}) =>current ==="true" ? "100%" : "70%"};
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

const Bar = styled.div<{move:string}>`
  width: 110px;
  height: 3px;
  background-color: ${({theme})=>theme.colors.font};
  transition: transform 0.4s;
  transform: ${({move}) =>{if(move ==="true") return "translate(110px,0)"}};
`
export default Home ;