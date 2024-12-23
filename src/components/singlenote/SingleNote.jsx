import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';

const SingleNote = () => {


// ======== redux ============//
const sliceUser = useSelector((state)=>state.userData.value)



    const [allNote ,setAllNote] = useState([])

    // ------- firebase read data--------------//
    const db = getDatabase();
    // ------------            ................//
    useEffect(()=>{
        onValue(ref(db, 'allNotes/'), (snapshot) => {
            let arr = []
            snapshot.forEach((item) =>{
                if(item.val().creatorId == sliceUser.uid){
                   arr.push({...item.val(),key:item.key})
                }
            })
            setAllNote(arr)
        });
    },[])
    
   
  return (
    <>
    <div className='flex flex-wrap gap-5'>
    {
        allNote.map((item)=>(

            <div key={item.key} style={{background:item.bgcolor}} className='w-[200px] h-[180px] border-2 border-[#C6E7FF] rounded-lg p-2'>
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