import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function FeaturedVideosInfo() {
    const navigate = useNavigate();
    const arr = [
        {
            id: 1,
            image: "https://www.youtube.com/embed/XOrnGa2gqzc",
            title: "Suryakumar Yadav more consistent than AB de Villiers: Ajay Jadeja",
            time: "2h ago"
        },
        {
            id: 2,
            image: "https://www.youtube.com/embed/Hn7_WaU9Bz4",
            title: "2nd T20I India Vs Sri Lanka Match Today | India Vs Sri Lanka Live Match Today | English News Live",
            time: "6h ago"
        },
        {
            id: 3,
            image: "https://www.youtube.com/embed/dKdujAgU3v8",
            title: "Virat Kohli Century Highlights: Virat Kohli's 45th Century | IND vs SL 1st ODI | Kohli Batting Today",
            time: "12h ago"
        }
    ];
    const handleOnclick = () => {
        // navigate('/login');
        console.log("vedio is playing");
    }

    return (
        <div className="FeaturedVideosList">
            <div className="FeaturedMatchesTitle">FEATURED VIDEOS</div>
            <div>
                {
                    arr.map(arr => (
                        <div key={arr.id} className="EachFeaturedVideo">  
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={arr.image}
                                    title="Youtube Player"
                                    allowFullScreen
                                />
                            <h3>{arr.title}</h3>
                            <div style={{ color: 'gray' }}>{arr.time}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}



