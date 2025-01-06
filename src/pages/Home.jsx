import React from 'react'
import SingleNote from '../components/singlenote/SingleNote'
import Pin from '../components/PinNotes'
import AddNotes from '../components/addnotes/AddNotes'

const Home = () => {
  return (
    <>
      <div className='pl-[60px] pt-[54px] dark:bg-black w-full'>
        <AddNotes/>
        <h2 className='text-2xl text-secondColor font-semibold my-5'>pin Notes</h2>
        <Pin/>
        <h2 className='text-2xl text-secondColor font-semibold my-5'>All Notes</h2>
        <SingleNote/>
      </div>
    </>
  )
}

export default Home