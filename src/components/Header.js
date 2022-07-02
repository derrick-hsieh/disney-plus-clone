import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({ }) {
    const [burgerState, setBurgerstate] = useState(false)
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
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <Link to="/">
                        <img src="/images/home-icon.svg" />
                        <span>HOME</span>
                </Link>
                <Link to="/search">
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </Link>
                <Link to="/movielist">
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </Link>
               
               
            </NavMenu>
            <RightMenu>
                {/* <UserImg src="/images/profile.jpg"/> */}
                <CustomMenu onClick={() => setBurgerstate(true)} />
            </RightMenu>
            <BurgerNav show={burgerState}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerstate(false)} />
                </CloseWrapper>
                <Link to="/" onClick={()=> setBurgerstate(false)}>
                    <li>Home</li>
                </Link>    
                <Link to="/search" onClick={()=> setBurgerstate(false)}>
                    <li>Search</li>
                </Link>  
                <Link to="/movielist" onClick={()=> setBurgerstate(false)}>
                    <li>Watchlist</li>
                </Link>              

            </BurgerNav>

        </Nav>
    )
}
export default Header
const Nav = styled.div`

height:70px;
width:100%;
background:#090b13;
display:flex;

justify-content:space-between;
align-items:center;
padding:0 36px;
overflow-x:hidden;
transition-timing-function:ease-in;
transition:all 0.5s;
&.nav-black{
    background:#111 !important;
    position:fixed;
    z-index:3;
}
`
const Logo = styled.img`
width:80px;
`
const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:enter;
  a{
    display:flex;
    cursor:pointer;
    align-items:center;
    padding:0 12px;
    color:white;
    text-decoration:none;
    img{
        height:20px;
    }
  span{
      font-size:13px;
      letter-spacing:1.42px;
      position:relative;
      &:after{
          content:"";
          height:2px;
          background:white;
          position:absolute;
          left:0;
          right:0;
          bottom:-6px;
          transition:all 250ms;
          transform:scaleX(0);
          opacity:0;
      }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }

}
@media(max-width:900px){
    display:none;
}
`
const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
`
const RightMenu = styled.div`
`
const CustomMenu = styled(MenuIcon)`
display:flex;
cursor:pointer;
align-items:center;
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:#090b13;
    width:300px;
    z-index:3;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:left;
    li{
        padding:15px 0;
        border-bottom:1px solid grey;
    }
    a{
        font-weight:600;
        text-decoration:none;
        color:white;
    }
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.2s ease-in-out 

`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;

`