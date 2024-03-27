import React, { useContext } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const NewsList = ({ name, profilePage, data, newsPage }) => {
    const { currentUser } = useContext(AuthContext)
    const filterdData = data.filter((item) => item.category === name)
    const userPosts = data.filter((item) => item.userId === currentUser?._id)
    return (
        <div className='w-full'>
            <div className="w-[85%] h-full flex flex-col mx-auto gap-8">
                {!profilePage && !newsPage &&
                    <div className="flex items-center justify-between pt-[10rem]">
                        <h1 className='text-[2.5rem] font-semibold'>{name} </h1>
                        <Link to={"/news"}>
                            <button className='bg-blue-950 py-[0.5rem] px-[2rem] text-white rounded-lg'>View All</button>
                        </Link>
                    </div>
                }
                <hr />
                <div className="flex gap-2 flex-wrap">
                    {profilePage ?
                        <>
                            {userPosts?.map((news) => {
                                return (
                                    <Card key={news?._id} news={news} profilePage />
                                )
                            })}
                        </>
                        :
                        <>
                            {filterdData?.map((news) => {
                                return (
                                    <Card key={news?._id} news={news}a />
                                )
                            })}
                        </>
                    }
                </div>
            </div>
        </div >
    )
}

export default NewsList
