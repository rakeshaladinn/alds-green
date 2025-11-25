"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface TextboxProps {
  id: string;
  placeholder?: string;
  type?: string;
  formik?: any;
  label?: any;
  className?: any;
  labelStyle?: any;
  input_className?: any;
  disabled?: any;
  hideError?: boolean;
  min?: any;
  maxLength?: any;
  onChange?: (values: any) => void;
  required?: boolean;
  mainStyle?: any;
  rows?: number;
}

const TextBox = ({
  id,
  placeholder,
  type = "text",
  formik,
  label,
  input_className,
  disabled = false,
  hideError = false,
  min,
  maxLength,
  onChange,
  labelStyle = " text-labelText font-poppins font-normal text-sm 2xl:text-base 3xl:font-medium ",
  className = " relative rounded flex items-center justify-between pl-2 py-1 3xl:p-4 w-full border",
  required = false,
  mainStyle = "w-full md:w-1/2 px-4",
  rows,
}: TextboxProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const formValue = formik?.values[id] || formik?.getFieldProps(id)?.value;
  const error = formik?.errors[id];
  const touched = formik?.touched[id];
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (value: any) => {
    if (type === "email" && typeof value === "string") {
      value = value.toLowerCase();
    }

    if (onChange) {
      onChange(value);
    } else {
      formik?.setFieldValue(id, value);
    }
  };

  return (
    <div className={`sm:space-y-1 ${mainStyle}`}>
      {label && (
        <label
          className={`${labelStyle} flex text-nowrap capitalize text-gray-300`}
          htmlFor={id}
        >
          {label.replaceAll("_", " ")}
          {required && <p className="text-primary">*</p>}
        </label>
      )}

      <div
        className={` rounded 
  ${touched && error ? "border border-red-500" : ""}`}
      >
        {type !== "color" &&
          (type !== "textarea" ? (
            id === "number" ? (
              <div className="flex items-center gap-2 w-full">
                {/* Country Code Select */}
                <select
                  className="px-3 py-3 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
                  onChange={(e) =>
                    formik?.setFieldValue("countryCode", e.target.value)
                  }
                  value={formik?.values?.countryCode || "+91"}
                >
                  <option value="+91"> +91</option>
                  <option value="+1">+1</option>
                  <option value="+44"> +44</option>
                  <option value="+971"> +971</option>
                </select>

                {/* Phone Number */}
                <input
                  type="number"
                  value={formValue}
                  disabled={disabled}
                  min={min}
                  maxLength={maxLength}
                  onChange={(e: any) => handleChange(e?.target?.value)}
                  onBlur={formik?.handleBlur(id)}
                  placeholder={placeholder}
                  className={` ${input_className}   outline-none w-full text-xs `}
                />
              </div>
            ) : (
              <input
                type={
                  type === "password"
                    ? !showPassword
                      ? "password"
                      : "text"
                    : type
                }
                value={formValue}
                disabled={disabled}
                min={min}
                maxLength={maxLength}
                onChange={(e: any) => handleChange(e?.target?.value)}
                onBlur={formik?.handleBlur(id)}
                placeholder={placeholder}
                className={` ${input_className}   outline-none w-full text-xs   `}
              />
            )
          ) : (
            <textarea
              disabled={disabled}
              className={` ${input_className} text-black outline-none w-full`}
              rows={rows ? rows : 3}
              onChange={(e: any) => handleChange(e?.target?.value)}
              onBlur={formik?.handleBlur(id)}
              placeholder={placeholder}
              value={formValue}
            />
          ))}

        {type === "password" && (
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? (
              <FaEye className="text-black 2xl:text-xl mr-2" />
            ) : (
              <FaEyeSlash className="text-black 2xl:text-xl mr-2" />
            )}
          </button>
        )}

        {type == "color" && (
          <div className="flex justify-between w-full ">
            <input
              type="color"
              value={formValue}
              onChange={(e: any) => handleChange(e?.target?.value)}
              className="border w-1/3"
            />
            <p>{formValue}</p>
          </div>
        )}
      </div>

      {touched && error && !hideError && (
        <p className=" text-sm text-red-500 3xl:text-lg">{error}</p>
      )}
    </div>
  );
};

export default TextBox;
