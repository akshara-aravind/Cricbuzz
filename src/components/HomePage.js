import React from "react";
import FeaturedVideos from "./FeaturedVideos";
import LatestNews from "./LatestNews";
import Feed from "./Feed";

export default function HomePage() {
    return (
        <div className="HomePage2">
            <LatestNews />
            <Feed />
            <FeaturedVideos />
        </div>
    );
}