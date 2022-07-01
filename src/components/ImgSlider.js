import React, { Component, useState, useEffect } from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import instance from '../adaxios';
import {Link} from 'react-router-dom';
function ImgSlider({ fetchUrl, title }) {


    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results.slice(3,6))
            return request
        }

        fetchData()
        console.log(movies)

    }, [])
    let settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }



    return (
        <Carousel {...settings}>
            {movies.map(movie => (
                <Link key={movie.id}
                to={{pathname:`/detail/${movie.id}`}}
                state={{
                    id:`${movie.id}`,
                    name:`${movie.name}`,
                    image:`${movie.poster_path}`,
                    description:`${movie.overview}`
                }}
                >
                    <Wrap>
                        <img src={`${base_url}${movie.poster_path}`} alt={movie.name}></img>
                    </Wrap>
                </Link>
               
                ))}
        </Carousel>
    )

}
const Carousel = styled(Slider)`
margin-top:70px;
ul li button{
    &:before{
        font-size:10px;
        color:rgb(150, 158, 171)
    }
}
li.slick-active button:before{
    color:white;
}
    .slick-list{
        overflow:visible;
    }
    button{
        z-index:1;
    }
`;
const Wrap = styled.div`
border: 4px solid transparent;
    height:35vh;
    width:100%;
    box-shadow: 10px 10px 20px rgb(0 0 0 / 69%);
    img{    
    border-radius:5px;
    width:100%;
    height:100%;
    object-fit:cover;
    }
`;
export default ImgSlider
