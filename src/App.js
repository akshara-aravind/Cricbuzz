import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
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
import './App.css';


const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
    <div className='CricbuzzMainPage'>
      <Nav/>
      <SubNav/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/livescore' element={<LiveScore />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/archives' element={<Archives />} />
          <Route path='/login' element={<Login />} />
          <Route path='/latestnews/:newsId' element={<LatestNewsInfo/>} />
        </Routes>
        </div>
        <Footer/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
