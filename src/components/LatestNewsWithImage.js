import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import '../App.css'

const arr = [1, 2, 3, 4, 5];

const fetchLatestNews = async () => {
    return await axios.get('http://localhost:4000/LatestNews')
}

const LatestNewsWithImage = () => {

    const { data: news, isError, isLoading, error } = useQuery('LatestNews', fetchLatestNews);

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const displayNews = () => {
        return (
            <div>
                {
                    arr.map((arr) => (
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

    return (
        <div>
            <div className="LatestNewsPart2Title">LATEST NEWS</div>
            {displayNews()}
        </div>
    );
}

export default LatestNewsWithImage;
