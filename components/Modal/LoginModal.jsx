"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Link from "next/link";
import InputField from "./InputField";
import { signIn } from "next-auth/react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const LoginModal = ({ setOpenmodal, onenModal, setOpenSignUpModal }) => {

  const [number, setNumber] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        number,
        password,
      });

      setOpenmodal(false)
    } catch (error) {
      console.log(error);
    }


  };


  return (
    <Modal
      isOpen={onenModal}
      onRequestClose={() => setOpenmodal(false)}
      style={customStyles}
    >
      <div className="">
        <div>
          <h1 className="font-roboto font-bold text-4xl text-[#2d6f6d]">
            Login
          </h1>
          <p className=" font-slabb mt-4">
            {"Don't have an account?"}
            <div
              onClick={() => setOpenSignUpModal(true) & setOpenmodal(false)}
              className=" text-[#2d6f6d] cursor-pointer"
            >
              Create here
            </div>
          </p>
        </div>
        <div className=" md:w-log2 mt-5">
          <form onSubmit={submitHandler} className=" flex flex-col  gap-3">
            <InputField
              placeholder="Enter Your Phone Number*"
              name="number"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)} />

            <InputField
              placeholder="Enter Your Password *"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />

            <div className="flex items-center justify-between mt-4 ">
              <div className=" flex items-center justify-center gap-2">
                <input
                  name="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-[#2d6f6d] bg-gray-100 border-gray-300 rounded  "
                />
                <span className=" text-sm opacity-80">Remember me</span>
              </div>
              <Link
                className=" text-sm opacity-60 flex items-center justify-center gap-2"
                href={""}
              >
                <span className=" hover:text-[#2d6f6d]">
                  Forgate password ?
                </span>
              </Link>
            </div>
            <button className="transition ease-out delay-150 text-white text-lg  font-medium hover:-translate-y-1 hover:scale-110 bg-[#2d6f6d] duration-300  p-3  w-32 rounded-md  mt-8">
              Login
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
