import React from "react";
import '../App.css'
import axios from "axios";
import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";

const arr = [1, 2, 3, 4, 5];

const fetchLatestNews = () => {
    return axios.get('http://localhost:4000/LatestNews')
 } 

export default function LatestNewsWithImage() {
    const { data: news } = useQuery('LatestNews', fetchLatestNews)
    return (
        <div>
            <div className="LatestNewsPart2Title">LATEST NEWS</div>
            {arr.map((arr) => (
                <div key={arr}>
                    {news?.data.map(news => {
                        return (
                            <div key={news.id} className='LatestNewsPart2EachNews'>
                                <img src={news.image} alt="is Loading" />
                                <div className="LatestNewsPart2EachNewsTitle">{news.news}</div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
