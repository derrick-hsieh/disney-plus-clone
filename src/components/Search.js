import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import instance from '../adaxios';
import requests from '../requests';
import { getAllMovies} from '../api-service/api';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


function Search() {
    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, getMovies] = useState([])
    const [searchInput, getSearchInput]= useState("")
    const [popularMovies, showPopularMovies] = useState([])
    useEffect(() => {
        async function popularMovies() {
            const request = await instance.get(requests.searchPopularMovies)
            showPopularMovies(request.data.results.filter(v => v.poster_path !== null))
            return request
        }
        popularMovies();
    }, [requests.searchPopularMovies])


    async function searchMovies(value) {
        const params =value || "noInputInsearchBar"
        getSearchInput(params)
        const request = await getAllMovies(params)
        getMovies(request.data.results.filter(v => v.poster_path !== null))
        return request
    }


    return (

        <Container>
            <Searchbar>
                <input placeholder="Search by name"
                    type="text"
                    onChange={(e) => searchMovies(e.target.value)}
                ></input>
            </Searchbar>
            {searchInput? null : <Popular><h1>Popular Movies</h1></Popular>}
            <Fade bottom>
            <Content>
          
                 {(searchInput? movies : popularMovies).map(movie => (
                        <Link
                            key={movie.id}
                            to={{
                                pathname: `/detail/${movie.id}`,
                            }}
                            state={{
                                id: `${movie.id}`,
                                name: `${movie.name || movie.original_title || movie.title}`,
                                image: `${movie.poster_path}`,
                                description: `${movie.overview}`
                            }}
                        >
                            <Wrap >
                                <img src={`${base_url}${movie.poster_path}`}></img>
                            </Wrap>
                        </Link>
                    ))
                }
               

            </Content>
            </Fade>
        </Container>
    )
}

export default Search
const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding: 30px 0;
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
const Content = styled.div`
    position:relative;
    padding:80px 30px 0 30px;
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(5,minmax(0,1fr));
    @media(max-width:900px){
        grid-template-columns: repeat(4,minmax(0,1fr));
    }
    @media(max-width:500px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
    `
const Popular =styled.div`
// position:absolute;
// top:10px;
// left:20px;
padding:80px 30px 0px 30px;
margin-bottom:-50px;
`
const Wrap = styled.div`
height:100%;
border-radius:10px;
cursor:pointer;
box-shadow: 10px 10px 20px rgb(0 0 0 / 69%);
border:2px solid  rgba(249, 249, 249, 0.1);
overflow:hidden;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        border-color:rgba(249, 249, 249, 0.8);
        transform:scale(1.05);
        transition: all 250ms;
    }
`
const Searchbar = styled.div`
    display:flex;
    position: absolute;
    top: 0px;
    width: 100vw;
    input{
    background: rgb(75, 78, 90);
    width: 100%;
    outline: none;
    border: none;
    font-size: 30px;
    color: white;
    padding: 20px;
    height: 80px;
    }
    
`
