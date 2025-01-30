import React from "react";

const TextAreaBox = ({title,  description }: {title:string;  description:string;}) => {
  return (
    <div className="flex justify-center w-full lg:h-full h-[400px] items-center">
      <div className="flex flex-col lg:justify-center lg:items-center text-base gap-y-6">
        <div className="text-4xl text-center lg:text-left lg:w-1/2 font-frauncesSoftBold text-veryDarkDesaturatedBlue">
          <h3>{title} </h3>
        </div>
        <div className="text-veryDarkGrayishBlue lg:w-1/2 text-center lg:text-left leading-relaxed font-barlowSemiBold">
          <p>
            {description}
          </p>
        </div>
        <div className="text-lg lg:text-left cursor-pointer  uppercase lg:w-1/2 font-frauncesSoftBold text-veryDarkDesaturatedBlue">
          <h3 className="lg:w-32  text-center underline border-b-yellow ">Learn More</h3>
        </div>
      
      </div>
    </div>
  );
};

export default TextAreaBox;
