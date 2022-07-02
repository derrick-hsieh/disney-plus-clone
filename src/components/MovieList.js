import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import { selectMovies } from '../movie-slice/movieSlice'
import  { Link, useLocation } from 'react-router-dom';
function MovieList() {
    const base_url = "https://image.tmdb.org/t/p/original"
  const watchList = useSelector(selectMovies)

  console.log(watchList)
 
    return (
        <Container>
            <Content>
                {
                    watchList.map(movie=>(
                        <Link  key={movie.name}  
                        to={{pathname:`/detail/${movie.id}`}}
                        state={{
                            id:`${movie.id}`,
                            name:`${movie.name}`,
                            image:`${movie.image}`,
                            description:`${movie.overview || movie.description}`
                        }}
                        >
                            <Wrap key={movie.id}>
                                <img src={`${base_url}${movie.image}`} alt={movie.name}/>
                            </Wrap>
                        </Link>
                    ))
                }
            </Content>
        </Container>
    )
}

export default MovieList
const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding: 30px calc(3.5vw + 5px);
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