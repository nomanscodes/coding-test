import React from "react";
import products from "../JsonData/products.json";
import Link from "next/link";

const NewCarSection = () => {

  return (
    <div className="mt-5">
      <div className="group">
        <h1 className=" font-urbanist text-3xl font-bold text-[#2d6f6d] ">
          Latest Version
        </h1>
        <hr className="bg-[#2d6f6d] h-2 w-10 group-hover:w-[195px] transition-all duration-300" />
      </div>
      <div className=" bg-white mt-1 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {products.map((item) => (
          <Link
            href={`/product/${item?.name}`}
            key={item?.id}
            className="col-span-1 flex flex-col shadow transition-all ease-in-out duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <picture>
              <img
                src={item?.img}
                alt="slider"
                className="aspect-[16/10] md:aspect-auto object-cover rounded rounded-b-none w-full  
               h-[290px]"
              />
            </picture>

            <div className=" p-2  flex flex-col gap-2 ">
              <p className=" text-lg font-semibold text-[#2d6f6d]">
                {item?.title}
              </p>
              <div className=" flex items-center justify-between">
                <p className=" font-bold text-2xl text-[#2d6f6d]">
                  ${item?.price}
                </p>
                <button

                  class="relative px-5 py-2 font-medium text-white group"
                >
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#2d6f6d] group-hover:bg-[#2d6f6d] group-hover:skew-x-12"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#2d6f6d] group-hover:bg-[#2d6f6d] group-hover:-skew-x-12"></span>
                  <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#2d6f6d] -rotate-12"></span>
                  <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#2d6f6d] -rotate-12"></span>
                  <span class="relative">See Details</span>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewCarSection;
