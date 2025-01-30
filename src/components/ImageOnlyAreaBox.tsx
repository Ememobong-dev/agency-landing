import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageOnlyAreaBox = ({imgSrc }: {imgSrc: StaticImageData }) => {
  return (
    <span className="w-full h-full">
      <Image className="w-full h-full " src={imgSrc} alt="" />
    </span>
  );
};

export default ImageOnlyAreaBox;
