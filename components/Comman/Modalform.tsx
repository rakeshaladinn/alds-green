"use client";

import TextBox from "../Controls/TextBox";
import useAuth from "@/app/CustomHooks/useAuth";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Controls/Button";

const Modalform = ({ title }: { title?: any }) => {
  const { EnquiryFormik, EnquiryFormaData } = useAuth();

  return (
    <div className="bg-white/95 p-4  px-5 md:px-6 w-full mt-6 xl:mt-0 rounded-2xl ">
      {/* Title */}
      {title && (
        <h2 className="text-xl xl:text-2xl text-medium-green font-semibold text-center mb-6">
          {title}
        </h2>
      )}

      {/* FORM */}
      <form
        onSubmit={EnquiryFormik?.handleSubmit}
        className="grid grid-cols-2 gap-4 w-full "
      >
        {/* Mapping all fields */}
        {EnquiryFormaData?.map((item: any, index: number) => (
          <div key={index} className={``}>
            <TextBox
              label={item?.label}
              labelStyle="text-xs font-normal text-gray-500 mb-1"
              placeholder={item?.placeholder}
              className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
              id={item.id}
              type={item.type}
              formik={EnquiryFormik}
              disabled={item.disabled}
              mainStyle="w-full"
            />
          </div>
        ))}

        {/* Checkbox */}
        <div className="col-span-2 flex items-center  gap-2 mt-1">
          <input type="checkbox" className="mt-1 w-4 h-4 accent-[#2E7D32]" />
          <label className="text-xs text-gray-700 leading-tight mt-2">
            I agree to be contacted regarding my demo.
          </label>
        </div>

        {/* BUTTON */}
      </form>
      <div className="w-full flex justify-center items-center mt-5">
        <Button
          text={
            EnquiryFormik.isSubmitting ? "Sending..." : " Schedule My Demo "
          }
          icon={<FaArrowRightLong />}
          type="submit"
          className=" w-[80%] px-2 mt-2 bg-[#2E7D32] hover:bg-[#27682B] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={EnquiryFormik.isSubmitting}
        ></Button>
      </div>
    </div>
  );
};

export default Modalform;
