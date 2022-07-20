import instance from "../adaxios";
import requests, { request_url } from "../requests";


export  const getAllMovies = (query)=>{
   
    return instance.get(`${request_url.searchMovies}${query}&page=1&include_adult=false`)
   }


   



