import React from "react";
import PostComment from "./PostComment";
import ViewComments from "./ViewComments";
import { useParams } from "react-router-dom";
import '../App.css'

const Comments = () => {
   // console.log("length", Object.keys({ comments }).length);
   const params = useParams();
   const newsId = params.newsId;
   const getCommentsKey = ["get-comments", newsId]

   return (
      <div className="ViewAllComments">
         <ViewComments getCommentsKey={getCommentsKey} />
         <PostComment getCommentsKey={getCommentsKey} />
      </div>
   );
}
export default Comments;