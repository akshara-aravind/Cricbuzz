import React from "react";
import '../App.css';

export default function LiveScoreSubNav() {
   return (
      <div className="LiveScoreSubNav">
         <h3>Live Cricket Score</h3>
         <div>
            <button className="LiveScoreHeaderBtnDefault">Live</button>
            <button className="LiveScoreHeaderBtn">Recent</button>
            <button className="LiveScoreHeaderBtn">Upcoming</button>
         </div>
      </div>
   );
}
