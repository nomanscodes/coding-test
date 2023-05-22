import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { RiRefreshLine } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { SlUser } from "react-icons/sl";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useSelector } from "react-redux";

const SecNav = () => {
  const session = useSession();

  const { data } = session;

  const name = data?.user?.name.toLowerCase()

  // console.log("data", data?.user?.name);

  const [seeUserPanel, setSeeUserPanel] = useState(false)

  const { cartItem } = useSelector((state) => state.cart);


  return (
    <div className="px-2 md:px-0 md:container mx-auto font-urbanist py-2 flex items-center justify-between">
      <div>
        <picture>
          <img className="w-[140px]"
            src="/wonlogo.png"
            alt=""
          />
        </picture>
      </div>
      <div className="hidden md:block">
        <div className="flex ">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-80  py-2 flex-auto rounded-l border border-r-0 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3  text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]  focus:border-[#2d6f6d] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
            placeholder="Search here"
          />
          <button className="rounded-r bg-primary px-6 py-2.5  font-medium  leading-tight text-white bg-[#2d6f6d] focus:outline-[#2d6f6d] focus:ring-0 text-xs">
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href={"/cartpage"}
          className="h-10 w-10 bg-slate-200 rounded-full  z-10 flex justify-center items-center "
        >
          <p className="h-5 w-5 bg-[#2d6f6d] text-white rounded-full flex justify-center absolute z-50  mb-9 ml-5 ">
            <span className="-mt-0.5">{cartItem?.length}</span>
          </p>
          <BsBag size={17} />
        </Link>
        <Link
          href={""}
          className="h-10 w-10 bg-slate-200 rounded-full  z-10 flex justify-center items-center "
        >
          <p className="h-5 w-5 bg-[#2d6f6d] text-white rounded-full flex justify-center absolute z-50  mb-9 ml-5 ">
            <span className="-mt-0.5">4</span>
          </p>
          <RiRefreshLine size={17} />
        </Link>
        {data?.user ? (
          <>
            <div className="relative">
              <SlUser onMouseOver={() => setSeeUserPanel(true)} className="cursor-pointer" size={25} />
              <div onMouseLeave={() => setSeeUserPanel(false)} className={`bg-white ${seeUserPanel ? `w-48 h-44 transition-all duration-500` : `w-0 h-0 opacity-0  transition-all duration-500`}  absolute z-50 right-0 top-12 flex flex-col rounded shadow-lg`}>
                <h1 className=" text-xl font-semibold font-urbanist text-center p-2 text-[#2d6f6d]">Profile</h1>
                <hr />
                <div className="p-2 flex items-center justify-center gap-3">
                  <p className=" font-urbanist text-lg font-semibold 
                  text-[#2d6f6d]">HI!</p>
                  <h1 className=" font-urbanist text-lg font-semibold 
                  text-[#2d6f6d]">{name}</h1>
                </div>
                <hr />
                <div className="flex items-center justify-center p-2 gap-2 text-[#2d6f6d]">
                  <MdOutlineAdminPanelSettings size={28} />
                  <Link href={`/deshboard`} className=" font-urbanist text-lg font-semibold ">Deshboard</Link>
                </div>
                <hr />
                <div onClick={() => signOut()} className="flex items-center justify-center p-2 gap-2 text-[#2d6f6d] cursor-pointer">
                  <TbLogout className="" size={28} />
                  <div className=" font-urbanist text-lg font-semibold  ">Logout</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SecNav;
