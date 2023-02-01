import React from "react";
import useGetTodayMatches from "../hooks/useGetTodayMatches";
import useGetAllMatches from "../hooks/useGetAllMatches";
import useGetLiveNow from "../hooks/useGetLiveNow";
import { useState } from "react";

const All = () => {

    const [liveState, SetLiveState] = useState(false);
    const [todayState, SetTodayState] = useState(false);
    const { data, isLoading, isError, error } = useGetAllMatches();
    const { data: liveNow, isLoading: isLoading1, isError: isError1, error: error1 } = useGetLiveNow();
    const { data: matchToday, isLoading: isLoading2, isError: isError2, error: error2 } = useGetTodayMatches();

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    if (isLoading1) {
        return <h1>Loading</h1>
    }

    if (isError1) {
        return <h1>{error1.message}</h1>
    }

    if (isLoading2) {
        return <h1>Loading</h1>
    }

    if (isError2) {
        return <h1>{error2.message}</h1>
    }
    //  TODO: handle data loading and error cases

    // if (liveNow)
    //     console.log("live now matches are here", liveNow);
    // if (matchToday)
    //     console.log("today matches are here", matchToday);
    //     console.log("length", Object.keys({ liveNow }).length);

    let liveIds = liveNow?.data.map(
        match => match.AllMatchId
    )

    // console.log("Ids are here", liveIds);

    let todayIds = matchToday?.data.map(
        match => match.AllMatchId
    )

    // console.log("Ids are here", todayIds);

    const handleOnClickLive = () => {
        SetLiveState(true);
        SetTodayState(false);
    }

    const handleOnClickToday = () => {
        SetLiveState(false);
        SetTodayState(true);
    }

    const handleOnClickAll = () => {
        SetLiveState(false);
        SetTodayState(false);
    }

    const displayAll = () => {
        return (
            <div>
                {
                    data?.data.map(match => <div key={match.type}>
                        <div className="Matchtype">
                            <b>{match.type}</b>
                        </div>
                        {
                            match.details.map((details) =>
                                <div key={details.id}>
                                    <div className="MatchName" >
                                        {
                                            ((liveState && liveIds.indexOf(details.id) > -1) || (todayState && todayIds.indexOf(details.id) > -1)) ? <b>{details.name}</b> : <span>{details.name}</span>
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

    return (
        <div className='DisplayAll'  >
            <div className="AllButton">
                <button className="ButtonsInAll" onClick={handleOnClickAll}>All</button>
                <button className="ButtonsInAll" onClick={handleOnClickLive}>Live Now</button>
                <button className="ButtonsInAll" onClick={handleOnClickToday}>Today</button>
            </div>
            {displayAll()}
        </div>
    );
}

export default All;