import React from "react";
import LiveScoreHeader from "./LiveScoreHeader";
import LiveScoreSubNav from "./LiveScoreSubNav";
import LiveScoreHome from "./LiveScoreHome"
import '../App.css';

export default function LiveScore() {
   return (
      <div className="LiveScorePage">  
          <LiveScoreHeader/>
          <LiveScoreSubNav/>
          <LiveScoreHome/>
      </div>
   );
}
