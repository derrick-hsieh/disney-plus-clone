import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    movies:[]
}
const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state, action) =>{
            state.movies = action.payload;
        }
    }
})
//MIDDLEWARE
export const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      localStorage.setItem('applicationState', JSON.stringify(getState()));
      return result;
    };
  };
  
  export const reHydrateStore = () => {
    if (localStorage.getItem('applicationState') !== null) {
      return JSON.parse(localStorage.getItem('applicationState')); 
    }
  };
export const {setMovies} = movieSlice.actions
export const selectMovies = (state) => state.movie.movies
export default movieSlice.reducer
