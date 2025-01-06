import React from 'react'
import PinNotes from '../components/PinNotes'

const Pined = () => {
  return (
    <>
      <div className='pl-[60px] pt-[54px] dark:bg-black w-full'>
      <h2 className='text-2xl text-secondColor font-semibold my-5'>Pined Notes</h2>

        <PinNotes/>
      </div>
    </>
  )
}

export default Pined