import React from 'react'
// import { Outlet } from 'react-router-dom';
import CarouselPart from './CarouselPart';
import HomePage from './HomePage';

export const Home = () => {

  return (
    <div>
      <CarouselPart />
      <HomePage />
    </div>
  );
} 