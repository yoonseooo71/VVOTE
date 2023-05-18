import { styled } from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";


const Layout = ()=>{
  return (
    <Wrapper>
      <Header/> 
      <main>
        <Outlet/>
      </main>
    </Wrapper>  
  )
}

const Wrapper = styled.div`
  
`

export default Layout ;