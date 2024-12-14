import React, { useState } from 'react'
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userDataReducer } from '../../slices/UserSlices';


const Login = () => {

const [email, setEmail] = useState("")
const [emailError, setEmailError] = useState("")

const [showPass, setShowPass] = useState(false)

const [password, setPassword] = useState("")
const [passwordError, setPasswordError] = useState("")

const navigate = useNavigate()

// <------------ Redux Data---------------->//
const dispatch = useDispatch()


// <--------------------------------------------------->//



// <----------------- authentication -------------->//

const auth = getAuth();


// <---------------------------------------------------------->//

const handelSubmit =()=>{
    if(!email){
        setEmailError("Enter your email")
    }
    if(!password){
        setPasswordError("Enter your password")
    }
   else{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
     console.log(userCredential)
    if(user.emailVerified == false){
      toast.warn('verify your email !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        })
    }else{

      dispatch(userDataReducer(user))
      navigate("/")
      localStorage.setItem("userData", JSON.stringify(user))
      // console.log(userCredential)
    }
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode){
        toast.error('Something went wrong !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }
    });
    }
  }


  return (
    <div className='container flex justify-center items-center h-screen'>
    <div className="card px-8 py-6 rounded-lg bg-[#5e5c5c] w-72 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

        <h1 className="text-center font-bold text-3xl text-slate-50"> login</h1>
      <div className="my-6">

        <p>{emailError}</p>
        <input onChange={(e)=>{setEmail(e.target.value) ,setEmailError("")}} className="p-2 my-2 bg-slate-200 rounded w-[100%] focus:outline-blue-600" placeholder="Email" type="email" />
        
       <p>{passwordError}</p>
       <div className='relative'>
       <input  onChange={(e)=>{setPassword(e.target.value),setPasswordError("")}} className="p-2 my-2 bg-slate-200 rounded w-[100%] focus:outline-blue-600" placeholder="Password" type={showPass? "text" :"password"} />
       {
        showPass?
        <IoIosEye onClick={()=>setShowPass(!showPass)} className='absolute top-[50%] right-4 translate-y-[-50%]'/>
        :
        <IoIosEyeOff onClick={()=>setShowPass(!showPass)} className='absolute top-[50%] right-4 translate-y-[-50%]'/>
       }
       </div>

       
       <button onClick={handelSubmit} datatype="Register" className="rainbow-hover  flex m-auto  mt-4"><span className="sp px-20 py-2">Login</span></button>

      <div className='bottom_text'>
        <p className=' mt-5 flex justify-center font-sans text-sm font-light leading-normal'>Don't have an account ? <Link className='ml-1 text-sm font-sans leading-normal text-green-300' to="/Register" >Register</Link></p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
