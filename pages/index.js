/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import HeroSection from "@/components/HeroSection";
import SponsorShip from "@/components/SponsorShip";
import NewCarSection from "@/components/NewCarSection";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Layout from "@/Layouts/Layout";
import LoginModal from "@/components/Modal/LoginModal";
import { useState } from "react";
import SignupModal from "@/components/Modal/SignupModal";
import Head from "next/head";

const index = () => {
  const [onenModal, setOpenmodal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  return (
    <>
      <Head>
        <title>Super car store</title>
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

      <Layout
        setOpenmodal={setOpenmodal}
        setOpenSignUpModal={setOpenSignUpModal}
      >
        <div className="md:container md:mx-auto p-2 md:p-0">
          <HeroSection
            onenModal={onenModal}
            openSignUpModal={openSignUpModal}
          />
          <Banner2 />
          <SponsorShip />
          <NewCarSection />
          <Banner />
        </div>
      </Layout>
    </>
  );
};

export default index;
