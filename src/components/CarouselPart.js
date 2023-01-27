import React from "react";
import Carousel from 'react-elastic-carousel';
import useGetHomeMatches from "../hooks/useGetHomeMatches";
import '../App.css';


export default function CarouselPart() {
  const { data, isLoading, isError, error } = useGetHomeMatches();
  // console.log(data)
  // return <div>hello </div>  
  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }

  const fetchCarouselData = () => {
    return (
      <div>
        <Carousel>
          {data?.data.map((match, matchIndex) => (
            <div key={matchIndex} className='FeaturedMatchdescription'>

              {match.seriesMatches.map((series, seriesIndex) => (
                <div key={seriesIndex} className='FeaturedSeries'>

                  {
                    series.seriesAdWrapper.matches.map((matches, matchesIndex) => {
                      return (
                        <div key={matchesIndex} className='FeaturedMatch'>
                          <div><b>{matches.matchInfo.team1.teamSName} {matches.matchScore?.team1Score.inngs1?.runs}-{matches.matchScore?.team1Score.inngs1?.wickets}({matches.matchScore?.team1Score.inngs1?.overs})</b></div>
                          <div><b>{matches.matchInfo.team2.teamSName} {matches.matchScore?.team2Score?.inngs1?.runs}-{matches.matchScore?.team2Score?.inngs1?.wickets}({matches.matchScore?.team2Score?.inngs1?.overs})</b></div>
                          <div className='TimeOfMatch'>{matches.matchInfo.status}</div>
                        </div>
                      )
                    })
                  }
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    )
  }

  return (

    <div className='HomePage'>
      <div className='FeaturedMatches'>
        <div className='FeaturedMatchesTitle'>
          <h4>FEATURED MATCHES</h4>
        </div>
        <div >
          {fetchCarouselData()}
        </div>
      </div>
    </div>
  );
}
