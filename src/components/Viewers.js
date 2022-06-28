import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function Viewers() {
    return (
       
        <Container>
             <Fade left>
            <Wrap>
                <img src="/images/viewers-disney.png"  alt=""/>
            </Wrap>
            </Fade>
            <Fade bottom>
            <Wrap>
                <img src="/images/viewers-pixar.png"  alt=""/>
            </Wrap>
            </Fade>
            <Fade left>
            <Wrap>
                <img src="/images/viewers-marvel.png"  alt=""/>
            </Wrap>
            </Fade>
            <Fade right>
            <Wrap>
                <img src="/images/viewers-national.png"  alt=""/>
            </Wrap>
            </Fade>
            <Fade right>
            <Wrap>
                <img src="/images/viewers-starwars.png"  alt=""/>
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