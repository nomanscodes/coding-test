import React from "react";
import Layout from "@/Layouts/Layout";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import product from "../../JsonData/products.json";
import SignupModal from "@/components/Modal/SignupModal";
import LoginModal from "@/components/Modal/LoginModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

const ProductsDetails = () => {
  const name = Router?.query?.id;

  var result = product.find((item) => item.name === name);

  const dispatch = useDispatch()

  const [onenModal, setOpenmodal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const [quantity, setQuantity] = useState(1)

  const [showError, setShowError] = useState(false);
  const [color, setColor] = useState("")


  const notify = () => {
    toast.success("Sucess. Check your cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <Layout setOpenmodal={setOpenmodal} setOpenSignUpModal={setOpenSignUpModal}>
      <ToastContainer />
      <Head>
        <title>Details page</title>
        <meta name="description" content="Log in to your account - AMP Play" />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <SignupModal
        openSignUpModal={openSignUpModal}
        setOpenSignUpModal={setOpenSignUpModal}
        setOpenLoginmodal={setOpenmodal}
      />
      <LoginModal
        onenModal={onenModal}
        setOpenmodal={setOpenmodal}
        setOpenSignUpModal={setOpenSignUpModal}
      />
      <div className="container mx-auto " id="sizeSection">
        <div className="grid md:grid-cols-2 gap-7 p-3">
          <div className="col-span-1">
            <picture>
              <img src={result?.img} alt={result?.name} className="rounded" />
            </picture>
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <p className="text-base font-semibold text-[#2d6f6d] ">
              Sports car
            </p>
            <h1 className="text-[#2d6f6d] font-bold text-xl">
              {result?.title}
            </h1>
            <p className="text-base font-semibold text-[#2d6f6d] ">
              24 Reviews
            </p>
            <p className="text-base font-semibold text-[#2d6f6d] ">
              Price : ${result?.price}
            </p>
            <p className="text-base font-semibold text-[#2d6f6d] ">
              {result?.description}
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-base font-semibold text-[#2d6f6d] ">Color:</p>
              <div className=" flex items-center gap-4">
                <input onClick={(e) => setColor(e.target.value)} value="Yellow" className=" h-8 w-8 bg-yellow-400 rounded-full cursor-pointer text-yellow-400" />

                <input onClick={(e) => setColor(e.target.value)} value="Red" className=" h-8 w-8 bg-red-600 rounded-full cursor-pointer text-red-600" />

                <input onClick={(e) => setColor(e.target.value)} value="Black" className=" h-8 w-8 bg-black rounded-full cursor-pointer" />

                <input onClick={(e) => setColor(e.target.value)} value="Slate" className=" h-8 w-8 bg-slate-600 text-slate-600 rounded-full cursor-pointer" />
              </div>
              {showError && (
                <p className=" text-red-500 font-urbanist text-sm font-semibold">Must have select a color !</p>
              )}

            </div>
            {/* <div className="flex flex-col gap-4">
              <p className="text-base font-semibold text-[#2d6f6d] ">Seleted Quantity:</p>
              <div className=" flex items-center gap-4">
                <select name="quantity" id="quantity" onChange={(e) => setQuantity(e.target.value)} className="px-4 py-1 text-[#2d6f6d] focus:outline-[#2d6f6d]">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div> */}
            <div className=" mt-4">
              <button class="relative px-5 py-2 font-medium text-white group"

                onClick={() => {

                  if (!color) {
                    setShowError(true);
                    document.getElementById("sizeSection").scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  } else {
                    dispatch(
                      addToCart({
                        ...result,
                        color,
                        oneQuantityPrice: result?.price,
                      })
                    );
                    setShowError(false)
                    notify();
                  }
                }}
              >
                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#2d6f6d] group-hover:bg-[#2d6f6d] group-hover:skew-x-12"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#2d6f6d] group-hover:bg-[#2d6f6d] group-hover:-skew-x-12"></span>
                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#2d6f6d] -rotate-12"></span>
                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#2d6f6d] -rotate-12"></span>
                <span class="relative">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsDetails;
