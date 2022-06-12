const API_KEY = "b9b91c4f37e21754d2e929931f9598bb";
const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

}
export default requests