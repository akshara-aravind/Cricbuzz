import React from "react";
import FeaturedVideos from "./FeaturedVideos";
import LatestNews from "./LatestNews";
import Feed from "./Feed";

const HomePage = () => {
    return (
        <div className="HomePage2">
            <LatestNews />
            <Feed />
            <FeaturedVideos />
        </div>
    );
}

export default HomePage;