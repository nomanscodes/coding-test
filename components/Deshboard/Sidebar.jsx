/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"
import SideBarData from "../../JsonData/sidebardata.json"
import DropDown from './DropDown'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-white shadow-lg text-[#2d6f6d] mt-[66px] h-screen fixed overflow-y-auto scrollbar-thin w-64'>
            <div className='w-full flex  flex-col items-center justify-center gap-5 p-8'>
                <picture>
                    <img className='h-16 w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjgGRURzAt334CqMg2_hd-P8AdLBIvenRFXbjQ_HnCk09cSqfjspluoBcvdJubTcAqHg&usqp=CAU
                    " alt="" />

                </picture>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <h3 className='text-lg font-semibold'>Noman Hossain</h3>
                    <h3 className='text-xs font-normal opacity-70 mt-1'>Dhaka,Bangladesh</h3>
                </div>
            </div>
            <hr />
            {SideBarData.map((item) => (
                <DropDown key={item.id} item={item}
                />
            ))}
        </div>
    )
}

export default Sidebar