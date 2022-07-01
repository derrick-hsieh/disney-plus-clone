import instance from "../adaxios";

import React, { Component } from 'react'
import requests, { request_url } from "../requests";


export  const getAllMovies = (query)=>{
   console.log(instance)
    return instance.get(`${request_url.searchMovies}${query}&page=1&include_adult=false`)
   }

   



