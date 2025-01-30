import Image from "next/image";
import arrowDown from "../../public/images/icon-arrow-down.svg";
import eggImg from "../../public/images/desktop/image-transform.jpg";
import cupImg from "../../public/images/desktop/image-stand-out.jpg";
import { Col, Row } from "antd";
import Testimonial from "@/components/Testimonial";
import ShowCase from "@/components/ShowCase";
import Footer from "@/components/Footer";
import TextAreaBox from "@/components/TextAreaBox";
import ImageOnlyAreaBox from "@/components/ImageOnlyAreaBox";
import ImageTextArea from "@/components/ImageTextArea";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="header_img flex flex-col">
        <Navbar />
        <div className="flex flex-col gap-10 pt-24 justify-center items-center">
          <h3 className="text-white my-5 font-frauncesBold tracking-widest text-5xl uppercase text-center ">
            We are creatives
          </h3>
          <span>
            <Image src={arrowDown} alt="arrow down" />
          </span>
        </div>
      </div>
      <Row className="w-full">
        <Col xs={{ span:24, order: 2 }} md={{ span:12, order: 1 }}>
          <TextAreaBox
            title="Transform your brand"
            description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          />
        </Col>
        <Col xs={{ span:24, order: 1 }} md={{ span:12, order: 2 }}>
          <ImageOnlyAreaBox imgSrc={eggImg} />
        </Col>

        <Col xs={{ span:24, order: 3 }} md={{ span:12, order: 3 }}>
          <ImageOnlyAreaBox imgSrc={cupImg} />
        </Col>
        <Col xs={{ span:24, order: 4 }} md={{ span:12, order: 4 }}>
          <TextAreaBox
            title="Stand out to the right audience"
            description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
          />
        </Col>
        <Col xs={{ span:24, order: 5 }} md={{ span:12, order: 5 }}>
        <ImageTextArea title="Graphic Design" 
        description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        imgBg="graphics_bg"
        />
        </Col>
        <Col xs={{ span:24, order: 6 }} md={{ span:12, order: 6 }}>
        <ImageTextArea title="Photography" 
        description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        imgBg="photography_bg"
        />
        </Col>
      </Row>
      <Testimonial />
      <ShowCase />
      <Footer />
    </div>
  );
}
