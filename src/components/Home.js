import React, { Component, useEffect } from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import requests from '../requests'



function Home(){
    // useEffect(()=>{
    //     db.collection("movies").onSnapshot((snapshot)=>{
    //         console.log(snapshot)
    //     })
    // }, []);
        return (
            <Container>
                <ImgSlider/>
                <Viewers/>
                <Movies title="Originals" fetchUrl={requests.fetchNetflixOriginals}/>
                <Movies title="Trending" fetchUrl={requests.fetchTrending}/>
            </Container>
        )
}

const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
`
export default Home
