import React from "react";
import Topnav from "@/components/NavItem/Topnav";
import SecNav from "@/components/NavItem/SecNav";
import Lastnav from "@/components/NavItem/Lastnav";

const Header = ({ setOpenmodal,setOpenSignUpModal }) => {

  
  return (
    <header class="bg-white">
      <Topnav setOpenmodal={setOpenmodal} setOpenSignUpModal={setOpenSignUpModal} />
      <hr className=" bg-slate-800" />
      <SecNav />
      <Lastnav />
    </header>
  );
};

export default Header;
