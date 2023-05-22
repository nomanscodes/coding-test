import React from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSession } from "next-auth/react";

const Topnav = ({ setOpenmodal, setOpenSignUpModal }) => {

  const session = useSession()
  const { data } = session

  return (
    <div className="px-2 md:px-0 md:container mx-auto flex items-center justify-center md:justify-between  leading-tight py-3 font-urbanist font-semibold text-xs">
      <div className="flex items-center gap-4">
        <Link href={""}>Account</Link>
        <Link href={""}>Track Order</Link>
        <Link href={""}>Support</Link>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            <p>Bangladesh</p>
            <MdKeyboardArrowDown size={18} />
          </div>
          <div className="flex items-center gap-0.5">
            <p>BDT</p>
            <MdKeyboardArrowDown size={18} />
          </div>
          {data?.user ? (<></>) : (
            <div className="flex items-center gap-0.5 text-base">
              <div onClick={() => setOpenmodal(true)}>Login</div>/
              <div onClick={() => setOpenSignUpModal(true)}>Sign Up</div>
            </div>
          )
          }
        </div >
      </div>
    </div >
  );
};

export default Topnav;
