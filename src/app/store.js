import {configureStore} from '@reduxjs/toolkit'
import movieReducer, { setMovies, reHydrateStore, localStorageMiddleware } from  '../movie-slice/movieSlice'
const store =  configureStore({
    reducer:{
        movie:movieReducer
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(localStorageMiddleware),
})

export default store