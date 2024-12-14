import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

const sliceUser = useSelector((state)=>state.userData.value)


  return (
    <>
    <div className="container">
        <div className="navbar flex justify-between items-center">
            <div className="navimg">
                <img src="public/firebase_28dp.png" alt="logo" />
            </div>
            <div className='user_info flex items-center gap-4'>
                <div className="user_profile overflow-hidden w-[40px] h-[40px] rounded-full border-y-4  border-[#DD2C00]">
                      {/* <img src={sliceUser.photoURL} alt="userPhoto"/> */}
                </div>
                {/* <h2 className='text-[16px] font-semibold text-black font-sans'>{sliceUser.displayName}</h2> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar