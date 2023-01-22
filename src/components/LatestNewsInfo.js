import React from "react";
import axios from "axios";
import LoginEmailState from "../recoil/LoginEmailState";
import LoginState from "../recoil/LoginState";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import '../App.css'


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
const fetchUsers = () => {
   return axios.get('http://localhost:4000/Users');
}


export default function LatestNewsInfo() {

   const [viewcomments, SetviewComments] = useState(false);
   const [text, SetText] = useState();
   const email = useRecoilValue(LoginEmailState);
   const login = useRecoilValue(LoginState);
   const params = useParams();
   newsId = params.newsId;
   const LatestNewId = parseInt(newsId);
   const navigate = useNavigate();
   let UserId;

   const { data, isLoading, isSuccess } = useQuery('LatestNewsInfo', fetchNews)
   const { data: comments } = useQuery('Comments', fetchComments)
   const { data: users, isLoading: loading, isSuccess: success } = useQuery('User', fetchUsers)

   const { mutate } = useMutation(postComment)

   if (loading)
      console.log("loading");
   if (success) {
      // console.log(users);
      // console.log("length", Object.keys({ comments }).length);
   }

   {
      users?.data.map((users) => {
         if (users.email === email) {
            UserId = users.id;
         }
      })
   }

   // console.log(UserId);

   const HandleOnClick = () => {
      SetviewComments(!viewcomments);
   }

   const handleSubmit = () => {
      const comment = { text, UserId, LatestNewId }
      if (login === true)
         mutate(comment);
      else
         navigate('/login');
   }
   // console.log(LatestNewId,UserId);

   return (
      <div>
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
   );
}
