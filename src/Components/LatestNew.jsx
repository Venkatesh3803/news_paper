import React from 'react'
import image from "../assets/hero.png"

const LatestNew = () => {
    return (
        <div className='w-full h-[90vh]'>
            <div className="w-[85%] h-full mx-auto">
                <div className="flex items-center justify-between py-[2rem]">
                    <h1 className='text-[2.5rem] font-semibold'>Latest Release</h1>
                    <button className='bg-blue-950 py-[0.5rem] px-[2rem] text-white rounded-lg'>View All</button>
                </div>
                <div className="flex gap-[3rem] h-[75vh]">
                    <div className="flex flex-col gap-[1.5rem] flex-[1] ">
                        <img className='w-full h-[50%] object-cover' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className=" flex gap-5 flex-col">
                            <h1 className='text-[1.8rem] font-semibold leading-8'>How to maximize investment with mutual funds</h1>
                            <p className='text-gray-600'>The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.</p>
                            <button className='bg-blue-950 py-[0.5rem] px-[3rem] text-white rounded-lg w-fit'>Read More</button>
                        </div>
                    </div>
                    <div className="flex-[1] flex flex-col gap-10 h-full">
                        <div className="flex gap-[1.5rem] h-[45%]">
                            <div className="flex-[1]">
                                <img className='w-full object-cover flex-[1]' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className=" flex gap-5 flex-col flex-[1]">
                                <h1 className='text-[1.2rem] font-semibold leading-5'>How to maximize investment with mutual funds</h1>
                                <p className='text-gray-600 text-sm'>The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.</p>
                                <button className='bg-blue-950 py-[0.5rem] px-[3rem] text-white rounded-lg w-fit'>Read More</button>
                            </div>
                        </div>
                        <div className="flex gap-[1.5rem] h-[45%]">
                            <div className="flex-[1]">
                                <img className=' object-cover flex-[1]' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className=" flex gap-5 flex-col flex-[1]">
                                <h1 className='text-[1.2rem] font-semibold leading-5'>How to maximize investment with mutual funds</h1>
                                <p className='text-gray-600 text-sm'>The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.</p>
                                <button className='bg-blue-950 py-[0.5rem] px-[3rem] text-white rounded-lg w-fit'>Read More</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNew