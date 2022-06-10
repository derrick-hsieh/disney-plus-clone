import React from 'react'
import styled from 'styled-components';
function Login() {
    return (
        <Container>
            <LogoWrap>
                <Logo src="/images/cta-logo-one.svg"/>
                <SignUp>Get All There</SignUp>
                <LogoTwo src="/images/cta-logo-two.png"></LogoTwo>
            </LogoWrap>
        </Container>
    )
}

export default Login
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
positiom:relative;
height:calc(100vh-70px);
&:before {
    z-index:-1;
    position:absolute;
    content:"";
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-image:url("/images/login-background.jpg");
    background-size:cover;
    background-repeat:no-repeat;
}
`
const LogoWrap = styled.div`
max-wdith:650px;
padding:80px 40px;
display:flex;
flex-direction:column;
width:50%;
margin-top:100px;

`
const Logo = styled.img`
`
const SignUp = styled.a`
width:100%;
background:#0063e5;
padding:17px 0;
font-weight:bold;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
margin-top:12px;
margin-bottom:12px;
letter-spacing:1.5px;
&:hover{
    background:$0483ee;
}
`
const LogoTwo = styled.img`
margin-top:20px;
`

