import React from "react";
import '../App.css'
import axios from "axios";
import LoginEmailState from "../recoil/LoginEmailState";
import LoginState from "../recoil/LoginState";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";

let newsId;

const postComment = (comment) => {
    return axios.post('http://localhost:4000/Comments', comment)

}
const fetchUsers = () => {
    return axios.get('http://localhost:4000/Users');
}

export default function PostComment() {
    const [text, SetText] = useState();
    const login = useRecoilValue(LoginState);
    const email = useRecoilValue(LoginEmailState);
    const params = useParams();
    newsId = params.newsId;
    const LatestNewId = parseInt(newsId);
    const navigate = useNavigate();
    let UserId;
    const { data: users, isLoading: loading, isSuccess: success } = useQuery('User', fetchUsers)
    const { mutate } = useMutation(postComment)

    const handleSubmit = () => {
        const comment = { text, UserId, LatestNewId }
        if (login === true)
            mutate(comment);
        else
            navigate('/login');
    }
    {
        users?.data.map((users) => {
            if (users.email === email) {
                UserId = users.id;
            }
        })
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


