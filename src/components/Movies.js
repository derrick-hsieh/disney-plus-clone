import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import instance from '../adaxios';
import { Link, useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


function Movies({title, fetchUrl}) {
    // let location = useLocation();
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
            <Fade bottom>
            <h1>{title}</h1>
            </Fade>
            <Fade bottom>
            <Content>
                {movies.map(movie=>(
                    <Link  key={movie.id}  
                    to={{pathname:`detail/${movie.id}`}}
                    state={{
                        id:`${movie.id}`,
                        name:`${movie.name || movie.original_title || movie.title }`,
                        image:`${movie.poster_path}`,
                        description:`${movie.overview}`
                    }}
                    >
                    <Wrap key={movie.id}>
                         <img  src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                    </Wrap>
                    </Link>
                    
                ))}
            </Content>
            </Fade>
            
        </Contaienr>
       
    )
}

export default Movies
const Contaienr = styled.div`
    h1{
        margin:2vh;
    }
`
const Content = styled.div`
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