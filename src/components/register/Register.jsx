import React, { useState } from 'react'
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from 'react-toastify';
import app from '../../Firebase';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

const [email, setEmail] = useState("")
const [emailError, setEmailError] = useState("")

const [name, setName] = useState("")
const [nameError, setNameError] = useState("")

const [showPass, setShowPass] = useState(false)

const [password, setPassword] = useState("")
const [passwordError, setPasswordError] = useState("")

const navigate = useNavigate()
// ---------------------------------------------------//


// ----------------- authentication --------------//

const auth = getAuth();





// ----------------------------------------------------------//

const handelSubmit =()=>{
    if(!name){
        setNameError("Enter your name")
    }
    if(!email){
        setEmailError("Enter your email")
    }
    if(!password){
        setPasswordError("Enter your password")
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: name ,
      photoURL: "https://static.thenounproject.com/png/1820914-512.png"
    }).then(() => {
      sendEmailVerification(auth.currentUser)
      .then(() => {
        navigate('/login')
        toast.info('Register done', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      });
    })




    
 



  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   if(errorCode == "auth/email-already-in-use"){
    setEmailError("Email has already taken")
   }
   if(errorCode == "auth/weak-password"){
    setPasswordError("weak-password")
   }
  
  });

    }
}


      
  return (
    <div className='container flex justify-center items-center h-screen'>
    <div className="card px-8 py-6 rounded-lg bg-[#91acb1] w-72 ">

        <h1 className="text-center font-bold text-3xl text-white"> Register</h1>
      <div className="my-6">

        <p>{nameError}</p>
        <input onChange={(e)=>{setName(e.target.value),setNameError("")} } className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Name" type="text" />

        <p>{emailError}</p>
        <input onChange={(e)=>{setEmail(e.target.value) ,setEmailError("")}} className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Email" type="email" />
        
       <p>{passwordError}</p>
       <div className='relative'>
       <input  onChange={(e)=>{setPassword(e.target.value),setPasswordError("")}} className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Password" type={showPass? "text" :"password"} />
       {
        showPass?
        <IoIosEye onClick={()=>setShowPass(!showPass)} className='absolute top-[50%] right-4 translate-y-[-50%]'/>
        :
        <IoIosEyeOff onClick={()=>setShowPass(!showPass)} className='absolute top-[50%] right-4 translate-y-[-50%]'/>
       }
       </div>

       
       <button onClick={handelSubmit} datatype="Register" className="rainbow-hover flex m-auto  mt-4"><span className="sp px-20 py-2">Register</span></button>
       <div className='bottom_text'>
        <p className=' mt-5 flex justify-center font-sans text-sm font-light leading-normal'>Already have an account ? <Link className='ml-1 text-sm font-sans leading-normal text-green-300' to="/login"> login </Link></p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
