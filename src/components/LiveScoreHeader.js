import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function LiveScoreHeader() {
    return (
        <div className="LiveScoreHeader">
            
                <Link className="LiveScoreHeaderBtnDefault">Current Matches</Link>
                <Link className="LiveScoreHeaderBtn">Current & Future Series</Link>
                <Link className="LiveScoreHeaderBtn">Matches By Day</Link>
                <Link className="LiveScoreHeaderBtn">Teams</Link>
                <Link className="LiveScoreHeaderBtn">Series & Archive</Link>
           
        </div>
    );
}
