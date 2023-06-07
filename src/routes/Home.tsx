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
  background-color: ${({theme})=>theme.colors.mainBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`
const Category = styled.div`
  width: 1400px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  margin: 25px 0;
  @media all and (max-width: 1400px){
    width: 1050px;
  }
  @media all and (max-width: 1050px){
    width: 90%;
  }
  
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