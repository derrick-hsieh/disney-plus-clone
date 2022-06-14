import React, { Component, useEffect } from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import requests from '../requests'



function Home(){

        return (
            <Container>
                <ImgSlider/>
                <Viewers/>
                <Movies title="Originals" fetchUrl={requests.fetchNetflixOriginals}/>
                <Movies title="Trending" fetchUrl={requests.fetchTrending}/>
                <Movies title="Top Rated" fetchUrl={requests.fetchTopRated}/>
                <Movies title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
                <Movies title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
                <Movies title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
                <Movies title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
                <Movies title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
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
