import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function Viewers() {
    return (
       
        <Container>
             <Fade left>
            <Wrap>
                <a href="https://disney.com.tw/">
                <img src="/images/viewers-disney.png"  alt=""/>
                </a>
                
            </Wrap>
            </Fade>
            <Fade bottom>
            <Wrap>
                <a href="https://www.pixar.com/">
                <img src="/images/viewers-pixar.png"  alt=""/>
                </a>
            </Wrap>
            </Fade>
            <Fade left>
            <Wrap>
                <a href="https://www.marvel.com/">
                    <img src="/images/viewers-marvel.png"  alt=""/>
                </a>
            </Wrap>
            </Fade>
            <Fade right>
            <Wrap>
                <a href="https://www.nationalgeographic.com/">
                <img src="/images/viewers-national.png"  alt=""/>
                </a>
            </Wrap>
            </Fade>
            <Fade right>
            <Wrap>
                <a href="https://www.starwars.com/">
                    <img src="/images/viewers-starwars.png"  alt=""/>
                </a>
            </Wrap>
            </Fade>
        </Container>
      
    )
}

export default Viewers
const Container = styled.div`
    margin-top:30px;
    display:grid;
    padding:30px 0 26px;
    grid-gap:25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    @media(max-width:900px){
        grid-template-columns: repeat(4,minmax(0,1fr));
    }
    @media(max-width:500px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`
const Wrap = styled.div`
border-radius:10px;
cursor:pointer;
box-shadow: 10px 10px 20px rgb(0 0 0 / 69%);
border:2px solid  rgba(249, 249, 249, 0.1);
img{
    width:100%;
    height:100%;
    object-fit: cover;
}
&:hover{
    border-color:rgba(249, 249, 249, 0.8);
    transform:scale(1.05);
    transition: all 250ms;
}
`