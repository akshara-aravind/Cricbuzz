import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import SubNav from "./SubNav";
import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

let newsId;

const fetchNews = () => {
   return axios.get(`http://localhost:4000/LatestNews/${newsId}`)
}

const fetchComments = () => {
   return axios.get(`http://localhost:4000/LatestNews/${newsId}?_embed=Comments`)

}

const postComment = (comment) => {
   return axios.post('http://localhost:4000/Comments', comment)

}


export default function LatestNewsInfo() {
   const [viewcomments, SetviewComments] = useState(false);
   const params = useParams();
   newsId = params.newsId;
   const LatestNewId = parseInt(newsId);
   const UserId = 1;
   const [text, SetText] = useState();

   const { data, isLoading, isSuccess } = useQuery('LatestNewsInfo', fetchNews)
   const { data: comments, isLoading: loading, isSuccess: success } = useQuery('Comments', fetchComments)
   const queryClient = useQueryClient()
   const { mutate } = useMutation(postComment, {
      onSuccess: () => {
         queryClient.invalidateQueries('Comments')
      },
   })

   if (loading)
      // console.log("loading");
      if (success) {
         // console.log(newsId, comments);
         // console.log("length", Object.keys({ comments }).length);
      }

   const HandleOnClick = () => {
      SetviewComments(!viewcomments);
   }

   const handleSubmit = () => {
      const comment = { text, UserId, LatestNewId }
      mutate(comment);
   }
   // console.log(LatestNewId,UserId);

   return (
      <div>
         <div className="CricbuzzMainPage">
            <Nav />
            <SubNav />
            <div className="EachLatestNews">
               <h1>{data && data.data.news} </h1>
               <img src={data && data.data.image} alt='is Loading' />
               <p>{data && data.data.text}</p>
               <h2>COMMENTS</h2>
               <div className="comments">
                  <div className="PostComment">
                     <form onSubmit={handleSubmit}>
                        <label>
                           <textarea className="TextArea" value={text} placeholder="Add a comment...." onChange={e => SetText(e.target.value)} />
                        </label>
                        <br />
                        <input type="submit" value="Comment" className="Submit" />
                     </form>
                  </div>
                  <div className="ViewAllComments">
                     <button onClick={HandleOnClick} className='CommentBtn'>view all comments</button>
                     {
                        viewcomments &&
                        <div className="ViewComments">
                           {comments?.data.Comments.map((comments) => {
                              return (
                                 <div className="EachComment" key={comments.id}>
                                    {comments.text}
                                 </div>
                              )
                           })}
                        </div>
                     }
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
