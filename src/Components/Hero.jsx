import React from 'react';
import heroimg from "../assets/hero.png"
import SmallCads from './SmallCads';

const Hero = ({ data }) => {
  return (
    <div className=' w-full md:h-[80vh]'>
      <div className="w-[80%] m-auto py-[5rem] flex flex-col gap-[3.5rem] relative">
        <div className="md:gap-16 w-full md:flex">
          <div className="flex-1">
            <img className='w-full h-[45vh] object-cover' src={data[1]?.image} alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-5 justify-between mt-5">
            <div className=" flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-black">
              </div>
              <p className='text-xl font-medium'>{data[1]?.category}</p>
            </div>
            <h1 className='md:text-[2rem] text-[1.5rem] md:leading-[40px] leading-7 font-bold'>{data[1]?.title}</h1>
            <p>New York, 22 Agust 2022</p>
            <button className='w-fit cursor-pointer'>Read More...</button>
          </div>
        </div>
        <div className="flex items-center gap-[2rem]  overflow-x-auto ">
          {data.map((news) => {
            return (
              <SmallCads key={news._id} news={news} />
            )
          })}

        </div>

      </div>
    </div>
  )
}

export default Hero