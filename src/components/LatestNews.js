import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchNews = async () => {
    return await axios.get('http://localhost:4000/LatestNews')
}

const arr = [1, 2, 3, 4, 5, 6];

const LatestNews = () => {
    const { data, isLoading, isError, error } = useQuery('LatestNews', fetchNews)

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const newsArticles = () => {
        return (
            <div>
                {
                    arr.map((arr) => (
                        <div key={arr}>
                            {data?.data.map(news => {
                                return (
                                    <div key={news.id} className='EachNews'>
                                        <Link className="NewsLink" to={`latestnews/${news.id}`}>
                                            {news.news}
                                        </Link>
                                        <div style={{ color: 'gray' }}>  {news.time}</div>
                                    </div>
                                );
                            })}
                        </div>
                    ))
                }
            </div>
        );
    }

    //todo:fix this
    return (
        <div className='LatestNews'>
            <div className="FeaturedMatchesTitle">LATEST NEWS</div>
            {newsArticles()}
        </div>
    );
}

export default LatestNews;