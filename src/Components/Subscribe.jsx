import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Subscribe = () => {
  const ref = useRef();
  useGSAP(() => {
    const el = ref.current;
    gsap.fromTo(el, { scale: 0 }, {
     scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                },
      scale: 1,
      duration: 1,
    })
  }, [])
  return (
    <div className='subscribe w-[85%] min-h-[50vh] bg-black m-auto rounded-3xl pt-10 pb-20 my-20 text-white ' ref={ref}>
      <div className="flex items-center justify-center flex-col gap-12 md:w-[50%] w-[90%] h-full m-auto">
        <h1 className='heading md:text-[2.8rem] text-[2rem] font-semibold md:leading-[50px] leading-10 text-center'>Get the Latest Notifications and Info from Us</h1>
        <p className='md:text-[1.1rem] font-normal text-gray-200 leading-[20px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
        <button className='bg-white text-black border px-[2rem] py-[0.6rem] rounded-full text-lg font-semibold'>Subscribe Now</button>
      </div>
    </div>
  )
}

export default Subscribe