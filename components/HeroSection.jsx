import React from "react";
import Slider from "./Slider";
import Image from "next/image";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdGppGood } from "react-icons/md";

const HeroSection = ({ onenModal, openSignUpModal }) => {
  return (
    <>
      <div className="grid grid-cols-4 justify-between gap-3 mt-2">
        <div className="col-span-4 md:col-span-3">
          <Slider onenModal={onenModal} openSignUpModal={openSignUpModal} />
        </div>
        <div className="hidden md:block">
          <div className="col-span-1 flex flex-col items-center justify-between ">
            <Image
              width={300}
              height={145}
              alt="ll"
              className="rounded"
              src={"/image/side1.png"}
            />
            <Image
              width={300}
              height={145}
              alt="ll"
              className="rounded"
              src={"/image/side6.png"}
            />
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 mt-7 ">
        <div className="bg-white rounded shadow-lg py-4 px-5  flex items-center gap-5  col-span-1">
          <FaShippingFast size={55} className="text-[#2d6f6d]" />
          <div className=" flex flex-col gap-1">
            <p className=" font-bold text-lg font-urbanist">Free Shipping</p>
            <p className=" text-sm font-urbanist opacity-50 font-semibold">
              When ordering over $100
            </p>
          </div>
        </div>
        <div className="bg-white rounded shadow-lg py-4 px-5  flex items-center gap-5 col-span-1">
          <MdOutlineAssignmentReturn size={55} className="text-[#2d6f6d]" />
          <div className=" flex flex-col gap-1">
            <p className=" font-bold text-lg font-urbanist">Free Return</p>
            <p className=" text-sm font-urbanist opacity-50 font-semibold">
              Get Return within 30 days
            </p>
          </div>
        </div>
        <div className="bg-white py-4 px-5 rounded shadow-lg flex items-center gap-5 col-span-1">
          <MdOutlinePayment size={55} className="text-[#2d6f6d]" />
          <div className=" flex flex-col gap-1">
            <p className=" font-bold text-lg font-urbanist">Secure payment</p>
            <p className=" text-sm font-urbanist opacity-50 font-semibold">
              100% Secure Online Payment
            </p>
          </div>
        </div>
        <div className="bg-white  py-4 px-5 rounded shadow-lg flex items-center gap-5 col-span-1">
          <MdGppGood size={55} className="text-[#2d6f6d]" />
          <div className=" flex flex-col gap-1">
            <p className=" font-bold text-lg font-urbanist">Best quality</p>
            <p className=" text-sm font-urbanist opacity-50 font-semibold">
              Original Product Guarenteed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
