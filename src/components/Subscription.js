import React from "react";
import LoginState from '../recoil/LoginState';
import SubscribeState from '../recoil/SubscribeState';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import '../App.css'

const Subscription = () => {

    const [open, setOpen] = useState(false);
    const login = useRecoilValue(LoginState);
    const [subscribe, SetSubscribe] = useRecoilState(SubscribeState);
    const navigate = useNavigate();

    const handleClickToOpen = () => {
        if (login)
            setOpen(true);
        else
            navigate('/login');
    };

    const handleOk = () => {
        setOpen(false);
        SetSubscribe(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className="HeaderItems">
            {!subscribe && <button className='CricBuzzBtn' onClick={handleClickToOpen}>Cricbuzz Plus</button>}
            <Modal title=" The best of cricket for the greatest fan of Cricket" open={open} onOk={handleOk} onCancel={handleCancel}>
                <p> Get 15 Subscriptions with 1 Plan and save INR 10000!</p>
            </Modal>
        </div>
    );
}

export default Subscription;
