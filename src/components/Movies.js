import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
// import axios from '../axios'
// import axios from 'axios'
import instance from '../adaxios';

function Movies({title, fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, getMovies] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            getMovies(request.data.results)
            return request
        }
        fetchData();

    },[fetchUrl])
    return (
        <Contaienr>
            <h4>{title}</h4>
            <Content>
                {movies.map(movie=>(
                    <Wrap key={movie.id}>
                         <img  src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                    </Wrap>
                ))}
            </Content>
        </Contaienr>
    )
}

export default Movies
const Contaienr = styled.div`

`
const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
max-height:140px;
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