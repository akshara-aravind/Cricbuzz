import LatestNewsWithImage from "./LatestNewsWithImage";
import React from "react";
import { Link } from "react-router-dom";

const MenRanking = () => {
    const arr = [1, 2, 3, 4, 5]
    return (
        <div className="MenRanking">
            <div className="RankingHeader">
                <h2>ICC Cricket Rankings - Men's Batting</h2>
                <div>
                    <Link className="LiveScoreHeaderBtnDefault">Batting</Link>
                    <Link className="LiveScoreHeaderBtn">Bowling</Link>
                    <Link className="LiveScoreHeaderBtn">All-rounders</Link>
                    <Link className="LiveScoreHeaderBtn">Teams</Link>
                </div>
            </div>
            <div className="Ranks">
                <div className="Rankings">
                    <div className="RankingBtn">
                        <button className="League">TEST</button>
                        <button className="Domestic">ODI</button>
                        <button className="Domestic">T20</button>
                    </div>
                    <div className="Heading">
                        <div className="Position"><b>Position</b></div>
                        <div className="Player"><b>Player</b></div>
                        <div className="Rating"><b>Rating</b></div>
                    </div>
                    {
                        arr.map((arr) => {
                            return (
                                <div key={arr}>
                                    <div className="ListOfPlayers">
                                        <div className="SerialNumber">{arr}</div>
                                        <div className="PlayerImage"><img src={'https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/9/2022_9$largeimg_2027448864.JPG'} alt='Not loading' /></div>
                                        <div className="NameOfPlayer">
                                            <b>Virat Kohli<br /></b>
                                            INDIA
                                        </div>
                                        <div className="PlayerRating">950
                                        </div>
                                    </div>
                                </div>);
                        })
                    }

                </div>
                <div className="LatestNewsInRanking">
                    <LatestNewsWithImage />
                </div>
            </div>
        </div>
    );
}

export default MenRanking;
