import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

export default function LiveScoreSubNav() {
   return (
      <div className="LiveScoreSubNav">
         <h3>Live Cricket Score</h3>
         <div className="LiveScoreSubNav">
            <Link className="LiveScoreHeaderBtnDefault">Live</Link>
            <Link className="LiveScoreHeaderBtn">Recent</Link>
            <Link className="LiveScoreHeaderBtn">Upcoming</Link>
         </div>
      </div>
   );
}
