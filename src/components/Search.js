import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import instance from '../adaxios';
import requests from '../requests';
import { getAllMovies } from '../api-service/api';
import  { Link } from 'react-router-dom';


function Search() {
    const base_url = "https://image.tmdb.org/t/p/original"
     const [movies, getMovies] = useState([])
    useEffect(() => {
        async function fetchData(){
            const params = "s"
            const request = await getAllMovies(params)
            console.log(request)
            getMovies(request.data.results)
             
         
            return request
        }
        fetchData();
        
        
    }, [requests])
    console.log(movies)
    return (
        
        <Container>
            <Searchbar>
                <input placeholder="Search by name"></input>
            </Searchbar>
            <Content>
                {
                    movies.map(movie=>(
                    <Link 
                        key={movie.id} 
                        to={{
                            pathname:`/detail/${movie.id}`,
                            state:{
                                title:movie.title,
                                path:movie.poster_path,
                            }
                        }}
                        >
                     <Wrap >
                            <img src={`${base_url}${movie.poster_path}`}></img>
                        </Wrap>
                    </Link>
                       
                    )

                    )
                }
            
            </Content>
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
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(5,minmax(0,1fr));`
const Wrap = styled.div`
height:90%;
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
