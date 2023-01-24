import img from '../images/cricbuzzlogo.svg'
import React from 'react';
import News from './News'
import More from './More';
import Rankings from './Rankings';
import Videos from './Videos';
import Teams from './Teams';
import Series from './Series';
import { NavLink } from 'react-router-dom';
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { useRecoilValue} from 'recoil';
import '../App.css'
import Subscription from './Subscription';
import LoginState from '../recoil/LoginState';

export default function Nav() {
    const login=useRecoilValue(LoginState);
    return (
        <div>
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
                <Subscription />
                <SearchOutlined className='Search' />
                <NavLink to={login?'/profile':'/login'}><UserOutlined className='User' /></NavLink>
            </div>
        </div>
        </div>
    );
}