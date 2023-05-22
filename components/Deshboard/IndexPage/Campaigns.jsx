import React from 'react'
import { IoIosArrowUp, IoMdClose } from "react-icons/io"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlineDownload, AiFillDelete } from "react-icons/ai"
import { useState } from 'react'
import Link from 'next/link'

const Campaigns = () => {

    const [sdropDown, setDropdowns] = useState(false)

    return (
        <div className='lg:flex'>
            <div className='relative w-full lg:w-auto'>
                <div className=' bg-white p-3 shadow h-full'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-lg font-bold text-[#2d6d6f] uppercase'>Country Campaigns</h3>
                            <span onClick={() => setDropdowns(true)} className='h-9 w-9 rounded-full cursor-pointer bg-slate-200 flex items-center justify-center'>
                                <BsThreeDotsVertical size={24} />
                            </span>
                        </div>
                        <hr />
                        <h3 className='text-base font-medium opacity-70 px-2'>Airtport  Hotels The Right Way To Start A Short Break Holiday
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos velit cumque dolorem fugiat facilis placeat eos omnis! Quos, corrupti. A cum soluta veritatis qui sequi placeat id eius culpa blanditiis
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum eos, sed numquam esse blanditiis
                        </h3>
                    </div>
                </div>
                <div onClick={() => setDropdowns(false)} className={` ${sdropDown ? `w-fit absolute right-0 top-0` : `hidden`} bg-white shadow-2xl flex flex-col border border-gray-50`}>
                    <div className='hover:bg-gray-200 duration-300 cursor-pointer px-5 py-2'>
                        <p className=' font-medium'>Add New </p>
                    </div>
                    <Link href={"/"} className='hover:bg-gray-200 duration-300 cursor-pointer px-5 py-2'>
                        <p className=' font-medium'>Edit</p>
                    </Link>
                    <div className='hover:bg-gray-200 duration-300 cursor-pointer px-5 py-2'>
                        <p className=' font-medium'>Update</p>
                    </div>
                    <hr />
                    <div className='hover:bg-gray-200 duration-300 cursor-pointer'>
                        <div className='flex items-center gap-3 p-2'>
                            < AiFillDelete color='#2d6d6f' size={20} />
                            <p className='font-medium'>Delete</p>
                        </div>
                    </div>
                    <div className='hover:bg-gray-200 duration-300 cursor-pointer'>
                        <div className='flex items-center gap-3 p-2'>
                            < AiOutlineDownload color='#2d6d6f' size={20} />
                            <p className='font-medium'>Downlad</p>
                        </div>
                    </div>
                    <div onClick={() => setDropdowns(false)} className='bg-gray-200 duration-300 cursor-pointer'>
                        <div className='flex items-center gap-3 p-2'>
                            < IoMdClose color='#2d6d6f' size={20} />
                            <p className='font-medium'>Close</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='shadow bg-white p-2 w-fit hidden md:block'>
                <table className=" text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-white uppercase bg-[#2d6d6f] ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Client
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Changes
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Budegt
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Apple
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4 flex items-center justify-center gap-1">
                                <span className='bg-[#172b19] h-6 w-8 flex items-center justify-center text-white rounded'><IoIosArrowUp size={14} /></span>
                                <p>2.45%</p>
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4 text-right">
                                <span className='bg-[#831439] px-2 py-2 flex items-center justify-center text-white rounded'>Closed</span>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Microsoft
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                <td className="px-6 py-4 flex items-center justify-center gap-1">
                                    <span className='bg-[#172b19] h-6 w-8 flex items-center justify-center text-white rounded'><IoIosArrowUp size={14} /></span>
                                    <p>4.45%</p>
                                </td>
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4 text-right">
                                <span className='bg-[#172b19] px-2 py-2 flex items-center justify-center text-white rounded'>Active</span>
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Magic
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>

                            <td className="px-6 py-4 flex items-center justify-center gap-1">
                                <span className='bg-[#172b19] h-6 w-8 flex items-center justify-center text-white rounded'><IoIosArrowUp size={14} /></span>
                                <p>4.45%</p>
                            </td>

                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4 text-right">
                                <span className='bg-[#172b19] px-2 py-2 flex items-center justify-center text-white rounded'>Active</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default Campaigns