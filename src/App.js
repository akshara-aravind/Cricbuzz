import React from 'react';
import LiveScore from './components/LiveScore';
import Main from './components/Main';
import Schedule from './components/Schedule';
import Archives from './components/Archives';
import Login from './components/Login';
import LatestNewsInfo from './components/LatestNewsInfo';
import Nav from './components/Nav';
import SubNav from './components/SubNav';
import Footer from './components/Footer';
import WomenRanking from './components/WomenRanking';
import MenRanking from './components/MenRanking';
import Profile from './components/Profile';
import Protected from './components/Protected';
import { RecoilRoot } from 'recoil';
import { Route, Routes, useLocation } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import CricbuzzVideos from './components/CricbuzzVideos';

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div className='CricbuzzMainPage'>
          <RecoilRoot>
            {
              location.pathname !== '/login' &&
              <div>
                <Nav />
                <SubNav />
              </div>
            }

            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/livescore' element={<LiveScore />} />
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/archives' element={<Archives />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/women' element={<WomenRanking />} />
              <Route path='/men' element={<MenRanking />} />
              <Route path='/videos/:videosId' element=< Protected CricbuzzVideos={CricbuzzVideos}/> />
              <Route path='/latestnews/:newsId' element={<LatestNewsInfo />} />
            </Routes>
          </RecoilRoot>
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;









