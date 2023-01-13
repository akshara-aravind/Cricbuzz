import React from 'react'
import '../App.css'
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

export const Home = () => {
    return (
        <div>
            <div className='HomePage'>
                <div className='FeaturedMatches'>
                    <div className='FeaturedMatchesTitle'>
                        <h4>FEATURED MATCHES</h4>
                    </div>
                    <div className='FeaturedMatchdescription'>
                        <Carousel itemsToShow={4} itemsToScroll={4}>
                            <div className='FeaturedMatch'>
                                <div><b>Pakistan</b></div>
                                <div><b>New Zealand</b></div>
                                <div className='TimeOfMatch'>Today,03:00 PM</div>
                            </div>
                            <div className='FeaturedMatch'>
                                <div><b>Hobart Hurricanes</b></div>
                                <div><b>Melbourne Stars</b></div>
                                <div className='TimeOfMatch'>Today,01:45 PM</div>
                            </div>
                            <div className='FeaturedMatch'>
                                <div><b>Comilla Victorians</b></div>
                                <div><b>Sylhet Strikers</b></div>
                                <div className='TimeOfMatch'>Today,01:00 PM</div>
                            </div>
                            <div className='FeaturedMatch'>
                                <div><b>AUS 475-4 d</b></div>
                                <div><b>RSA 255 & 106-2(f/o)</b></div>
                                <div className='TimeOfMatch' style={{ color: 'blue' }}>Match drawn</div>
                            </div>
                            <div className='FeaturedMatch'>
                                <div><b>IND 228-5(20)</b></div>
                                <div><b>SL  137(16.4)</b></div>
                                <div className='TimeOfMatch' style={{ color: 'blue' }}>India won by 91 runs</div>
                            </div >
                            <div className='FeaturedMatch'>
                                <div><b>Chattogram Challengers</b></div>
                                <div><b>Khulna Tigers</b></div>
                                <div className='TimeOfMatch' >Today,06:00 PM</div>
                            </div>
                            <div className='FeaturedMatch'></div>
                            <div className='FeaturedMatch'></div>
                        </Carousel>

                    </div>
                </div>
            </div>
            <HomePage />

        </div>
    );
} 