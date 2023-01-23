import React from "react";
import PostComment from "./PostComment";
import '../App.css'
import ViewComments from "./ViewComments";

export default function Comments() {
   // console.log("length", Object.keys({ comments }).length);

   return (
      <div>
         <div className="comments">
            <PostComment />
            <div className="ViewAllComments">
               <ViewComments/>
            </div>
         </div>
      </div>
   );
}
