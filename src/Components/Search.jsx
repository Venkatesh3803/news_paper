import React from 'react'

const Search = ({ setSearchIcon }) => {
    return (
        <div className='w-[100%] h-screen m-auto rounded-2xl text-black bg-black bg-opacity-25 absolute top-0'>
            <div className="p-[3rem] flex flex-col gap-[1.5rem]  bg-white w-[80%] m-auto rounded-3xl relative top-20">
                <div className="absolute right-20 font-bold cursor-pointer text-xl" onClick={() => setSearchIcon(false)}>X</div>
                <h1 className='text-lg text-black font-bold'>Search News</h1>
                <input type="text" placeholder='Search News here...' className='border-b border-gray-800 bg-transparent placeholder:text-black pb-2 focus:outline-none' />
                <div className="">
                    <h1 className='text-lg text-black font-semibold mb-2'>Category News</h1>
                    <ul className='flex gap-3 '>
                        {["Sports", "Health", "Political", "Business", "Finance", "Life", "Enterainment"].map((item, index) => {
                            return (
                                <li className='nav-list px-[1rem] py-[0.5rem] relative rounded-lg text-[15px] bg-slate-200 cursor-pointer' key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search