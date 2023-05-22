import React from "react";
import Layout from "@/Layouts/Layout";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai"
import { useState, useMemo } from "react";
import SignupModal from "@/components/Modal/SignupModal";
import LoginModal from "@/components/Modal/LoginModal";
import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";

const Cartpage = () => {
  const [loading, setLoading] = useState(false);
  const { cartItem } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItem.reduce((total, val) => total + val.price, 0);
  }, [cartItem]);


  const grandTotal = subTotal + 30 + 30

  const [onenModal, setOpenmodal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  return (
    <>
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
      <Layout
        setOpenmodal={setOpenmodal}
        setOpenSignUpModal={setOpenSignUpModal}
      >
        <Head>
          <title>Cart page</title>
          <meta
            name="description"
            content="Log in to your account - AMP Play"
          />
          <link
            rel="icon"
            href="https://shopo.quomodothemes.website/assets/images/logo-2.svg"
          />
        </Head>
        {cartItem.length === 0 ?
          <>
            <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
              <picture>
                <img
                  className="w-[300px] md:w-[400px]"
                  src="/empty-cart.jpg"
                  alt="empty"
                />
              </picture>
              <span className="text-xl font-bold text-[#2d6f6d]">Your cart is empty</span>
              <span className="text-center mt-4 ">
                Looks like you have not added anythig in your cart
                <br />
                Go ahed and explore top categories
              </span>
              <Link
                href="/"
                className=" py-4 px-8 rounded-md bg-[#2d6f6d] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 mt-2"
              >
                <button>Continue Shopping</button>
                <AiOutlineDoubleRight size={20} />
              </Link>
            </div>
          </>
          : <>
            <div className="container mx-auto">
              <div className="grid grid-cols-5 mt-3 p-2 gap-2 bg-white">
                <div className="col-span-3 border-r">
                  <div className="p-4">
                    <h1 className="text-lg uppercase font-bold text-[#2d6f6d] mb-2">Your Cart</h1>
                    <hr className="bg-slate-500" />
                    <div className=" ">
                      <table class="w-full text-sm text-left text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                              quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItem.map((item) => (
                            <CartItem key={item?.id} item={item} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="p-4">
                    <h1 className="text-lg uppercase font-bold text-[#2d6f6d] mb-2">Cart total</h1>
                    <hr className="bg-slate-500" />
                    <div className="flex flex-col gap-4 text-sm font-semibold text-gray-700">
                      <div className="flex items-center justify-between mt-3 p-2  uppercase  ">
                        <h1 className="">Subbtotal</h1>
                        <h1 className="">${subTotal}</h1>
                      </div>
                      <hr />
                      <div className="flex items-center justify-between mt-3 p-2 bg-gray-50">
                        <h1 className=" uppercase ">Shipping cost</h1>
                        <div className="text-right">
                          <p className=" uppercase ">flat rate $30</p>
                          <p className=" uppercase ">pickup $30</p>
                          <p className="text-xs text-gray-500"> Shipping option wili be update during checkout </p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex items-center justify-between mt-3 p-2  uppercase ">
                        <h1 className="">grand total</h1>
                        <h1 className="">${grandTotal}</h1>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center justify-center mb-3">
                    <button
                      class="relative px-5 py-2 font-medium text-white group"  >
                      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#2d6f6d] group-hover:bg-[#2d6f6d] group-hover:skew-x-12"></span>
                      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#2d6f6d] group-hover:bg-[#2d6f6d] group-hover:-skew-x-12"></span>
                      <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#2d6f6d] -rotate-12"></span>
                      <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#2d6f6d] -rotate-12"></span>
                      <span class="relative">Proceed to checkout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>

        }
      </Layout>
    </>
  );
};

export default Cartpage;
