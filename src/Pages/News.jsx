import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navber from '../Components/Navber'
import NewsList from '../Components/NewsList'
import SmallCads from '../Components/SmallCads'
import { RequestMethod } from '../../RequestMethods'

const News = ({ category }) => {
    const [data, setData] = useState([])
    // fetching data from back-end 
    useEffect(() => {
        RequestMethod(`/post?category=${category}`, "get").then((res) => {
            setData(res)
        })
    }, [category])

    return (
        <div>
            <Navber />
            <div className="min-h-[90vh] w-[85%] m-auto flex flex-col gap-14 py-20">
                <h1 className='text-[2.5rem] text-center w-[50%] m-auto leading-[40px] font-bold'>Read the latest news from around the world</h1>
                <input type="text" name="" id="" className=' w-[60%] m-auto p-8 rounded-lg focus:outline-none bg-gray-100 text-xl' placeholder='Filter...' />
                <div className="flex gap-3">
                    <div className="flex-[3]">
                        {/* displaying the news based on category */}
                        <NewsList data={data} newsPage name={category} />
                    </div>
                    <div className="flex-1 hidden flex-col gap-3 lg:flex">
                        <div className="flex gap-5 items-center ">
                            <span className='cursor-pointer'>Sports</span>
                            <span className='cursor-pointer'>Entertainment</span>
                            <span className='cursor-pointer'>Health</span>
                        </div>
                        {/* displaying the news based on category */}
                        {data.map((news) => {
                            return (
                                <SmallCads key={news._id} news={news} newsPage />
                            )
                        })}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default News
