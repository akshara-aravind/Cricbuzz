import React from "react";
import axios from "axios";
import LoginEmailState from "../recoil/LoginEmailState";
import LoginState from "../recoil/LoginState";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import '../App.css'

let newsId;

const postComment = async (comment) => {
    return await axios.post('http://localhost:4000/Comments', comment)

}
const fetchUsers = async () => {
    return await axios.get('http://localhost:4000/Users');
}

const PostComment = ({ getCommentsKey }) => {
    const login = useRecoilValue(LoginState);
    const email = useRecoilValue(LoginEmailState);
    const params = useParams();
    const LatestNewId = parseInt(newsId);
    const queryClient = useQueryClient()
    const [text, SetText] = useState();
    const { data: users, isLoading, isError, error } = useQuery('User', fetchUsers)
    const { mutate } = useMutation(postComment)
    const navigate = useNavigate();
    newsId = params.newsId;
    let UserId;

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const getUserId = () => (users?.data.map((users) => {
        if (users.email === email) {
            UserId = users.id;
        }
    })
    )

    const handleSubmit = (event) => {
        event.preventDefault();
        getUserId();
        const comment = { text, UserId, LatestNewId }
        if (login === true)
            mutate(comment, {
                onSuccess: async () => {
                    await queryClient.refetchQueries(getCommentsKey)
                }
            });
        else
            navigate('/login');
        SetText('');
    }

    return (
        <div>
            <div className="PostComment">
                <form onSubmit={handleSubmit}>
                    <label>
                        <textarea className="TextArea" value={text} placeholder="Add a comment...." onChange={e => SetText(e.target.value)} />
                    </label>
                    <br />
                    <input type="submit" value="Comment" className="Submit" />
                </form>
            </div>
        </div>
    );
}

export default PostComment;