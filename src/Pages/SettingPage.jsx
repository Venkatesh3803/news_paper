import React from 'react'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdLink } from "react-icons/io";


const SettingPage = () => {
    return (
        <div>
            <Navber />
            <div className='min-h-[90vh]'>
                <div className="w-[75%] m-auto p-[3rem] bg-slate-100">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h1 className='text-3xl font-semibold'>General Settings</h1>
                            <p className='text-gray-500 mt-2'>Update Your photo and personal details here</p>
                        </div>
                        <div className=" flex gap-5">
                            <button className='bg-black text-white px-5 py-1 rounded-md'>Save Changes</button>
                            <button className='border border-black text-black px-5 py-1 rounded-md'>Cancel</button>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-10">
                        <form action="" className='bg-white flex-[2]  flex flex-col gap-5 p-[1.5rem]' >
                            <h1 className='text-2xl font-semibold text-center'>Personal Information</h1>
                            <hr />
                            <div className="flex gap-4 ">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" name="firstname" placeholder='First Name' id="" className='border border-gray-700 rounded-lg focus:outline-none py-[0.6rem] px-[1rem]' />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" name="firstname" placeholder='Last Name' id="" className='border border-gray-700 rounded-lg focus:outline-none py-[0.6rem] px-[1rem]' />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="">Gmail</label>
                                <div className="border border-gray-600 flex items-center py-[0.6rem] px-[1rem] gap-4 rounded-lg">
                                    <MdOutlineEmail size={22} />
                                    <input type="email" name="email" placeholder='example@gmail.com' id="" className=' rounded-lg focus:outline-none ' />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="">Username</label>
                                <div className="border border-gray-600 flex items-center py-[0.6rem] px-[1rem] gap-4 rounded-lg">
                                    <FaRegUserCircle size={22} />
                                    <input type="text" name="firstname" placeholder='Username' id="" className=' rounded-lg focus:outline-none ' />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="">Gender</label>
                                <select name="" id="" className='border border-gray-600 p-2 rounded-md'>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="">Description </label>
                                <textarea type="text" name="firstname" placeholder='About yourself' id="" className='border border-gray-700 rounded-lg focus:outline-none py-[0.6rem] px-[1rem]' />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="">Instagram Url</label>
                                <div className="border border-gray-600 flex items-center py-[0.6rem] px-[1rem] gap-4 rounded-lg">
                                    <IoMdLink size={22} />
                                    <input type="text" name="instaUrl" placeholder='URL' id="" className=' rounded-lg focus:outline-none ' />
                                </div>
                            </div>
                        </form>
                        <div className="flex-[1] bg-white w-full h-[30vh]"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SettingPage