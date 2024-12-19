import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

const sliceUser = useSelector((alu)=>alu.userData.value)


  return (
    <>
    <div className='dark:bg-black transition-all duration-[.4s] bg-[#FBFBFB] h-[64px] flex items-center shadow-[0px_5px_6px_0px_#00000024]'>
    <div className='container'>
        <div className="navbar flex justify-between items-center">
            <div className="nav_logo">
                <Link>
                <img src="/public/Notes.png" alt="" className='dark:hidden'/>
                <img src="/public/Notes (1).png" alt="" className='hidden dark:block'/>
                </Link>
            </div>
            <div className='user_info flex items-center gap-4'>
                <div className="user_profile  overflow-hidden w-[40px] h-[40px] rounded-full border-2  border-[#DD2C00]">
                      <img src={sliceUser?.photoURL} alt="userPhoto" className='dark:bg-white'/>
                </div>
                <h2 className='dark:text-white text-[16px] font-semibold text-black font-sans'>{sliceUser?.displayName}</h2>
            </div>
        </div>
        </div>
    </div>
    
       
    
    </>
  )
}

export default Navbar