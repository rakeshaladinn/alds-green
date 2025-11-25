import React from "react";
import Image from "next/image";
import { ImageAssest } from "@/constant/Imageassest";
import Slider from "../UI/Slider";
import Button from "../Controls/Button";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function PlatformPreview() {
  const images = [
    ImageAssest.lead1,
    ImageAssest.lead2,
    ImageAssest.lead3,
    ImageAssest.lead1,
    ImageAssest.lead2,
    ImageAssest.lead3,
  ];

  return (
    <section className="w-full bg-[#005242] py-20 px-6 flex flex-col items-center overflow-hidden ">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl  font-semibold">
        Platfrom Preview
      </h2>
      <p className="mt-2 text-base md:text-lg lg:text-xl mb-10 text-white font-[300]">
        A Quick Look Inside ALDS Green
      </p>

      <Slider
        breakpoints={{ lg: 3, xl: 3, md: 2 }}
        arrow={true}
        autoplay
        // navigation={true}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative lg:my-32 2xl:my-40 3xl:my-48 mb-1 mx-4 md:mx-6 overflow-hidden"
          >
            <Image
              src={src}
              alt={`slide-${i}`}
              width={1920}
              height={1080}
              className="rounded-xl h-full object-contain object-center relative z-20 px-4 pt-4 lg:px-8  lg:pt-8 "
            />
            <div className="absolute z-30 rounded-2xl inset-0 bg-[linear-gradient(to_bottom,#FFFFFF00_0%,#FFFFFF00_80%,#2F9D3F4D_100%)]"></div>
            <div className="absolute inset-0 z-10 rounded-2xl bg-[linear-gradient(135deg,#0CC7B9_0%,#55D39C_40%,#C5E878_100%)]" />
          </div>
        ))}
      </Slider>

      <Button
        text="  View Full Feature Library"
        icon={
          <RiArrowRightUpLine
            size={30}
            className="text-white bg-black p-1 rounded-full"
          />
        }
        className="mt-14 green-gradient text-white px-6 py-3 rounded-full flex items-center gap-6 hover:bg-emerald-700 transition"
      ></Button>
    </section>
  );
}
