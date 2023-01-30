import React from "react";
import LatestNewsWithImage from "./LatestNewsWithImage";
import { Link } from "react-router-dom";

export default function WomenRanking() {
    const arr = [1, 2, 3, 4, 5];
    return (
        <div className="MenRanking">
            <div>
                <h2>ICC Cricket Rankings - Women's Batting</h2>
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
                                <div>
                                    <div className="ListOfPlayers">
                                        <div className="SerialNumber">{arr}</div>
                                        <div className="PlayerImage"><img src={'https://static.india.com/wp-content/uploads/2021/09/Smriti-Mandhana-PTI.jpg?impolicy=Medium_Widthonly&w=700&h=467'} alt='Not loading' /></div>
                                        <div className="NameOfPlayer">
                                            <b>Smriti <br /></b>
                                            INDIA
                                        </div>
                                        <div className="PlayerRating">950
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        )}

                </div>
                <div className="LatestNewsInRanking">
                    <LatestNewsWithImage />
                </div>
            </div>
        </div>
    );
}
