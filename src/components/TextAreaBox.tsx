import React from "react";

const TextAreaBox = ({title,  description }: {title:string;  description:string;}) => {
  return (
    <div className="flex justify-center w-full h-full items-center">
      <div className="flex flex-col justify-center items-center text-base gap-y-8">
        <div className="text-4xl w-1/2 font-frauncesSoftBold text-veryDarkDesaturatedBlue">
          <h3>{title} </h3>
        </div>
        <div className="text-veryDarkGrayishBlue w-1/2 leading-relaxed font-barlowSemiBold">
          <p>
            {description}
          </p>
        </div>
        <div className="text-lg  cursor-pointer  uppercase w-1/2 font-frauncesSoftBold text-veryDarkDesaturatedBlue">
          <h3 className="w-32 underline border-b-yellow ">Learn More</h3>
        </div>
      
      </div>
    </div>
  );
};

export default TextAreaBox;
