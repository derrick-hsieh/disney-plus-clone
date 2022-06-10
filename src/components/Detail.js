import React from 'react'
import styled from 'styled-components';
function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://wallpaper.dog/large/20509438.jpg" />
            </Background>
            <ImageTitle>
                <h1>Formula 1</h1>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>Trailer</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>PLAY</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2022/Sport/Formula 1
            </SubTitle>
            <Description>
                Formula 1® racing began in 1950 and is the world’s most prestigious motor racing competition, as well as the world’s most popular annual sporting series: The 2019 FIA Formula One World Championship™ runs from March to December and spans 21 races in 21 countries across four continents. Formula One World Championship Limited is part of Formula 1® and holds the exclusive commercial rights to the FIA Formula One World Championship™.
            </Description>
        </Container>
    )
}

export default Detail
const Container = styled.div`
    min-height:calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`
const Background = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const ImageTitle = styled.div`
height:20vh;
 
`
const Controls = styled.div`
    display:flex;
    align-items:center;
`
const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding: 0 24px;
    margin-right: 22px;
    display:flex;
    align-items:center;
    height:56px;
    background: rgb (249, 249, 249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;
    &:hover{
        background:rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background:rgba(0, 0, 0, 0.3);
    border:1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform:uppercase;
`
const AddButton = styled.button`
    border:1px solid white;
    width:44px;
    margin-right:16px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    background:rgba(0, 0, 0, 0.6);
    span{
        font-size:30px;
        color:white
    }
`
const GroupWatchButton = styled(AddButton)`
background:rgba(0, 0, 0);
`
const SubTitle = styled.div`
    color:white;
    font-size:15px;
    men-height:20px;
    margin-top:26px;
`
const Description = styled.div`
    line-height:1.4;
    font-size:18px;
    margin-top:16px;
    max-width:650px;
    color:rgb(249, 249, 249);
`
