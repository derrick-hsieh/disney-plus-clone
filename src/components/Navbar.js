import React, {useEffect, useState } from 'react'
import styled from 'styled-components';
function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
       window.addEventListener("scroll", ()=>{
           if(window.scrollY>100){
               handleShow(true);
           }else{
               handleShow(false)
           }
       });
       return ()=>{
           window.removeEventListener("scroll", null);
       }
    }, [])
    return (
        <Nav className={`${show && "nav-black"}`}>
            <Logo src="/images/logo.svg"/>
            <Profile src="/images/profile.jpg"/>
        </Nav>
    )
}

export default Navbar
const Nav = styled.div`
position:fixed;
padding:30px;
width:100%;
top:0;
display:flex;
justify-content:space-between;
align-items:center;
z-index:1;
transition-timing-function:ease-in;
transition:all 0.5s;
&.nav-black{
    background:#111 !important;
}
`
const Logo = styled.img` 
position:fixed;
width:70px;
left:20px;
object-fit:contain;  
   
`
const Profile = styled.img`
position:fixed;
right:20px;
width:30px;
object-fit:contain;
border-radius:50%;
`