import React from "react";
import '../App.css'
import axios from "axios";
import LoginEmailState from "../recoil/LoginEmailState";
import LoginState from "../recoil/LoginState";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { useQuery, useMutation , useQueryClient} from "react-query";
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
    const { data: users, isLoading, isError, error } = useQuery('User', fetchUsers)
    const queryClient=useQueryClient()
    const { mutate } = useMutation(postComment,{
        onSuccess:()=>{
            queryClient.invalidateQueries('Comments')
        }
    })
    
    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const handleSubmit = () => {
        const userId = getCurrentUserId()
        const comment = { text, userId, LatestNewId }
        if (login === true)
            mutate(comment);
        else
            navigate('/login');
    }

    const getCurrentUserId = () => {
        users?.data.map((users) => {
            if (users.email === email) {
                return users.id;
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


