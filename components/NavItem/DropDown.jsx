import React from "react";
import { MdElectricBike } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const DropDown = () => {
  return (
    <div>
      <span className=" flex items-center justify-between p-2 border-b">
        <div className=" flex items-center gap-4">
          <MdElectricBike size={20} />
          <p>Electric Bike</p>
        </div>
        <MdKeyboardArrowRight size={15} />
      </span>
    </div>
  );
};

export default DropDown;
