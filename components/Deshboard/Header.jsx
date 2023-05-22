import React, { useState } from 'react'
import { BiLogOut, BiMessageMinus } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineUsergroupAdd, AiOutlineOrderedList } from 'react-icons/ai'
import { MdOutlineNotificationsActive, MdOutlineBookmarkBorder, MdOutlineBackup, MdOutlineLocalOffer, MdOutlineEmojiEvents } from 'react-icons/md'
import Link from 'next/link'


const Header = () => {
    const [dropDown, setDropdown] = useState(false)
    return (
        <div className=' bg-white px-4 shadow fixed w-full z-50'>
            <div className='flex items-center justify-between leading-tight'>
                <Link href="/deshboard" >
                    <picture>
                        <img className='w-[140px]' src="/wonlogo.png" alt="" />
                    </picture>
                </Link>

                <div className="relative mb-3 hidden md:block">
                    <input
                        type="search"
                        className="peer mt-3 min-h-[auto] w-80 rounded border-0 bg-gray-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

                        placeholder="Type query" />
                    <label

                        className="pointer-events-none mt-3 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
                    >Search</label >
                </div>
                <div className='hidden lg:block'>
                    <div className='flex gap-5 mt-1 '>
                        <Link
                            href={""}
                            className="z-10 flex justify-center items-center "
                        >
                            <p className="h-5 w-5 bg-[#2d6f6d] text-white rounded-full flex justify-center absolute z-50  mb-9 ml-5 ">
                                <span className="-mt-0.5">4</span>
                            </p>
                            <BiMessageMinus size={25} color='#2d6f6d' className='cursor-pointer' />
                        </Link>
                        <Link
                            href={""}
                            className="z-10 flex justify-center items-center "
                        >
                            <p className="h-5 w-5 bg-[#2d6f6d] text-white rounded-full flex justify-center absolute z-50  mb-9 ml-5 ">
                                <span className="-mt-0.5">4</span>
                            </p>
                            <MdOutlineBookmarkBorder size={25} color='#2d6f6d' className='cursor-pointer' />
                        </Link>
                        <Link
                            href={""}
                            className="z-10 flex justify-center items-center "
                        >
                            <p className="h-5 w-5 bg-[#2d6f6d] text-white rounded-full flex justify-center absolute z-50  mb-9 ml-5 ">
                                <span className="-mt-0.5">4</span>
                            </p>
                            <MdOutlineNotificationsActive size={25} color='#2d6f6d' className='cursor-pointer' />
                        </Link>
                    </div>
                </div>
                <div>
                    <div onMouseOver={() => setDropdown(true)} className='flex items-center justify-center gap-2 cursor-pointer'>
                        <picture>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18iwsdCCbBfpa50-5BmNa_m_BX087_x1oWQ&usqp=CAU" className='h-10 w-10 rounded-full' alt="" />
                        </picture>
                        <p className='font-medium text-lg text-[#2d6f6d]'>My Account </p>
                    </div>

                    <div onMouseLeave={() => setDropdown(false)} className={`${dropDown ? `w-64 transition-all duration-500` : `w-0 opacity-0 transition-all duration-500`} bg-white absolute right-0 top-[66px] shadow-xl overflow-y-hidden`}>
                        <div className={`${dropDown ? `` : `hidden`} flex flex-col`}>
                            <div className='hover:bg-gray-200 duration-300 cursor-pointer'>
                                <div className='flex items-center gap-3 p-3 text-[#2d6f6d]'>
                                    < FiSettings size={20} />
                                    <p className='text-base font-medium'>Admin setting</p>
                                </div>
                            </div>
                            <div className='hover:bg-gray-200 duration-300 cursor-pointer'>
                                <div className='flex items-center gap-3 p-3 text-[#2d6f6d]'>
                                    < AiOutlineOrderedList size={20} />
                                    <p className='text-base font-medium'>Listing</p>
                                </div>
                            </div>
                            <div className='hover:bg-gray-200 duration-300 cursor-pointer'>
                                <div className='flex items-center gap-3 p-3 text-[#2d6f6d]'>
                                    < MdOutlineEmojiEvents size={20} />
                                    <p className='text-base font-medium'>Event</p>
                                </div>
                            </div>
                            <div className='hover:bg-gray-200 duration-300 cursor-pointer'>
                                <div className='flex items-center gap-3 p-3 text-[#2d6f6d]'>
                                    < MdOutlineLocalOffer size={20} />
                                    <p className='text-base font-medium'>Offer</p>
                                </div>
                            </div>
                            <div className='hover:bg-gray-200 duration-300 cursor-pointer'>
                                <div className='flex items-center gap-3 p-3 text-[#2d6f6d]'>
                                    < AiOutlineUsergroupAdd size={20} />
                                    <p className='text-base font-medium'>Add User</p>
                                </div>
                            </div>
                            <div className='hover:bg-gray-200 duration-300 cursor-pointer'>
                                <div className='flex items-center gap-3 p-3 text-[#2d6f6d]'>
                                    < MdOutlineBackup size={20} />
                                    <p className='text-base font-medium'>Backup Data</p>
                                </div>
                            </div>
                            <hr />
                            <div className='hover:bg-gray-200 duration-300 cursor-pointer'>
                                <div className='flex items-center gap-3 p-3 text-[#2d6f6d]'>
                                    < BiLogOut size={20} />
                                    <p className='text-base font-medium'>Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header 