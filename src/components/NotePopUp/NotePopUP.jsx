import React from 'react'

const NotePopUP = ({cardValue}) => {

  return (
    <>
    <div className={`${cardValue? "w-full": "w-0"} transition-all duration-[1s] dark:bg-[#C6E7FF8C] w-full  h-screen bg-[#00000049] absolute top-0 right-0 flex justify-center items-center `}>
        <div className='w-[731px] p-8 rounded-lg bg-[#FBFBFB]'>
            <h2 className='font-poppins text-[24px] text-black font-bold'>Note Title </h2>
            <input className='w-full h-[45px] text-lg  font-poppins font-semibold border-2 border-[#D1D1D1 outline-none p-5 my-[20px] rounded-md' type="text" placeholder='Enter Your Note Title'  />

        </div>
    </div>
    </>

  )
}

export default NotePopUP