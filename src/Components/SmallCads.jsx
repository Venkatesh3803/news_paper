import React from 'react';
// import heroimg2 from "../assets/hero2.png"

const SmallCads = ({news}) => {
    return (
        <div className="flex gap-[0.8rem] min-w-[390px]">
            <img src={news.image? news.image:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} alt="" className='w-[100px] h-[100px] object-cover' />
            <div className="flex flex-col justify-between ">
                <h1 className='text-[1.2rem] font-semibold leading-5'>{news.title}</h1>
                <p className='text-[12px]'>Los Angles, 22 Agust 2022
                    <span className='text-gray-400'>- 22 minutes ago</span>
                </p>
            </div>
        </div>
    )
}

export default SmallCads