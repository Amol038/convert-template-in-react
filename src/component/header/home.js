import React from 'react'
import MainPage from './main page'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
    <MainPage/> 
   
    <Outlet/>
    </div>
  )
}

export default Home
