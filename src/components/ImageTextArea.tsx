import React from "react";

const ImageTextArea = ({
  imgBg,
  title,
  description,
}: {
  imgBg?: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={` ${imgBg} flex flex-col justify-end w-full h-full items-center`}>
        <p className="text-darkDesaturatedCyan flex justify-center text-center font-frauncesSoftBold font-bold text-3xl ">
          {title}
        </p>
      <span className="flex flex-col px-8 md:px-0 md:w-1/2 justify-center text-center mx-auto">
        <span className="font-barlowBold font-bold my-5 descr ">
          {description}
        </span>
      </span>
    </div>
  );
};

export default ImageTextArea;
