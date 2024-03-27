import React, { useContext, useEffect, useRef, useState } from 'react'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from 'axios';
import { RequestMethod } from '../../RequestMethods';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const EditPostPage = () => {
    const [inputs, setInputs] = useState({});
    const [image, setImage] = useState("")
    const imgRef = useRef()
    const { currentUser } = useContext(AuthContext)
    const { id } = useParams()

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleUploadImage = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'crowdFunding');
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/ddsepnnsm/image/upload',
                    formData
                );
                const imageUrl = response.data.secure_url;
                setImage(imageUrl);

            } catch (err) {
                console.log(err)
            }

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: inputs.title,
            desc: inputs.desc,
            location: inputs.location,
            category: inputs.category,
            image: inputs.image ? image.image : image,
        }

        RequestMethod(`/post/${id}`, "patch", { ...data, userId: currentUser._id, }, currentUser.token).then(res => {
            if (res) {
                toast.success(res)
            }
        })
    }

    useEffect(() => {
        RequestMethod(`/post/${id}`, "get").then((res) => {
            setInputs(res)
        })
    }, [id])


    return (
        <div>
            <Navber />
            <div className='min-h-[90vh]'>
                <div className="w-[75%] m-auto">
                    <form className='bg-slate-200 flex-[2] p-[3rem]' onSubmit={handleSubmit}>
                        <div className="flex items-center justify-between my-[2rem]">
                            <div className="">
                                <h1 className='text-3xl font-semibold'>Edit News </h1>
                                <p className='text-gray-500 mt-2'> new details like Title, Description Category, Location and images</p>
                            </div>
                            <div className=" flex gap-5">
                                <button type='submit' className='bg-black text-white px-5 py-1 rounded-md'>Save Changes</button>
                                <button className='border border-black text-black px-5 py-1 rounded-md'>Cancel</button>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className=" flex-[2] bg-white flex flex-col gap-5 p-[2rem]">
                                <h1 className='text-2xl font-semibold text-center'>News Information</h1>
                                <hr />

                                {/* title */}
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="">Title</label>
                                    <div className="border border-gray-600 flex items-center py-[0.6rem] px-[1rem] gap-4 rounded-lg">
                                        <input type="text" name="title" placeholder='Title' id="" className=' rounded-lg focus:outline-none w-full' required value={inputs.title} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="flex gap-4 ">


                                    {/* Location */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="">Location</label>
                                        <div className="border border-gray-600 flex items-center py-[0.5rem] px-[1rem] gap-4 rounded-lg  w-full">
                                            <FaLocationDot size={22} />
                                            <input type="text" name="location" placeholder='Location' id="" className=' rounded-lg focus:outline-none' value={inputs.location} onChange={handleChange} />
                                        </div>
                                    </div>


                                    {/* Category */}
                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="">Category</label>
                                        <select name="category" id="" className='border border-gray-600 p-2 rounded-md' value={inputs.category} required onChange={handleChange}>
                                            <option value="">Select Category</option>
                                            <option>Sports</option>
                                            <option>Health</option>
                                            <option>Political</option>
                                            <option>Busniess</option>
                                            <option>Finance</option>
                                            <option>Life</option>
                                            <option>Enterainment</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="">Description </label>
                                    <textarea type="text" rows={10} name="desc" placeholder='New Description' id="" className='border border-gray-700 rounded-lg focus:outline-none py-[0.6rem] px-[1rem]' value={inputs.desc} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="flex-[1] bg-white w-full h-[55vh] p-[1rem] flex gap-4 flex-col">
                                <h1 className='text-xl font-semibold'>Upload Image</h1>

                                <hr />
                                <img className='w-[100%] h-[25vh] rounded-lg object-cover' src={inputs.image ? inputs.image : image ? image : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" />


                                {/* Uploading Image */}
                                <div className="border border-gray-600 border-collapse w-full h-[20vh] rounded-2xl flex items-center justify-center flex-col gap-4">
                                    <input type="file" hidden onChange={handleUploadImage} ref={imgRef} />
                                    <IoCloudUploadOutline size={50} className='cursor-pointer' onClick={() => imgRef.current.click()} />
                                    <p className='text-'>Click to upload or drag and drop</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EditPostPage
