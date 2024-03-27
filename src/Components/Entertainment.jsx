import React from 'react'
import NewsList from './NewsList'
import { Link } from 'react-router-dom'

const Entertainment = ({ name }) => {
    return (
        <div className='w-full'>
            <div className="w-[85%] h-full flex flex-col mx-auto gap-8">
                <div className="flex items-center justify-between pt-[10rem]">
                    <h1 className='text-[2.5rem] font-semibold'>{name} </h1>
                    <Link to={"/news"}>
                        <button className='bg-blue-950 py-[0.5rem] px-[2rem] text-white rounded-lg'>View All</button>
                    </Link>
                </div>
                <hr />
                <NewsList />
            </div>
        </div>
    )
}

export default Entertainment
