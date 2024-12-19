import React, { useState } from 'react'
import { GiTireIronCross } from "react-icons/gi";
import { CgColorPicker } from "react-icons/cg";
import { BiSolidColor } from "react-icons/bi";
const NotePopUP = ({cardValue , popCross}) => {

  const [showColor, setShowColor] = useState(false)
  const [bgcolor, setBgcolor]     = useState("#FBFBFB")

  return (
    <>
    <div className={`${cardValue? "w-full": "w-0 right-[-100px]"} transition-all duration-[1s] h-screen dark:bg-[#C6E7FF8C]  bg-[#00000049] absolute top-0 right-0 flex justify-center items-center `}>
        <div onClick={popCross} className={`${cardValue? "block" :"hidden"} absolute top-20 right-72 text-red-700 text-2xl`}>
          <GiTireIronCross/>
        </div>

        <div style={{background:bgcolor}} className={`${cardValue? "block" :"hidden"} w-[731px] p-8 rounded-lg bg-[#FBFBFB] `}>
            <h2 className='font-poppins text-[24px] text-black font-bold'>Note Title </h2>
            <input className='w-full h-[45px] text-lg  font-poppins font-semibold border-2 border-[#D1D1D1] outline-none p-5 my-[20px] rounded-md' type="text" placeholder='Enter Your Note Title'  />
            <h2 className='font-poppins text-[24px] text-black font-bold'>Description</h2>
            <textarea  className='w-full h-[200px] text-lg  font-poppins font-semibold border-2 border-[#D1D1D1 outline-none p-5 my-[20px] rounded-md' type="text" />
        
          <div className='colors overflow-hidden flex items-center gap-4 relative'>
              <BiSolidColor onClick={()=>setShowColor(!showColor) } className='text-3xl text-fuchsia-600 hover:rotate-180 transition-all duration-500' />
              <div className={`all_colors w-[190px] flex gap-4 absolute transition-all duration-[.4s] ${showColor? "left-10" :"left-[-230px]"}`}>
                  <button onClick={()=>setBgcolor("#ff3434")} className='w-[25px] h-[25px] border-2 border-[#D1D1D1] rounded-full bg-[#ff3434]'></button>
                  <button onClick={()=>setBgcolor("#ebf831")} className='w-[25px] h-[25px] border-2 border-[#D1D1D1] rounded-full bg-[#ebf831]'></button>
                  <button onClick={()=>setBgcolor("#39e739")} className='w-[25px] h-[25px] border-2 border-[#D1D1D1] rounded-full bg-[#39e739]'></button>
                  <button onClick={()=>setBgcolor("#ff4099")} className='w-[25px] h-[25px] border-2 border-[#D1D1D1] rounded-full bg-[#ff4099]'></button>
                  <button  className='w-[25px] h-[25px] border-2 border-[#D1D1D1] rounded-full flex items-center justify-center'>
                  <label htmlFor="colors">
                    <CgColorPicker />
                  </label>
                  <input onChange={(e)=>setBgcolor(e.target.value)} id='colors' className='hidden' type="color" /> 
                  </button>
              </div>
          </div>

        </div>

    </div>
    </>

  )
}

export default NotePopUP