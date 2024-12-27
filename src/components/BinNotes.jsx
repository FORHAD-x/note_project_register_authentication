import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { RxReset } from "react-icons/rx";
import { useSelector } from 'react-redux';

const BinNotes = () => {
 // ======== redux ============//
const sliceUser = useSelector((state)=>state.userData.value)



const [allBinNote ,setAllBinNote] = useState([])



    // ------- firebase read data--------------//
    const db = getDatabase();
    // ------------            ................//


  const handelRemove =(removeNoteId)=>{
    remove(ref(db, 'removeNote/' +removeNoteId))
  }







    useEffect(()=>{
        onValue(ref(db, 'removeNote/'), (snapshot) => {
            let arr = []
            snapshot.forEach((item) =>{
                if(item.val().creatorId == sliceUser.uid){
                   arr.push({...item.val(),key:item.key})
                }
            })
            setAllBinNote(arr)
        });
    },[])



  return (
    <>
    {
      allBinNote.map((item)=>(

        <div key={item.key} className='flex m-3 gap-2'>
        <h1 className='text-[16px] w-40 font-poppins font-medium mb-2'>{item.noteTitle}</h1>
        <div>
          {/* =============delete button */}
            <button onClick={()=>handelRemove(item.key)}
              className="ml-40 inline-flex items-center px-4 py-2  bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round">
                </path>
              </svg>
              Delete
            </button>
        </div>
        <div>
          {/* ================reset button */}
          <button className="inline-flex items-center px-4 py-2  bg-emerald-500 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
              <RxReset className='h-5 w-5 mr-2' />
                Reset
          </button>
        </div>
        </div>
      ))
    }
    
    </>
  )
}

export default BinNotes