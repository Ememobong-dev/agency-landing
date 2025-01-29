import Image from "next/image";
import arrowDown from "../../public/images/icon-arrow-down.svg";
import eggImg from "../../public/images/desktop/image-transform.jpg";
import cupImg from "../../public/images/desktop/image-stand-out.jpg";
import cherryImg from "../../public/images/desktop/image-graphic-design.jpg";
import orange from "../../public/images/desktop/image-photography.jpg";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <div>
      <div className="header_img flex flex-col">
        <div className="flex flex-col gap-10 pt-44 justify-center items-center">
          <h3 className="text-white my-5 font-frauncesRBold tracking-widest text-5xl uppercase ">
            We are creatives
          </h3>
          <span>
            <Image src={arrowDown} alt="arrow down" />
          </span>
        </div>
      </div>
      <Row justify={"center"}>
        <Col xs={22} lg={12}>
          <div className="flex justify-center w-full h-full bg-[red] items-center">
            <div className="flex flex-col pl-28">
              <h3>Transform your brand</h3>
              <p>We are a full-service creative agency specializing in</p>
              <p>helping brands grow fast. Engage your clients through</p>
              <p>compelling visuals that do most of the marketing for you.</p>
              <p className="uppercase border-b-yellow  ">Learn More</p>
            </div>
          </div>
        </Col>
        <Col xs={22} lg={12}>
          <span className="w-full">
            <Image className="w-full " src={eggImg} alt="" />
          </span>
        </Col>

        <Col xs={22} lg={12}>
          <span className="w-full">
            <Image className="w-full" src={cupImg} alt="" />
          </span>
        </Col>
        <Col xs={22} lg={12}>
          <div className="flex justify-center w-full h-full bg-[red] items-center">
            <div className="flex flex-col pr-28">
              <h3>Transform your brand</h3>
              <p>We are a full-service creative agency specializing in</p>
              <p>helping brands grow fast. Engage your clients through</p>
              <p>compelling visuals that do most of the marketing for you.</p>
              <p className="uppercase border-b-yellow  ">Learn More</p>
            </div>
          </div>
        </Col>
        <Col xs={22} lg={12}>
          <div className="flex justify-center  w-full items-center">
            <span className="relative w-full">
              <Image className="w-full" src={cherryImg} alt="" />
            </span>
            <div className="absolute  bottom-20">
              <span className="flex flex-col justify-center text-center mx-auto">
                <p className="text-darkDesaturatedCyan flex justify-center text-center font-frauncesSoftBold font-bold text-3xl ">
                  Graphic Design
                </p>
                <span className="font-barlowBold font-bold my-5 text-darkDesaturatedCyan ">
                  <p>Great design makes you memorable. We deliver</p>
                  <p>artwork that underscores your brand message</p>
                  <p>and captures potential clients’ attention.</p>
                </span>
              </span>
            </div>
          </div>
        </Col>
        <Col xs={22} lg={12}>
          <div className="flex justify-center w-full items-center">
            <span className="relative w-full">
              <Image className="w-full" src={orange} alt="" />
            </span>
            <div className="absolute bottom-20">
              <span className="flex flex-col justify-center text-center mx-auto">
                <p className="text-darkBlue flex justify-center text-center font-frauncesSoftBold font-bold text-3xl ">
                  Photography
                </p>
                <span className="font-barlowBold my-5 text-darkBlue ">
                  <p>Increase your credibility by getting the most</p>
                  <p>stunning, high-quality photos that improve your</p>
                  <p>business image.</p>
                </span>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
