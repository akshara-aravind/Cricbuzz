import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchFeed = () => {
    return axios.get('http://localhost:4000/Matches')
}

const arr = [1, 2];

export default function Feed() {
    const { data, isError, isLoading, error } = useQuery('Feed', fetchFeed)
    if (isLoading) {
        return <h1>Loading</h1>
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }

    const displayFeed=()=> {
        return (
            <div>
                {
                    arr.map((arr) => (
                        <div key={arr}>
                            {
                                data?.data.map((feed) => {
                                    return <div key={feed.id} className="EachFeed">
                                        <Link className="FeedLink">
                                            <img src={feed.image} alt="is Loading" />
                                            <h2>{feed.headLines}</h2>
                                            <div className="Indetail"> {feed.indetail}</div>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    ))}
            </div>
        )
    }

    return (
        <div className="Feed">
        {displayFeed()}
        </div>
    );
}