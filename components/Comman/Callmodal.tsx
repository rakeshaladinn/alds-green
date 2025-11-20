import React from "react";

const Callmodal = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col gap-6 justify-center items-center text-center">
        <p className="text-gray-600 text-sm md:text-base max-w-sm">
          Our team is available 24/7 to assist you. Tap a number to call
          directly.
        </p>

        <div className="flex flex-col gap-4  max-w-xs  py-5 ">
          <a
            href="tel:+91-9164-67-9164"
            className="bg-primary hover:bg-black transition-all duration-300 text-white text-lg font-semibold py-3 px-6 rounded-full w-full text-center"
          >
            +91-9164-67-9164{" "}
            <span className="text-base font-normal">(Guwahati)</span>
          </a>
          <a
            href="tel:+91-9057-64-4644"
            className="bg-primary hover:bg-black transition-all duration-300 text-white text-lg font-semibold py-3 px-6 rounded-full w-full text-center"
          >
            +91-9057-64-4644{" "}
            <span className="text-base font-normal">(Agartala)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Callmodal;
