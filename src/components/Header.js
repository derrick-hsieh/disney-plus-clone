import React, { Component, useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function  Header({}) {
   const [burgerState, setBurgerstate] = useState(false)

        return (
            <Nav>
                <Logo src="/images/logo.svg"/>
                <NavMenu>
                    <a>
                        <img src="/images/home-icon.svg"/>
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src="/images/search-icon.svg"/>
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src="/images/watchlist-icon.svg"/>
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src="/images/originals-icon.svg"/>
                        <span>ORIGINALS</span>
                    </a>
                    <a>
                        <img src="/images/movie-icon.svg"/>
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src="/images/series-icon.svg"/>
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <RightMenu>
                    {/* <UserImg src="/images/profile.jpg"/> */}
                    <CustomMenu onClick={()=>setBurgerstate(true)}/>
                </RightMenu>
                <BurgerNav show={burgerState}>
                    <CloseWrapper>
                        <CustomClose onClick={()=>setBurgerstate(false)}/>
                    </CloseWrapper>
                    <li><a href="#">asd</a></li>

                </BurgerNav>
                
            </Nav>
        )
}
export default Header
const Nav = styled.div`
height:70px;
background:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
overflow-x:hidden;
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
    transform:${props=> props.show? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.2s ease-in-out 

`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;

`