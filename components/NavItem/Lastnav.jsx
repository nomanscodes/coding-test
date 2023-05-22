import React, { useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdElectricBike } from "react-icons/md";
import { MdElectricCar } from "react-icons/md";
import { MdElectricRickshaw } from "react-icons/md";
import { MdElectricScooter } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const Lastnav = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="bg-[#2d6f6d] py-2">
      <div className="px-2 md:px-0 md:container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className=" hidden md:block">
            <div
              onClick={() => setShowCategory(!showCategory)}
              className=" bg-white p-3 w-64 bottom-1 flex justify-between cursor-pointer rounded-t"
            >
              <div className="flex items-center gap-2">
                <RiMenuUnfoldFill size={18} />
                <p className="font-urbanist font-semibold">All Categories</p>
              </div>
              <MdOutlineKeyboardArrowDown size={20} />
            </div>
            <div
              className={`bg-white ${showCategory ? `w-64 h-44
              transition-all duration-300` : `opacity-0 h-0 w-0  transition-all duration-300`
                }  absolute z-50`}
            >
              <hr />
              <div className=" flex-col gap-2 font-urbanist text-sm">
                <span className=" flex items-center justify-between px-4 py-3 border-b border-opacity-30">
                  <div className=" flex items-center gap-4">
                    <MdElectricBike size={20} />
                    <p>Electric Bike</p>
                  </div>
                  <MdKeyboardArrowRight size={15} />
                </span>
                <span className=" flex items-center justify-between px-4 py-3 border-b">
                  <div className=" flex items-center gap-4">
                    <MdElectricCar size={20} />
                    <p>Electric Car</p>
                  </div>
                  <MdKeyboardArrowRight size={15} />
                </span>
                <span className=" flex items-center justify-between px-4 py-3 border-b">
                  <div className=" flex items-center gap-4">
                    <MdElectricRickshaw size={20} />
                    <p>Electric Rickshaw</p>
                  </div>
                  <MdKeyboardArrowRight size={15} />
                </span>
                <span className=" flex items-center justify-between px-4 py-3 border-b">
                  <div className=" flex items-center gap-4">
                    <MdElectricScooter size={20} />
                    <p>Electric Scooter</p>
                  </div>
                  <MdKeyboardArrowRight size={15} />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4 font-urbanist md:text-base font-medium md:font-semibold text-white">
            <Link href={"/"}>Homepage</Link>
            <Link href={""}>Shop</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>Products</Link>
          </div>
        </div>
        <div className=" bg-[#ffbb38] font-semibold p-3 rounded hidden md:block">
          Become a customer
        </div>
      </div>
    </div>
  );
};

export default Lastnav;
