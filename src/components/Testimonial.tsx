import { Col, Row } from 'antd';
import React from 'react';
import emily from "../../public/images/image-emily.jpg";
import thomas from "../../public/images/image-thomas.jpg";
import jennie from "../../public/images/image-jennie.jpg";
import Image from 'next/image';


const testimonialData = [
    {
      name: "Emily R",
      position: "Marketing Director",
      testimony:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      image: emily,
    },
    {
      name: "Thomas S",
      position: "Chief Operating Officer",
      testimony:
        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      image: thomas,
    },
    {
      name: "Jennie F",
      position: "Business Owner",
      testimony:
        " Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      image: jennie,
    },
  ];
  


const Testimonial = () => {
    
  return (
    <Row justify={"center"} className="md:p-20">
    <Col xs={22}>
      <div className="flex py-10 justify-center font-frauncesSoftBold ">
        <h3 className="text-2xl tracking-widest uppercase text-grayishBlue">
          Client testimonials
        </h3>
      </div>

      <div className="flex justify-center">
        <Row>
          {testimonialData.map((item) => (
            <Col lg={8} key={item.name} className='mb-20 md:mb-0'>
              <div className="flex flex-col items-center text-base justify-center gap-y-5">
                <span className="flex justify-center">
                  <Image
                    src={item.image}
                    className=" rounded-full w-20 h-20"
                    alt="emily"
                  />
                </span>
                <span className="md:px-10">
                  <p className="text-center text-veryDarkGrayishBlue leading-relaxed font-barlowSemiBold"> {item.testimony} </p>
                </span>
                <span className="text-center">
                  <p className="text-veryDarkDesaturatedBlue uppercase font-frauncesSoftBold text-base tracking-wider "> {item.name}. </p>
                  <p className="text-grayishBlue tracking-wider font-frauncesBold"> {item.position} </p>
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  </Row>
  )
}

export default Testimonial