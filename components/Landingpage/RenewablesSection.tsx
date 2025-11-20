import { ImageAssest } from "@/constant/Imageassest";
import Image from "next/image";

export default function RenewablesSection() {
  const items = [
    "Solar EPC Companies",
    "EV Charger Installers",
    "Rooftop & Utility-Scale Providers",
    "Wind Energy Maintenance Firms",
    "Hybrid & Multi-RES Businesses",
    "Rooftop & Utility-Scale Providers",
    "Wind Energy Maintenance Firms",
    "Hybrid & Multi-RES Businesses",
  ];

  return (
    <section className="w-full bg-[#F1F3F0] py-16 px-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Built for Renewables
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Tailored to Every Renewable Energy Business
        </p>
      </div>

      {/* Horizontally scrollable cards */}
      <div className="flex gap-6 overflow-x-auto mt-12 px-2 pb-4 hide-scrollbar">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[320px] h-28 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center overflow-hidden"
          >
            {/* Overlay gradient blobs (top-left + bottom-right) */}
            <Image
              src={ImageAssest.Leftttop}
              alt="Banner"
              width={1920}
              height={1080}
              className="absolute bottom-0 left-0 w-20 h-20"
              priority
            />

            <span className="relative z-10 text-gray-700 text-sm font-medium  text-center">
              {item}
            </span>
            <Image
              src={ImageAssest.Righttop}
              alt="Banner"
              width={1920}
              height={1080}
              className="absolute top-0 right-0 w-20 h-20"
              priority
            />
          </div>
        ))}
      </div>

      {/* Bottom description */}
      <p className="text-center text-gray-600 text-sm mt-10 max-w-xl mx-auto">
        ALDS Green adapts to workflows of various renewable energy segments.
        During the demo, we’ll show the modules that match your business.
      </p>
    </section>
  );
}
