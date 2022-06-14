import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import instance from '../adaxios';
import requests from '../requests';
// import Youtube from 'react-youtube'; 


function Detail({ }) {
    const { id, path, title } = useParams();

    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, getMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            if (title === 'Originals') {
                const request = await instance.get(requests.fetchNetflixOriginals);
                let movieData = request.data.results.filter((movie => movie.id == id))
                getMovies(movieData[0])
                return request
            } else if (title === 'Trending') {
                const request = await instance.get(requests.fetchTrending);
                let movieData = request.data.results.filter((movie => movie.id == id))
                getMovies(movieData[0])
                return request
            }else if (title === 'Top Rated') {
                const request = await instance.get(requests.fetchTopRated);
                let movieData = request.data.results.filter((movie => movie.id == id))
                getMovies(movieData[0])
                return request
            }else if (title === 'Action Movies') {
                const request = await instance.get(requests.fetchActionMovies);
                let movieData = request.data.results.filter((movie => movie.id == id))
                getMovies(movieData[0])
                return request
            }else if (title === 'Comedy Movies') {
                const request = await instance.get(requests.fetchComedyMovies);
                let movieData = request.data.results.filter((movie => movie.id == id))
                getMovies(movieData[0])
                return request
            }else if (title === 'Horror Movies') {
                const request = await instance.get(requests.fetchHorrorMovies);
                let movieData = request.data.results.filter((movie => movie.id == id))
                getMovies(movieData[0])
                return request
            }else if (title === 'Romance Movies') {
                const request = await instance.get(requests.fetchRomanceMovies);
                let movieData = request.data.results.filter((movie => movie.id == id))
                getMovies(movieData[0])
                return request
            }else if (title === 'Documentaries') {
                const request = await instance.get(requests.fetchDocumentaries);
                let movieData = request.data.results.filter((movie => movie.id == id))
                getMovies(movieData[0])
                return request
            }
            
        }
        fetchData();
        // console.log(title)



    })

 

    return (
        <Container>
            <Background>
                <img src={`${base_url}${path}`} />
            </Background>
            <ImageTitle>
                <h1>{movies.name || movies.original_title}</h1>
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
            <Description>
                {movies.overview}
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
opacity:0.7;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const ImageTitle = styled.div`
    margin-top: 30vh;
    margin-bottom: 2vh;
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
