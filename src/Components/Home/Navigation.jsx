import React, { useEffect, useState } from 'react'
import logo from "../../assets/Images/logo.svg"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navigation = () => {

  const userInfo = useSelector((state) => {
    return state.auth.userInfo;
  });

const [data, setData] = useState(() => localStorage.getItem('lms_email') || '');



// To update localStorage data
const updateLocalStorage = (newData) => {
  localStorage.setItem('lms_email', newData);
  setData(newData); // Update state to reflect changes
};




  return (
    <div className="container bg-[#FDF8EE] py-4">
    <div className='flex justify-between items-center mx-20 '>
    <div><img src={logo} alt="" className='w-[58px] h-[51px]'/></div>
    <div className=''>
      <ul className='flex justify-between items-center gap-10'>
        <li className='text-[#1D1D1D] text-lg font-semibold'><Link to={"/"}>Home</Link></li>
        <li className='text-[#1D1D1D] text-lg font-semibold'><Link to={"/"}>About us</Link></li>
        {
          userInfo?.user_id === "" ?  <>
          <li className='text-[#1D1D1D] text-lg font-semibold'><Link to={"/signup"}>Signup</Link></li>
          <li><button className='border px-14 py-[10px] text-[#FFFFFF]  bg-[#4D2C5E] text-xl font-medium rounded-[218px]'><Link to={"/login"}>Login</Link></button></li>
          </> : <li className='text-[#1D1D1D] text-lg font-semibold'><Link onClick={()=>updateLocalStorage("")}>Logout</Link></li>
          
       }
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Navigation;
