import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query'
import LiveScore from './components/LiveScore';
import Main from './components/Main';
import Schedule from './components/Schedule';
import Archives from './components/Archives';
import Login from './components/Login';
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/livescore' element={<LiveScore />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/archives' element={<Archives />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
