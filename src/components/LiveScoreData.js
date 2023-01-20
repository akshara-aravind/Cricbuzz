import React from "react";
import '../App.css'

export default function LiveScoreData() {
   return (
      <div className="LiveScoreData">
         <button className="League">League</button>
         <button className="Domestic">Domestic</button>
         <div className="TitleOfMatch">
            BIG BASH LEAGUE 2022-23
         </div>
         <div className="CurrentMatchDetails">
            <b>Adelaide Strikers vs Perth Scorchers,</b>   48th Match<br />
         </div>
         <div className="CurrentMatchVenue">
            Today  •  11:00 AM at Adelaide, Adelaide Oval
         </div>
         <div className="ScoreOfTheMatch">
            ADS 92(17 Ovs)<br />
            PRS 86-2(9.3 Ovs)<br />
            <div className="MatchStatus">
               Perth Scorchers need 5 runs in 58 balls
            </div>
         </div>
         <div>
            <button className="LiveScoreBtn">Live Score</button>
            <button className="LiveScoreBtn">Scorecard</button>
            <button className="LiveScoreBtn">Full Commentary</button>
            <button className="LiveScoreBtn">News</button>
         </div>
         <div className="TitleOfMatch">
            SUPER SMASH 2022-23
         </div>
         <div className="CurrentMatchDetails">
            <b>Wellington vs Auckland,</b>  19th Match<br />
         </div>
         <div className="CurrentMatchVenue">
            Today  •  8:40 AM at Auckland, Eden Park Outer Oval
         </div>
         <div className="ScoreOfTheMatch">
            WEL 153-6(20 Ovs)<br />
            PRS 86-2(9.3 Ovs)<br />
            <div className="MatchStatus">
               Auckland won by 2 wkts
            </div>
         </div>
         <div>
            <button className="LiveScoreBtn">Live Score</button>
            <button className="LiveScoreBtn">Scorecard</button>
            <button className="LiveScoreBtn">Full Commentary</button>
            <button className="LiveScoreBtn">News</button>
         </div>
      </div>
   );
}
