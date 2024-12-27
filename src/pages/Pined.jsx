import React from 'react'
import AllNotes from '../components/allnotes/AllNotes'
import SingleNote from '../components/singlenote/SingleNote'
import PinNotes from '../components/PinNotes'

const Pined = () => {
  return (
    <>
      <div className='pl-[60px] pt-[54px] dark:bg-black w-full'>
        <PinNotes/>
      </div>
    </>
  )
}

export default Pined