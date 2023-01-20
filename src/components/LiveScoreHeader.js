import React from "react";
import '../App.css';

export default function LiveScoreHeader() {
    return (
        <div className="LiveScoreHeader">
            <div >
                <button className="LiveScoreHeaderBtnDefault">Current Matches</button>
                <button className="LiveScoreHeaderBtn">Current & Future Series</button>
                <button className="LiveScoreHeaderBtn">Matches By Day</button>
                <button className="LiveScoreHeaderBtn">Teams</button>
                <button className="LiveScoreHeaderBtn">Series & Archive</button>
            </div>
        </div>
    );
}
