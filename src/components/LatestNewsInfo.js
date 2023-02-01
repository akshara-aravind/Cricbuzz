import React from "react";
import axios from "axios";
import LatestNewsWithImage from "./LatestNewsWithImage";
import Comments from "./Comments";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import '../App.css'

let newsId;

const fetchNews = async () => {
   return await axios.get(`http://localhost:4000/LatestNews/${newsId}`)
}

const LatestNewsInfo = () => {

   const params = useParams();
   newsId = params.newsId;
   const { data, isLoading, isSuccess, isError, error } = useQuery('LatestNewsInfo', fetchNews)

   if (isLoading) {
      return <h1>Loading</h1>
   }

   if (isError) {
      return <h1>{error.message}</h1>
   }

   return (
      <div className="LatestNewsPage">
         <div className="EachLatestNews">
            <h1>{data && data.data.news} </h1>
            <img src={data && data.data.image} alt='is Loading' />
            <p>{data && data.data.text}</p>
            <h2>COMMENTS</h2>
            <Comments />
         </div>
         <div className="LatestNewsPart2">
            <LatestNewsWithImage />
         </div>
      </div>
   );
}

export default LatestNewsInfo;
