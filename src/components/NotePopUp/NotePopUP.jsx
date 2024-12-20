import React, { useState } from 'react'
import { GiTireIronCross } from "react-icons/gi";
import { CgColorPicker } from "react-icons/cg";
import { BiSolidColor } from "react-icons/bi";
import { getDatabase, push, ref, set } from "firebase/database";
const NotePopUP = ({cardValue , popCross}) => {

  const [showColor, setShowColor] = useState(false)
  const [bgcolor, setBgcolor]     = useState("#FBFBFB")
  const [formdata, setFormdata]     = useState({noteTitle:"", noteDescription:"", noteTitleError:"", noteDescriptionError:""})



// --------------- firebase read &write data method  ----------------//

const db = getDatabase();










// -------------------------//
const handelButton =()=>{
      if(!formdata.noteTitle){
        setFormdata((prev)=>({...prev ,noteTitleError:"Enter your note"}))

      }
      if(!formdata.noteDescription){
        setFormdata((prev)=>({...prev ,noteDescriptionError:"Enter your your Description "}))
      }
      else{
        set(push(ref(db, 'allNotes/')), {
          noteTitle:formdata.noteTitle,
          noteDescription:formdata.noteDescription
        });
      }
}

  console.log(formdata)

  return (
    <>
    <div className={`${cardValue? "w-full": "w-0 right-[-100px]"} transition-all duration-[1s] h-screen dark:bg-[#C6E7FF8C]  bg-[#00000049] absolute top-0 right-0 flex justify-center items-center `}>
        <div onClick={popCross} className={`${cardValue? "block" :"hidden"} absolute top-20 right-72 text-red-700 text-2xl`}>
          <GiTireIronCross/>
        </div>

        <div style={{background:bgcolor}} className={`${cardValue? "block" :"hidden"} w-[731px] p-8 rounded-lg bg-[#FBFBFB] `}>
            
            {/* note title */}
            <h2 className='font-poppins text-[24px] text-black font-bold'>Note Title </h2>
            <p className='text-[14px] text-red-500'>{formdata.noteTitleError}</p>
            <input onChange={(e)=> setFormdata((prev)=>({...prev ,noteTitle : e.target.value}))} className='w-full h-[45px] text-lg  font-poppins font-semibold border-2 border-[#D1D1D1] outline-none p-5 my-[20px] rounded-md' type="text" placeholder='Enter Your Note Title'  />
            
            {/* Description */}
            <h2 className='font-poppins text-[24px] text-black font-bold'>Description</h2>
            <p className='text-[14px] text-red-500'>{formdata.noteDescriptionError}</p>
            <textarea onChange={(e)=> setFormdata((prev)=>({...prev ,noteDescription : e.target.value}))}  className='w-full h-[200px] text-lg  font-poppins font-semibold border-2 border-[#D1D1D1 outline-none p-5 my-[20px] rounded-md' type="text" />
        
         <div className='flex justify-between'>
          <div className='colors overflow-hidden w-[300px] flex items-center gap-4 relative'>
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
              <button onClick={handelButton} className="px-3 z-30 py-3 bg-rose-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-lg">
                ADD NOTE
              </button>
         </div>
        </div>

    </div>
    </>

  )
}

export default NotePopUP