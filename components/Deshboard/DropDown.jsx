import React from "react";
import {
    MdOutlineDashboardCustomize,
    MdKeyboardArrowRight,
} from "react-icons/md";
import Second from "./Second";
import { useState } from "react";
import Link from "next/link";

const DropDown = ({ item }) => {
    console.log(item.subCat);

    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <div>
            {item?.link ? (
                <>
                    <Link href={item.url}
                        
                        className="flex items-center py-2 px-4 text-[#2d6f6d] hover:px-6 group  hover:bg-gray-200 duration-300"
                    >
                        <div className="flex flex-1 items-center gap-3">
                            <picture>
                                <img src={item.icon} className="h-4" alt="" />
                            </picture>
                            <h3 className="font-semibold  text-base">
                                {item.name}
                            </h3>
                        </div>
                        {item.subCat.length > 0 ? (
                            <MdKeyboardArrowRight
                                className="group-hover:rotate-90 duration-300"
                                size={20}
                            />
                        ) : (
                            <></>
                        )}
                    </Link>
                </>
            ) : (
                <>
                    <div
                        onClick={() => setShowDropDown(!showDropDown)}
                        className={`flex items-center py-2 px-4 ${showDropDown ? `text-black bg-gray-300` : `hover:bg-gray-200 hover:px-6 group text-[#2d6f6d]`} duration-300`}
                    >
                        <div className="flex flex-1 items-center gap-3">
                            <picture>
                                <img src={item.icon} className="h-4" alt="" />
                            </picture>
                            <h3 className="font-semibold  text-base">
                                {item.name}
                            </h3>
                        </div>
                        {item.subCat.length > 0 ? (
                            <MdKeyboardArrowRight
                                className={`${showDropDown ? `rotate-90` : `group-hover:rotate-90 duration-300`}`}
                                size={20}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                </>
            )}

            <hr />
            <Second
                subcat={item.subCat}
                showDropDown={showDropDown}
                setShowDropDown={setShowDropDown}
            />
        </div>
    );
};

export default DropDown;
