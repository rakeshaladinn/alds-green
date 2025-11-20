"use client";
import Image from "next/image";
import { ImageAssest } from "@/constant/Imageassest";
import Button from "../Controls/Button";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function ContactBeforeDemo() {
  return (
    <section className="relative w-full py-10 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <Image
        src={ImageAssest.Bookdemo} // <-- Replace with your image
        alt="Wind Turbines"
        fill
        className="object-cover"
        priority
      />

      {/* Soft Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031C4300] to-[#031C43]"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Have questions before booking demo?
        </h2>

        {/* Sub Text */}
        <p className="text-white/90 mt-3">
          We’re here to help you understand if ALDS Green is the right fit. You{" "}
          <br />
          can reach out anytime.
        </p>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <Button
            text="Contact Us"
            icon={<RiArrowRightUpLine size={20} />}
            className="bg-[#4cd137] text-black font-medium px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#44bd32] transition"
          ></Button>
        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-white/90 text-sm md:text-base">
          Our team will guide you through the platform and help you determine
          the <br />
          best setup for your renewable energy business.
        </p>
      </div>
    </section>
  );
}
