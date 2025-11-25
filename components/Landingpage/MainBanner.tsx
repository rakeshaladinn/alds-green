"use client";

import Image from "next/image";
import { ImageAssest } from "@/constant/Imageassest";
import Modalform from "../Comman/Modalform";
import { RiArrowRightUpLine } from "react-icons/ri";

const MainBanner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <Image
        src={ImageAssest.banner}
        alt="Banner"
        fill
        className="object-cover w-full h-full"
        priority
      />

      <div
        className="absolute inset-0
  bg-[linear-gradient(to_bottom,#031C43_0%,#031C43CC_30%,#BDBDBD0D_100%)]"
      ></div>
      <div className="relative z-30 w-full px-4 sm:px-6 lg:px-10 xl:px-14  py-10 flex flex-col xl:flex-row items-start gap-10 overflow-hidden h-full">
        <div className="w-full xl:w-[53%] text-white space-y-5 mt-8">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold leading-snug">
            Schedule a Free Demo of ALDS Green
          </h1>

          <p className="text-white/90 max-w-2xl text-sm md:text-base">
            Experience a walkthrough of our all-in-one platform built to
            streamline your projects, sales, financials, field operations, and
            customer management.
          </p>

          {/* Bullet Points */}
          <div className="space-y-4 mt-12">
            {[
              "Automate your end-to-end operations",
              "Built for solar, wind & hybrid RE businesses",
              "Real-time dashboards & reporting",
              "Customizable workflows",
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-medium-green flex items-center justify-center text-black text-sm font-bold">
                  <RiArrowRightUpLine className="text-white" />
                </div>
                <p className="text-white/95 text-base md:text-lg">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="font-medium text-white/90">Trusted by</p>
            <div className="flex flex-wrap gap-6 mt-4 items-center">
              <Image
                src={ImageAssest.taka}
                alt="logo1"
                width={120}
                height={80}
              />
              <Image
                src={ImageAssest.phintex}
                alt="logo2"
                width={120}
                height={80}
              />
              <Image
                src={ImageAssest.taka}
                alt="logo3"
                width={120}
                height={80}
              />
              <Image
                src={ImageAssest.phintex}
                alt="logo4"
                width={120}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="w-full hidden xl:block xl:w-[43%] ">
          <div className="w-[400px] absolute bg-center  bg-no-repeat top-[20%] right-[25%] 2xl:right-[30%] 3xl:right-[33%] -z-30 h-[400px] bg-[url('/blob2.png')] bg-contain"></div>
          <div className="w-[500px] absolute bg-top bg-no-repeat    -right-3  top-0 -z-10 h-full bg-[url('/blob.png')] bg-contain"></div>
          <div className="w-[400px] absolute  bg-no-repeat rotate-45  right-28  top-72 -z-10 h-full bg-[url('/blob.png')] bg-contain"></div>
          <Modalform title="Demo Scheduling Form" />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
