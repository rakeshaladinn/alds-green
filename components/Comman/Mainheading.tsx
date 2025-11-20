import React from "react";

interface Mainprops {
  Title?: string;
  SubTitle?: string;
  Description?: string;
  Icon?: React.ReactNode;
  center?: any;
  color?: any;
}

const Mainheading: React.FC<Mainprops> = ({
  Title,
  SubTitle,
  Description,
  Icon,
  center,
  color,
}) => {
  return (
    <div className="max-w-3xl mb-6">
      {SubTitle && (
        <h4
          className={`${
            center ? "text-center justify-center " : "text-start justify-start"
          } text-base md:text-lg uppercase text-primary  font-semibold tracking-[0.35em] flex items-center gap-3`}
        >
          {Icon && <span className="text-xl">{Icon}</span>}
          {SubTitle}
        </h4>
      )}

      {Title && (
        <h2
          className={` text-2xl md:text-3xl lg:text-4xl font-semibold  leading-tight mt-2 font-sans ${
            color ? color : "text-black"
          } ${center ? "text-center" : "text-start"}`}
        >
          {Title}
        </h2>
      )}

      {Description && (
        <p className="text-[#5f6f81] mt-4 leading-relaxed text-base md:text-lg font-normal">
          {Description}
        </p>
      )}
    </div>
  );
};

export default Mainheading;
