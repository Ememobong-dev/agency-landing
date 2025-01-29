import React from 'react';
import { Col, Row } from 'antd';
import Image from 'next/image';
import showcase1 from "../../public/images/desktop/image-gallery-milkbottles.jpg";
import showcase2 from "../../public/images/desktop/image-gallery-orange.jpg";
import showcase3 from "../../public/images/desktop/image-gallery-cone.jpg";
import showcase4 from "../../public/images/desktop/image-gallery-sugarcubes.jpg";


const ShowCase = () => {
  return (
    <Row>
        <Col lg={6}>
        <span className="w-full">
          <Image src={showcase1}  className="w-full" alt="" />
        </span>
        </Col>
        <Col lg={6}>
        <span className="w-full">
          <Image src={showcase2}  className="w-full" alt="" />
        </span>
        </Col>
        <Col lg={6}>
        <span className="w-full">
          <Image src={showcase3}  className="w-full" alt="" />
        </span>
        </Col>
        <Col lg={6}>
        <span className="w-full">
          <Image src={showcase4}  className="w-full" alt="" />
        </span>
        </Col>
      </Row>
  )
}

export default ShowCase