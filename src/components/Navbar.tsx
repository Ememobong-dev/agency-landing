"use client";

import Image from "next/image";
import React, { useState } from "react";
import brandLogo from "../../public/images/logo.svg";
import hamburger from "../../public/images/icon-hamburger.svg";
import { CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileNavOpen(true);
  };

  return (
    <div className="bg-transparent p-10">
      <div className="flex justify-between items-center text-white">
        <span>
          <Image src={brandLogo} alt="brand-logo" />
        </span>
        <div className="hidden md:flex">
          <ul className="text-white flex text-base  font-barlowBold items-center gap-10">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <span className="py-2 px-8 font-frauncesBold bg-white hover:bg-white/50 text-black rounded-full text-center cursor-pointer">
              <p>CONTACT</p>
            </span>
          </ul>
        </div>
        <div className="md:hidden">
            {
                !mobileNavOpen ? (
                    <span onClick={handleMobileNav}>
                    <Image src={hamburger} alt="hamburger" />
                  </span>
                ) :
                (
                    <span  onClick={() => setMobileNavOpen(false)}>
                        <CloseOutlined  style={{ fontSize: 28 }} />
                    
                    </span>
                )

            }
         
        </div>
      </div>
      {mobileNavOpen && (
        <div className="bg-white p-8 gap-5 text-darkGrayishBlue font-barlowBold   mt-10 flex justify-center items-center flex-col">
          <span>About</span>
          <span>Services</span>
          <span>Projects</span>
          <span className="py-2 px-8 font-frauncesBold bg-yellow text-black rounded-full text-center cursor-pointer">
            <p>CONTACT</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
