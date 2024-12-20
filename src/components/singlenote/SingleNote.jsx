import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

const SingleNote = () => {

    const [allNote ,setAllNote] = useState([])

    // ------- firebase read data--------------//
    const db = getDatabase();
    // ------------            ................//
    useEffect(()=>{
        onValue(ref(db, 'allNotes/'), (snapshot) => {
            let arr = []
            snapshot.forEach((item) =>{
                arr.push(item.val())
            })
            setAllNote(arr)
        });
    },[])
    
   
  return (
    <>
    <div className='flex flex-wrap gap-5'>
    {
        allNote.map((item)=>(

            <div className='w-[200px] h-[180px] border-2 border-[#C6E7FF] rounded-lg p-2'>
                <h2 className='text-[16px] font-poppins font-medium mb-2'>{item.noteTitle}</h2>
                <p className='text-[12px] font-poppins font-light mb-2'>{item.noteDescription}</p>

            </div>
        ))
    }
    </div>
    </>
  )
}

export default SingleNote