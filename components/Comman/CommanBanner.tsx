"use client";
import React from "react";
interface CommanBanner {
  Title?: string;
  background?: any;
}
const CommanBanner = ({ Title, background }: CommanBanner) => {
  return (
    <div
      className={` h-[40vh]  md:h-[50vh] lg:h-[65vh] ${
        background ? background : "bg-[url('/bg.png')]"
      } bg-center bg-no-repeat bg-cover relative`}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="flex items-center justify-center h-full relative z-20">
        <h4 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium capitalize">
          {Title}
        </h4>
      </div>
    </div>
  );
};

export default CommanBanner;
