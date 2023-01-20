import React from "react";
import FeaturedVideosInfo from "./FeaturedVideosInfo";
import LiveScoreData from "./LiveScoreData";
import '../App.css';

export default function LiveScoreHome() {
   return (
      <div className="LiveScoreHome">  
         <div className="LiveScoreHomePart1">
         <LiveScoreData/>
         </div>
         <div className="LiveScoreHomePart2">
         <FeaturedVideosInfo/>
         </div>
         
      </div>
   );
}
