import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home'
import { QueryClientProvider, QueryClient } from 'react-query'
import Nav from './components/Nav'
import LiveScore from './components/LiveScore';
import SubNav from './components/SubNav';
import Schedule from './components/Schedule';
import Archives from './components/Archives';
import Footer from './components/Footer';
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div className='CricbuzzMainPage'>
          <Nav />
          <SubNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/livescore' element={<LiveScore />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/archives' element={<Archives />} />
          </Routes>
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
