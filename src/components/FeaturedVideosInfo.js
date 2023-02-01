import React, { useState } from "react";
import axios from "axios";
import LoginState from "../recoil/LoginState";
import SubscribeState from "../recoil/SubscribeState";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { Modal } from 'antd';
import '../App.css'

const fetchVedios = async () => {
    return await axios.get('http://localhost:4000/videos')
}

const FeaturedVideosInfo = () => {
    
    const { data: arr, isError, isLoading, error } = useQuery('Vedios', fetchVedios)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const login = useRecoilValue(LoginState)
    const [subscribe, setSubscribe] = useRecoilState(SubscribeState)

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const handleOk = () => {
        setOpen(false);
        setSubscribe(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className="FeaturedVideosList">
            <div className="FeaturedMatchesTitle">FEATURED VIDEOS</div>
            <div >
                {
                    arr.data.map((arr) => {
                        return (
                            <div key={arr.id} className="ImageInFeaturedVedios">
                                <img src={arr.image} alt="is Loading" onClick={() => {
                                    if (login && subscribe)
                                        navigate(`/videos/${arr.id}`);
                                    else if (!login)
                                        navigate('/login')
                                    else
                                        setOpen(true);
                                }
                                } />
                                <h3>{arr.title}</h3>
                                <div>{arr.time}</div>
                            </div>
                        )
                    })
                }
            </div>
            {
                login && !subscribe && <div className="HeaderItems">
                    <Modal title=" The best of cricket for the greatest fan of Cricket" open={open} onOk={handleOk} onCancel={handleCancel}>
                        <p> Get 15 Subscriptions with 1 Plan and save INR 10000!</p>
                    </Modal>
                </div>
            }
        </div>
    );
}

export default FeaturedVideosInfo;