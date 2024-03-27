import React from 'react'
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='w-full flex flex-col gap-4 py-14 bg-black text-white'>
            <div className="md:w-[85%] m-auto flex flex-col gap-5">
                <div className="flex flex-col md:flex md:flex-row">
                    <div className="flex-[1]">
                        <div className="md:w-[60%] w-[80%] flex flex-col gap-5">
                            <h1 className='text-[2rem] font-semibold'>Logo</h1>
                            <p className='text-gray-200 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorum tempore fugiat beatae quam. Similique.</p>
                        </div>
                    </div>
                    <div className="flex justify-between flex-[1] mt-10 md:mt-0">
                        <div className="flex gap-2 flex-col">
                            <p className='text-lg font-semibold px-[1rem]'>World</p>
                            <ul className='flex flex-col gap-0  '>
                                {["Sports", "Health", "Political", "Business","Enterainment"].map((item, index) => {
                                    return (
                                        <li className='nav-list md:px-[1rem] px-[0.5rem] py-[0.5rem] relative rounded-lg text-sm cursor-pointer leading-4' key={index}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="flex gap-2 flex-col ">
                            <p className='text-lg font-semibold md:px-[1rem]'>Tech</p>
                            <ul className='flex flex-col gap-0  '>
                                {["Start Up", "Crypto", "New Inventions", ].map((item, index) => {
                                    return (
                                        <li className='nav-list md:px-[1rem] px-[0.5rem] py-[0.5rem] relative rounded-lg text-sm cursor-pointer leading-4' key={index}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="flex gap-2 flex-col ">
                            <p className='text-lg font-semibold px-[1rem]'>Life</p>
                            <ul className='flex flex-col gap-0  '>
                                {["Sports", "Health", "Food", "Style", "Musice", ].map((item, index) => {
                                    return (
                                        <li className='nav-list md:px-[1rem] px-[0.5rem] py-[0.5rem] relative rounded-lg text-sm cursor-pointer leading-4' key={index}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="flex gap-2 flex-col ">
                            <p className='text-lg font-semibold px-[1rem]'>Others</p>
                            <ul className='flex flex-col gap-0  '>
                                {["About", "Contact Us", "Terms & condition"].map((item, index) => {
                                    return (
                                        <li className='nav-list md:px-[1rem] px-[0.5rem] py-[0.5rem] relative rounded-lg text-sm cursor-pointer leading-4' key={index}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="md:flex justify-between items-center">
                    <p>Copyright © All Rights Reserved</p>
                    <div className="flex gap-3 text-xl cursor-pointer">
                        <FaInstagram />
                        <FaSquareFacebook />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
