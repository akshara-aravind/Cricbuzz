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
    const [viewComments, SetViewComments] = useState(false);
    const { data: comments, isError, isLoading, error } = useQuery('Comments', fetchComments);
    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const HandleOnClick = () => {
        SetViewComments(!viewComments);
    }

    return (
        <div>
            <button onClick={HandleOnClick} className='CommentBtn'>view all comments</button>
            {
                viewComments &&
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
