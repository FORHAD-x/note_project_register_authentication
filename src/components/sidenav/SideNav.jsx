import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SideNav.css'
import { MdEditNote } from "react-icons/md";
import { BiSolidPin } from "react-icons/bi";
import { ImBin2 } from "react-icons/im";


const SideNav = () => {
  // ========== state
  const [toggleValue, setToggleValue] = useState(false);
  // ========== saving the mode when user  visitor
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light";
    localStorage.setItem("mode", savedMode);
    document
      .querySelector("html")
      .classList.toggle("dark", savedMode === "dark");
  }, []);
  // ========== changing the mode on toggle
  const handelMode = () => {
    if (localStorage.getItem("mode") == "light") {
      localStorage.setItem("mode", "dark");
      document.querySelector("html").classList.add("dark");
      setToggleValue(!toggleValue);
    } else {
      localStorage.setItem("mode", "light");
      document.querySelector("html").classList.remove("dark");
      setToggleValue(!toggleValue);
    }
  };
  return (
    <>
    <nav className='sideNav dark:bg-black dark:shadow-[inset_-5px_0px_9px_0px_#434190] pt-[7px]  bg-[#FBFBFB] shadow-[10px_-6px_8px_0px_#00000024] w-[157px] h-screen transition-all duration-[.4s]'>
        <h2 className='dark:text-white text-[20px] px-[21px]  font-medium font-poppins text-[#646262]'>All Note List</h2>
        <ul className='w-[157px]'>
            <li><NavLink to="/" className={({ isActive}) =>[isActive ? "activePage" : "DeActivePage",].join(" ")}><MdEditNote/> All Notes</NavLink></li>
            <li><NavLink to="/pin_notes" className={({ isActive}) =>[isActive ? "activePage" : "DeActivePage",].join(" ")}><BiSolidPin/> Pined </NavLink></li>
            <li><NavLink to="/bin_notes" className={({ isActive}) =>[isActive ? "activePage" : "DeActivePage",].join(" ")}><ImBin2/> Bin</NavLink></li>
        </ul>
        {localStorage.getItem("mode") == "light" ? (
          <button
            className="py-1 px-3 bg-black text-xl text-white rounded-sm"
            onClick={handelMode}
          >
            Dark
          </button>
        ) : (
          <button
            className="py-1 px-3 bg-purple-500 text-white rounded-sm text-xl"
            onClick={handelMode}
          >
            Light
          </button>
        )}
    </nav>
    </>
  )
}

export default SideNav