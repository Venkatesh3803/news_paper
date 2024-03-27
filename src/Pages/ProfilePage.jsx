import React, { useContext, useEffect, useState } from 'react'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'
import NewsList from '../Components/NewsList'
import { FaShare, FaInstagram } from "react-icons/fa";
import { RequestMethod } from '../../RequestMethods';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const ProfilePage = () => {
    const [data, setData] = useState([])
    const {currentUser} = useContext(AuthContext)
    useEffect(() => {
        RequestMethod("/post", "get").then((res) => {
            setData(res)
        })
    }, [])
    return (
        <div>
            <Navber />
            <div className='w-full min-h-[90vh] py-[2rem]'>
                <div className="w-[85%] m-auto relative">
                    <div className="profile flex items-center justify-center">
                        <h1 className='text-3xl font-semibold '>Profile Page</h1>
                    </div>
                    <div className="h-auto flex items-center gap-5 flex-col mt-10">
                        <div className="md:w-[35%] lg:w-[20%] h-[60vh] w-[60%] bg-slate-100 top-[20vh] md:absolute  rounded-2xl left-10 p-[2rem] flex flex-col items-center justify-center gap-4">
                            <img className='w-24 h-24 rounded-full object-cover' src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <h2 className='text-lg font-semibold'>Full Name</h2>
                            <p className='text-sm text-center text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ullam ab vel doloremque. A, dolore.</p>
                            <div className="border-y border-gray-700 w-full flex justify-between items-center py-5">
                                <Link to={`/settings/${currentUser?._id}`}>
                                    <button className='bg-black text-white px-5 py-1 rounded-md'>Edit</button>
                                </Link>
                                <FaShare />
                                <FaInstagram />
                            </div>
                            <p>Joined on April 2012</p>
                        </div>
                        <div className="relative w-[75%] md:left-64 lg:left-48 mt-4">
                            <NewsList profilePage data={data} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage
