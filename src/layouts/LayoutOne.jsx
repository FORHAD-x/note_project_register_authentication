import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/Home'

const LayoutOne = () => {

  const sliceUser = useSelector((state)=>state.userData.value)
  const navigate  =useNavigate()
  

  useEffect(()=>{
    if(sliceUser == null){
      navigate('/login')
    }
  },)


  return (
    <>
    {/* <Home/> */}
    <Navbar/>
    <Outlet/>

    </>
  )
}

export default LayoutOne