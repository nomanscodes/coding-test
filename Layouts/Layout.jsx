'use client'
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SessionProvider } from "next-auth/react";


const Layout = ({ children, setOpenmodal, setOpenSignUpModal }) => {
  return (
    <SessionProvider >
 
        <Header setOpenmodal={setOpenmodal} setOpenSignUpModal={setOpenSignUpModal} />
        <div>{children}</div>
        <Footer />
    
    </SessionProvider>
  );
};

export default Layout;
