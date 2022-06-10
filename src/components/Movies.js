import React from 'react'
import styled from 'styled-components';

function Movies() {
    return (
        <Contaienr>
            <h4>Recommended</h4>
            <Content>
                <Wrap>
                    <img src="https://wallpaper.dog/large/20509438.jpg"></img>
                </Wrap>
                <Wrap>
                    <img src="https://wallpaper.dog/large/20509438.jpg"></img>
                </Wrap>
                <Wrap>
                    <img src="https://wallpaper.dog/large/20509438.jpg"></img>
                </Wrap>
                <Wrap>
                    <img src="https://wallpaper.dog/large/20509438.jpg"></img>
                </Wrap>
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