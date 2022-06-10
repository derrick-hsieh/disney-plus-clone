import React, { Component } from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
     function ImgSlider(){
        let settings = {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            slidesToScroll:1,
            autoPlay:true,
        }
    
    

        return (
            <Carousel {...settings}>
                <Wrap>
                    <img src="/images/slider-badging.jpg"></img>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badging.jpg"></img>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badging.jpg"></img>
                </Wrap>
            </Carousel>
        )
        
}
const Carousel = styled(Slider)`
margin-top:20px;
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
    img{    
    border-radius:5px;
    width:100%;
    height:100%;
    box-shadow:rgb(0 0 0 / 69% ) 0px 25px 30px -10px,
    box-shadow:rgb(0 0 0 / 75%) 0px 15px 20px -10px;
    }
`;
export default  ImgSlider
