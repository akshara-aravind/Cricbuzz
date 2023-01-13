import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
const fetchNews = () => {
    return axios.get('http://localhost:4000/LatestNews')
}
const arr = [1, 2, 3, 4, 5, 6];
export default function LatestNews() {
    const { data } = useQuery('LatestNews',fetchNews)
    return (
        <div className='LatestNews'>
        <div className="FeaturedMatchesTitle">LATEST NEWS</div>
        {arr.map((arr) => (
            <div key={arr}>
                {data?.data.map(news => {
                    return (
                        <div key={news.id} className='EachNews'>
                            <Link className="NewsLink">
                                {news.news}
                            </Link>
                            <div style={{ color: 'gray' }}>  {news.time}</div>
                        </div>
                    )
                })}
            </div>
        ))}



    </div>);
}