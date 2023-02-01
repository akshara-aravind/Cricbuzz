import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const LiveScoreSubNav = () => {
   return (
      <div className="LiveScoreSubNav">
         <h3>Live Cricket Score</h3>
         <div className="Live">
            <Link className="LiveScoreHeaderBtnDefault">Live</Link>
            <Link className="LiveScoreHeaderBtn">Recent</Link>
            <Link className="LiveScoreHeaderBtn">Upcoming</Link>
         </div>
      </div>
   );
}

export default LiveScoreSubNav;
