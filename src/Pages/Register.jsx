import React, { useContext, useState } from 'react'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'

const Register = () => {

    const { registerUser } = useContext(AuthContext)
    const [inputs, setInputs] = useState({})
    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputs.password !== inputs.conformpass) return toast.error("password does not match")
        registerUser(inputs)
    }
    return (
        <>
            <Navber />
            <div className="min-h-[90vh] w-full py-10">
                <div className="w-[85%]  m-auto shadow-lg rounded-xl flex">
                    <div className="flex-1 py-[3rem] px-[6rem]  flex flex-col gap-5">
                        <h1 className='text-[2rem] font-semibold'>Logo</h1>
                        <p className='text-gray-600'>Welcome Back, Please Register to have great experiance </p>
                        <form action="" className='flex gap-5 flex-col mt-[2rem]' onSubmit={handleSubmit}>
                            <div className="flex gap-3">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="" className=''>First Name</label>
                                    <input type="text" placeholder='First name' name='firstname' required className='border-b border-gray-600 pb-2 focus:outline-none w-full' onChange={handleChange} />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" placeholder='last name' name='lastname'required className='border-b border-gray-600 pb-2 focus:outline-none w-full' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='example@gmail.com' name='email' required className='border-b border-gray-600 pb-2 focus:outline-none' onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder='' name='password' required className='border-b border-gray-600 pb-2 focus:outline-none' onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Conform Pass</label>
                                <input type="password" placeholder='' name='conformpass' className='border-b border-gray-600 pb-2 focus:outline-none' onChange={handleChange} />
                            </div>
                            <button type='submit' className='bg-blue-950 text-white font-semibold text-lg py-[0.5rem] rounded-lg'>Register</button>
                            <p>Already have Account! <Link to={"/login"}>Login</Link></p>
                        </form>
                    </div>
                    <div className="login flex-1 relative">
                        <h1 className='text-[2.8rem] font-semibold leading-[50px] text-center text-white'>Welcome to Sign Up</h1>
                        <p className='text-[1.2rem] font-normal text-white leading-[20px] text-center'>Already have Account.</p>
                        <Link to={"/login"}>
                            <button className='bg-transparent border border-gray-50 text-white px-[3rem] py-[0.5rem] rounded-full font-semibold'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register
