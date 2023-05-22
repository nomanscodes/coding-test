/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
import { BiMessageAdd } from 'react-icons/bi'
import { HiOutlineCurrencyBangladeshi, HiOutlineUsers } from "react-icons/hi"

const TopSection = () => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
            <div className='col-span-1 flex flex-col shadow'>
                <div className='bg-[#2d6d6f]'>
                    <img className=' h-28' src="/image/is.jpg" alt="" />
                </div>
                <div className='p-4 bg-white'>
                    <span className='flex items-center gap-2 font-medium text-[#2d6d6f]'>
                        <BsArrowUpShort size={24} />
                        <h3>Today Views</h3>
                    </span>
                    <h4 className='font-bold text-2xl text-gray-600 ml-8'>56,080</h4>
                </div>
            </div>
            <div className='col-span-1 flex items-center bg-white rounded shadow h-fit'>
                <div className='bg-[#167ee6] p-6 rounded-l'>
                    <HiOutlineCurrencyBangladeshi size={70} color='white' />
                </div>
                <div className='p-2'>
                    <span className='flex items-center gap-2 font-medium text-[#2d6d6f]'>
                        <BsArrowUpShort size={24} />
                        <h3>Earnings</h3>
                    </span>
                    <h4 className='font-bold text-2xl text-gray-600 ml-5'>56,080</h4>
                </div>
            </div>
            <div className='col-span-1 flex items-center bg-white rounded shadow h-fit'>
                <div className='bg-[#4c5caf] p-[29px] rounded-l'>
                    <HiOutlineUsers size={60} color='white' />
                </div>
                <div className='p-2'>
                    <span className='flex items-center gap-2 font-medium text-[#4c5caf]'>
                        <BsArrowUpShort size={24} />
                        <h3>Users</h3>
                    </span>
                    <h4 className='font-bold text-2xl text-gray-600 ml-5'>45,080</h4>
                </div>
            </div>
            <div className='col-span-1 flex items-center bg-white rounded shadow h-fit'>
                <div className='bg-[#142b17] p-[29px] rounded-l'>
                    <BiMessageAdd size={60} color='white' />
                </div>
                <div className='p-2'>
                    <span className='flex items-center gap-2 font-medium 
                        text-[#142b17]'>
                        <BsArrowUpShort size={24} />
                        <h3>Enquiry</h3>
                    </span>
                    <h4 className='font-bold text-2xl text-gray-600 ml-5'>15,080</h4>
                </div>
            </div>
        </div>

    )
}

export default TopSection