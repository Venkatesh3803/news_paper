import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUpLong } from "react-icons/fa6";
import { MdDelete, MdEdit } from 'react-icons/md';


const Card = ({ news, newsPage, profilePage }) => {
    const { category } = news;
    return (
        // with the help of newspage prop changing the width of card 
        <div className={newsPage ? "flex flex-col gap-[1.5rem] w-[210px] md:w-[220px] lg:w-[315px] h-full flex-grow" : "flex flex-col gap-[1.5rem] w-[210px] md:w-[220px] lg:w-[250px] h-full flex-grow"}>
            <div className="h-full flex-1 relative">
                <div className='flex absolute top-2 right-2 gap-4'>
                    <span className={category === "Sports" ? 'bg-blue-500 px-2 py-1 rounded-md text-white' : category === "Health" ? 'bg-green-500 px-2 py-1 rounded-md text-white' : category === "Political " ? 'bg-orange-500-500 px-2 py-1 rounded-md text-white' : category === "Busniess" ? 'bg-cyan-600 px-2 py-1 rounded-md text-white' : category === "Finance" ? 'bg-pink-600 px-2 py-1 rounded-md text-white' : category === "Life" ? 'bg-fuchsia-600 px-2 py-1 rounded-md text-white' : 'bg-violet-600 px-2 py-1 rounded-md text-white'}>{news.category}</span>
                    {profilePage &&
                        <>
                            <Link to={`/editpost/${news._id}`}>
                                <span className=' bg-green-500 text-white cursor-pointer px-2 py-1 rounded-md flex items-center gap-1'><MdEdit />Edit</span>
                            </Link>
                            <span className=' bg-red-600 text-white cursor-pointer px-2 py-1 rounded-md flex items-center gap-1'><MdDelete />Delete</span>
                        </>
                    }
                </div>
                <Link to={`/news/${news?._id}`} >
                    <img className='w-full h-[35vh] object-cover' src={news.image ? news.image : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} alt="" />
                </Link>
            </div>
            <div className=" flex gap-5 flex-col">
                <Link to={`/news/${news._id}`}>
                    <h1 className='text-[1.5rem] font-semibold leading-7'>{news.title.slice(0, 50)}...</h1>
                </Link>
                <p className='text-gray-600'>{news.desc.slice(0, 100)}...</p>
                <Link to={`/news/${news?._id}`}>
                    <button className='bg-blue-950 py-[0.5rem] px-[3rem] text-white rounded-lg w-fit flex items-center gap-3'>Read More <FaArrowUpLong className='rotate-45 text-lg' /></button>
                </Link>
            </div>
        </div >
    )
}

export default Card
