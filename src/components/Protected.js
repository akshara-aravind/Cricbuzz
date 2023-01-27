import React from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import LoginState from "../recoil/LoginState";
import SubscribeState from "../recoil/SubscribeState";

export default function Protected(props) {
    const login = useRecoilValue(LoginState);
    const subscribe = useRecoilValue(SubscribeState);
    const CricbuzzVideos = props.CricbuzzVideos
    const navigate = useNavigate()
    useEffect(() => {
        if (!login)
            navigate('/login');
        else if (!subscribe) {
            alert('Subscribe to Cricbuzz Plus to watch videos')
            navigate('/');
        }

    })
    return (
        <div>
            <CricbuzzVideos />
        </div>
    );
}
