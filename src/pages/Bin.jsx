import React from 'react'
import BinNotes from '../components/BinNotes'

const Bin = () => {
  return (
    <>
      <div className='pl-[60px] pt-[54px] dark:bg-black w-full'>
      <h2 className='text-2xl text-secondColor font-semibold my-5'>Bin Notes</h2>
      <BinNotes/>
      </div>
    </>
  )
}

export default Bin