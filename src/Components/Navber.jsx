import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Search from './Search';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Navber = () => {

  const { currentUser, logout } = useContext(AuthContext)
  const [profileSideBar, setProfileSideBar] = useState(false)
  const [searchIcon, setSearchIcon] = useState(false)
  const handleLogout = () => {
    logout();
    setProfileSideBar(false)
  }
  useGSAP(() => {
    gsap.to(".nav", { y: -40, opacity: 1, duration: 0.8 })
  }, [])

  return (
    <div className='w-full bg-blue-950 max-h-[10vh] text-white sticky top-0 left-0 z-10'>
      <div className="flex items-center justify-between px-[3rem] py-[1rem] relative">
        <div className="logo">
          <Link to={"/"}>
            <h1>Logo</h1>
          </Link>
        </div>
        <div className="relative">
          <ul className='nav gap-3 relative -bottom-10 hidden md:flex opacity-0'>
            {[{ name: "Sports", page: "/news/sports" }, { name: "Health", page: "/news/health" }, { name: "Political", page: "/news/political" }, { name: "Business", page: "/news/business" }, { name: "Finance", page: "/news/finance" }, { name: "Life", page: "/news/life" }, { name: "Entertainment", page: "/news/entertainment" }].map((item, index) => {
              return (
                <Link to={item.page}>
                  <li className='nav-list px-[1rem] py-[0.5rem] relative rounded-lg text-lg cursor-pointer' key={index} >{item.name}</li>
                </Link>
              )
            })}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="search">
            <CiSearch className='text-3xl cursor-pointer' onClick={() => {
              setSearchIcon(true)
            }} />
          </div>
          <div className="border-r-2 border-white"></div>
          {currentUser ?
            <div className='w-10 h-10 bg-slate-400 rounded-full flex justify-center items-center font-bold cursor-pointer' onClick={() => setProfileSideBar(!profileSideBar)}>
              N
            </div>
            :
            <div className=" flex gap-3">
              <Link to={"/login"}>
                <button className='cursor-pointer'>Login</button>
              </Link>
              <Link to={"/register"}
              >
                <button className='cursor-pointer'>Register</button>
              </Link>
            </div>
          }
        </div>
      </div>

      <div className={profileSideBar ? "side-profile h-screen md:w-1/4 w-full rounded-none bg-blue-950 absolute top-0 right-0  p-[3rem] transition-all duration-1000" : 'h-0 w-0 absolute rounded-[50%] top-[50%] opacity-0'}>
        <p className='w-[30px] h-[30px] bg-blue-500 rounded-full text-white flex items-center justify-center cursor-pointer absolute top-10 right-10' onClick={() => setProfileSideBar(false)}>X</p>
        <div className="w-full h-full flex items-center">
          <ul className='flex flex-col gap-3 mt-20 w-full'>
            {[{ name: "Profile", Link: "/profile" }, { name: "Add News", Link: "/addnews" }, { name: "Settings", Link: `/settings/${currentUser?._id}` }].map((item, index) => {
              return (
                <Link to={`${item.Link}`}>
                  <li className='nav-list px-[1rem] py-[0.5rem] relative text-2xl font-semibold cursor-pointer border-b border-gray-200' key={index}>{item.name}</li>
                </Link>
              )
            })}
            <li className='nav-list px-[1rem] py-[0.5rem] relative text-2xl font-semibold cursor-pointer border-b border-gray-200' onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      </div>

      {searchIcon && <Search setSearchIcon={setSearchIcon} />}
    </div>
  )
}

export default Navber