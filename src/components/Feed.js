import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchFeed = () => {
    return axios.get('http://localhost:4000/Matches')
}

const arr = [1, 2, 3];

export default function Feed() {
    const { data } = useQuery('Feed', fetchFeed)
    return (
        <div className="Feed">
            {arr.map((arr) => (
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
    );
}