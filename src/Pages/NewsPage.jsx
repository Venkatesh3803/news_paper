import React, { useEffect, useState } from 'react'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'
import heroimg from "../assets/hero.png"
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'
import { RequestMethod } from '../../RequestMethods'
import { useParams } from 'react-router-dom'
import NewsList from '../Components/NewsList'

const NewsPage = () => {
    const { id } = useParams()
    const [news, setNews] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        RequestMethod(`/post/${id}`, "get").then((res) => {
            setNews(res)
        })
    }, [id])

    useEffect(() => {
        RequestMethod(`/post`, "get").then((res) => {
            setData(res)
        })
    }, [])

    return (
        <div>
            <Navber />
            <div className="min-h-[90vh] w-full pb-[3rem]">
                <div className="w-[80%] m-auto pt-[3rem] flex flex-col gap-10">
                    <div className="flex lg:w-[60%] m-auto flex-col gap-6 items-center text-center">
                        <div className=" flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-black">
                            </div>
                            <p className='text-xl font-medium'>{news?.category}</p>
                        </div>
                        <h1 className='md:text-[2.2rem] text-[1.6rem] leading-[40px] font-bold'>{news.title}</h1>
                        <p>New York, 22 Agust 2022</p>
                    </div>
                    <div className="pt-6">
                        <img className='w-full h-[70vh] object-cover' src={news.image ? news.image : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} alt="" />
                    </div>
                    <div className="flex flex-col gap-3 lg:w-[60%] m-auto">
                        {news?.desc?.split("\n").map((p) => {
                            return (
                                <div key={p}>
                                    <p>{p}</p>
                                </div>
                            )
                        })}

                    </div>
                    <hr />
                    <div className="flex flex-col items-center justify-center gap-10 w-[40%] m-auto ">
                        <div className="flex gap-5">
                            <img src={heroimg} className='w-20 h-20 rounded-full object-cover' alt="" />
                            <div className="">
                                <h1 className='text-2xl font-semibold'>Jhone Son</h1>
                                <p className='text-gray-600 text-xs'>About Author</p>
                            </div>
                        </div>
                        <p className='font-light leading-[40px] text-center'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>

                        <h1 className='text-2xl font-semibold'>Contact Author</h1>
                        <div className="flex gap-3 text-xl cursor-pointer">
                            <FaInstagram />
                            <FaSquareFacebook />
                            <FaTwitter />
                        </div>
                    </div>
                </div>

                <NewsList name={news?.category} data={data} />

            </div>
            <Footer />
        </div>
    )
}

export default NewsPage
