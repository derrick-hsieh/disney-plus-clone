const API_KEY = "b9b91c4f37e21754d2e929931f9598bb";
const query = "";
const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    searchMovies: `/search/movie?api_key=${API_KEY}&language=en-US&query=`,
    // searchMovies(query){
    //     return `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`

    // },
    // searchMovies: `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,

}
export const api_key = API_KEY
export const request_url = requests
export default requests