import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import '../App.css'

let newsId;

const fetchComments = () => {
    return axios.get(`http://localhost:4000/LatestNews/${newsId}?_embed=Comments`)

}

export default function ViewComments() {
    const params = useParams();
    newsId = params.newsId;
    const [viewcomments, SetviewComments] = useState(false);
    const { data: comments } = useQuery('Comments', fetchComments);

    const HandleOnClick = () => {
        SetviewComments(!viewcomments);
    }

    return (
        <div>
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
    );
}
