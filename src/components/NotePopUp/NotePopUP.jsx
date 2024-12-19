import React from 'react'

const NotePopUP = ({cardValue}) => {

  return (
    <>
    <div className={`${cardValue? "w-full": "w-0 right-[-100px]"} transition-all duration-[1s] h-screen dark:bg-[#C6E7FF8C]  bg-[#00000049] absolute top-0 right-0 flex justify-center items-center `}>
        <div className='w-[731px] p-8 rounded-lg bg-[#FBFBFB] top-0 right-0'>
            <h2 className='font-poppins text-[24px] text-black font-bold'>Note Title </h2>
            <input className='w-full h-[45px] text-lg  font-poppins font-semibold border-2 border-[#D1D1D1 outline-none p-5 my-[20px] rounded-md' type="text" placeholder='Enter Your Note Title'  />
            <h2 className='font-poppins text-[24px] text-black font-bold'>Description</h2>
            <textarea  className='w-full h-[45px] text-lg  font-poppins font-semibold border-2 border-[#D1D1D1 outline-none p-5 my-[20px] rounded-md' type="text" />
        </div>
    </div>
    </>

  )
}

export default NotePopUP