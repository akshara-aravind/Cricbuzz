import axios from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
const fetchMatch = () => {
    return axios.get('http://localhost:4000/AllMatches');
}
const fetchLiveNow = () => {
    return axios.get('http://localhost:4000/LiveNowMatches');
}
const fetchMatchToday = () => {
    return axios.get('http://localhost:4000/TodayMatches');
}
export default function All() {
    const [livestate, SetLivestate] = useState(false);
    const [todaystate, SetTodaystate] = useState(false);
    const { data } = useQuery('AllMatches', fetchMatch);
    const { data: livenow } = useQuery('Livenowmatch', fetchLiveNow);
    const { data: matchtoday } = useQuery('Todaymatch', fetchMatchToday);
    // if (livenow)
    //     console.log("live now matches are here", livenow);
    // if (matchtoday)
    //     console.log("today matches are here", matchtoday);
    //     console.log("length", Object.keys({ Livenow }).length);
    let liveids = [];
    {
        liveids =
            livenow?.data.map(
                match => match.AllMatchId
            )
    }
    // console.log("ids are here", liveids);
    let todayids = [];
    {
        todayids =
            matchtoday?.data.map(
                match => match.AllMatchId
            )
    }
    // console.log("ids are here", todayids);
    const handleOnClickLive = () => {
        SetLivestate(true);
        SetTodaystate(false);
    }
    const handleOnClickToday = () => {
        SetLivestate(false);
        SetTodaystate(true);
    }
    const handleOnClickAll = () => {
        SetLivestate(false);
        SetTodaystate(false);
    }

    return (
        <div className='DisplayAll'  >
            <div className="AllButton">
                <button className="ButtonsInAll" onClick={handleOnClickAll}>All</button>
                <button className="ButtonsInAll" onClick={handleOnClickLive}>Live Now</button>
                <button className="ButtonsInAll" onClick={handleOnClickToday}>Today</button>
            </div>
            {data?.data.map(match => <div key={match.type}>
                <div className="Matchtype">
                    <b>{match.type}</b>
                </div>
                {
                    match.details.map((details) =>
                        <div key={details.id}>
                            <div className="MatchName" >
                                {
                                    ((livestate && liveids.indexOf(details.id) > -1) || (todaystate && todayids.indexOf(details.id) > -1)) ? <b>{details.name}</b> : <span>{details.name}</span>
                                }

                            </div>
                            <div className="MatchTypeInAll">
                                {details.matchType}
                            </div>
                        </div>
                    )
                }


            </div>
            )}


        </div>
    );
}