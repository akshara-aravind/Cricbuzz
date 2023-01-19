import img from '../images/cricbuzzlogo.svg'
import '../App.css'
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
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchOutlined, UserOutlined } from '@ant-design/icons'

export default function Nav() {
    const [open, setOpen] = useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };
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
                <button className='CricBuzzBtn' onClick={handleClickToOpen}>Cricbuzz Plus</button>
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
                        <Button onClick={handleToClose} color="primary" autoFocus>
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}