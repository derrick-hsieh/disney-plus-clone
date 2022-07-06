import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components';
import  { Link,useParams, useLocation, Outlet, useNavigate } from 'react-router-dom';
import instance from '../adaxios';
import requests from '../requests';
import { setMovies }from '../movie-slice/movieSlice'
import {selectMovies} from '../movie-slice/movieSlice'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';


function Detail({ }) {
    const dispatch = useDispatch()
    const location = useLocation();
    let watchList = useSelector(selectMovies);
    const { id } = useParams();
    const navigate = useNavigate();
    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, getMovies] = useState([])
    const [showIcon, setShowIcon] = useState(false)

    useEffect(() => {
        async function getDetail(){
           getMovies(location.state)
          
        }
        async function fetchWatchListMovie(){
           watchList.map(movie=>
                getMovies(movie)
            )
            if(watchList.find(v=>v.id == id)){
                setShowIcon(true)
            }
        }  
        fetchWatchListMovie(); 
        getDetail();
        
        console.log(location)
        console.log(id)
    },[])
    
    const addToList=(movie)=>{
        if( watchList.find(v=>v.id == id)){
            setShowIcon(!showIcon)
            
         const cancelList =  watchList.filter(v=> v.id !== id)
        dispatch(setMovies(cancelList))
           
        }else{
            watchList=[...watchList,movie]
            dispatch(setMovies(watchList))
            setShowIcon(true)
        }
        console.log(watchList)
        
           
    }

 

    return (
        <Container>
            <Background>
                <img src={`${base_url}${movies.image}`} />
            </Background>
            <ArrowBack>
                <ArrowBackIcon fontSize="large" onClick={()=>navigate(-1)}/>
            </ArrowBack>
            <ImageTitle>
                <h1>{movies.name || movies.original_title }</h1>
            </ImageTitle>
            <Controls>
                <Link to={`detail/${movies.id}/modal`}
                state={{background:location}}>
                    <PlayButton  >
                        <img src="/images/play-icon-white.png" />
                        <span>PLAY</span>
                    </PlayButton>
                </Link>
                <Outlet />
               
                <AddButton className={`${showIcon && "addedIcon"}`} onClick={()=>addToList(movies)}>
                    <span>+</span>
                    <CheckIcon fontSize="large" className="checkIcon" ></CheckIcon>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <Description>
                {movies.description}
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
const TrailerButton = styled.button`
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
const PlayButton = styled(TrailerButton)`
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
        color:white;
    }
    .checkIcon{
        display:none;
    }
    &.addedIcon{
        background:white;
        span{
            display:none
        }
        .checkIcon{
            color:green;
            display:unset;
        }
    }
    cursor:pointer;
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
const ArrowBack = styled.div`
display:flex;
padding-top:10px;
`
