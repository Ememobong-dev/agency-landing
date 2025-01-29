import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import facebook from "../../public/images/icon-facebook.svg";
import instagram from "../../public/images/icon-instagram.svg";
import twitter from "../../public/images/icon-twitter.svg";
import pinterest from "../../public/images/icon-pinterest.svg";




const Footer = () => {
  return (
    <div className="bg-[#A0DDCE]  p-20">
      <Row justify={"center"}>
        <Col xs={22}>
          <div className="flex flex-col justify-center items-center">
            <span>
                <p className="text-darkDesaturatedCyan font-frauncesSoftBold text-2xl ">Sunnyside</p>
            </span>
            <div className="flex gap-9 my-8 cursor-pointer text-darkDesaturatedCyan font-barlowBold">
              <span className="hover:text-white">
                <p>About</p>
              </span>
              <span className="hover:text-white">
                <p>Services</p>
              </span>
              <span className="hover:text-white">
                <p>Projects</p>
              </span>
              <span className="hover:text-white">
                <p>Contact</p>
              </span>
            </div>
            <div className="flex gap-9 cursor-pointer my-8">
              <span>
                <Image src={facebook} alt="facebook" />
              </span>
              <span>
                <Image src={instagram} alt="instagram" />
              </span>
              <span>
                <Image src={twitter} alt="twitter" />
              </span>
              <span>
                <Image src={pinterest} alt="pinInterest" />
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
