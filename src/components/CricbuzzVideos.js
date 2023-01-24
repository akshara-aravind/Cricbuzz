import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import '../App.css'

let videosId;

const fetchVedio = () => {
   return axios.get(`http://localhost:4000/videos/${videosId}`);
}

export default function CricbuzzVideos() {
   const params = useParams();
   videosId = params.videosId;
   const { data, isError, isLoading, error } = useQuery('Vedio2', fetchVedio)
   if (isLoading) {
      return <h1>Loading</h1>
   }

   if (isError) {
      return <h1>{error.message}</h1>
   }

   // console.log(videosId);
   return (
      <div className="CricbuzzVideos">
         <iframe
            width="100%"
            height="315"
            src={data?.data.videos}
            title="Youtube Player"
            allowFullScreen
         />
         <h2>{data?.data.title}</h2>
      </div>
   );
}
