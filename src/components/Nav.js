import img from '../images/cricbuzzlogo.svg'
import React from 'react';
import News from './News'
import More from './More';
import Rankings from './Rankings';
import Videos from './Videos';
import Teams from './Teams';
import Series from './Series';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import SubscribeState from '../recoil/SubscribeState';
import LoginState from '../recoil/LoginState';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import '../App.css'


export default function Nav() {
    const [open, setOpen] = useState(false);
    const [subscribe, SetSubscribe] = useRecoilState(SubscribeState);
    const login = useRecoilValue(LoginState);
    const navigate = useNavigate();

    const handleClickToOpen = () => {
        if (login)
            setOpen(true);
        else
            navigate('/login');

    };

    const handleToClose = () => {
        setOpen(false);
    };
    const handleToSubscribe = () => {
        setOpen(false);
        SetSubscribe(true);

    }
    return (
        <div className='Header'>
            <div className='Logo'>
                <NavLink to='/'><img src={img} alt='Not loading' /></NavLink>
            </div>
            <div className='HeaderItems'>
                <NavLink to='/livescore' className='HeaderEachItem'>Live Scores</NavLink>
                <NavLink to='/schedule' className='HeaderEachItem'>Schedule</NavLink>
                <NavLink to='/archives' className='HeaderEachItem'>Archives</NavLink>
                <News />
                <Series />
                <Teams />
                <Videos />
                <Rankings />
                <More />
                {!subscribe && <button className='CricBuzzBtn' onClick={handleClickToOpen}>Cricbuzz Plus</button>}
                <SearchOutlined className='Search' />
                <NavLink to='/login'><UserOutlined className='User' /></NavLink>
                <Dialog open={open} onClose={handleToClose} >
                    <DialogTitle>
                        The best of cricket for the greatest fan of Cricket
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Get 15 Subscriptions with 1 Plan and save INR 10000!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleToClose} color="primary" autoFocus>
                            Close
                        </Button>
                        <Button onClick={handleToSubscribe} color="primary" autoFocus>
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}