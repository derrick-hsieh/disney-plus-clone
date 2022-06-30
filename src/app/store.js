import {configureStore} from '@reduxjs/toolkit'
import movieReducer from  '../movie-slice/movieSlice'
export default configureStore({
    reducer:{
        movie:movieReducer
    }
})