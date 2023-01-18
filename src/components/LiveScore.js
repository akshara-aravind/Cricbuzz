import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import SubNav from "./SubNav";


export default function LiveScore() {
   return (
      <div>
         <div className="CricbuzzMainPage">
            <Nav />
            <SubNav />
            Livescore
         </div>
         <Footer />
      </div>
   );
}
