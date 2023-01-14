import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const fetchMatch = () => {
    return axios.get('http://localhost:4000/typeMatches');
}
export default function All() {
    const { data, isLoading, error } = useQuery('AllMatches', fetchMatch);
    if (data) {
        console.log("data is here", data);
    }
    if (isLoading) {
        console.log("is Loading");
    }
    if (error) {
        console.log("error");
    }

    return (
        <div className='DisplayAll'  >
            <button className="Allbutton">All</button>
            <button>Live Now</button>
            <button>Today</button>
            {data?.data.map(match => {
                return
                (
                <div key={match.matchType}>
                    {match.matchType}
                </div>
                );

            })}
        </div>
    );
}