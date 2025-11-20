"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface TextboxProps {
  id: string;
  placeholder?: string;
  type?: string;
  formik: any;
  label?: any;
  className?: any;
  labelStyle?: any;
  input_class_name?: any;
  disabled?: boolean;
  hideError?: boolean;
  min?: any;
  maxLength?: any;
  onChange?: (values: any) => void;
  required?: boolean;
  mainStyle?: any;
  options?: { label: string; value: string }[];
  searcherror?: any;
}

const SelectBox = ({
  id,
  placeholder,
  type = "select",
  formik,
  label,
  input_class_name,
  disabled = false,
  hideError = false,
  min,
  maxLength,
  onChange,
  labelStyle = "text-labelText font-poppins font-normal text-sm 2xl:text-base 3xl:font-semibold",
  className = "relative rounded flex items-center justify-between pl-2 py-1 3xl:p-4 w-full border",
  required = false,
  mainStyle = "w-full md:w-1/2 px-4",
  options = [],
  searcherror = true,
}: TextboxProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const formValue = formik?.values[id] || formik?.getFieldProps(id)?.value;
  const error = formik?.errors[id];
  const touched = formik?.touched[id];
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
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
          className={`${labelStyle} flex text-nowrap sm:text-lg capitalize text-xl 3xl:text-2xl font-semibold text-gray-600`}
          htmlFor={id}
        >
          {label.replaceAll("_", " ")}
          {required && <p className="text-primary ml-1">*</p>}
        </label>
      )}

      <div
        className={`${className} ${touched && error ? "border-red-500" : ""}`}
      >
        {type === "select" ? (
          <select
            id={id}
            disabled={disabled}
            value={formValue}
            onChange={(e) => handleChange(e?.target?.value)}
            onBlur={formik?.handleBlur(id)}
            className={`flex-1 items-center flex  outline-none  3xl:text-2xl ${input_class_name}`}
          >
            <option value="" className="text-gray-600">
              {placeholder}
            </option>
            {options?.map((opt, idx) => (
              <option key={idx} value={opt.value} className="text-gray-600">
                {opt.label}
              </option>
            ))}
          </select>
        ) : type !== "color" ? (
          <input
            id={id}
            type={
              type === "password" ? (!showPassword ? "password" : "text") : type
            }
            disabled={disabled}
            min={min}
            maxLength={maxLength}
            onChange={(e) => handleChange(e?.target?.value)}
            onBlur={formik?.handleBlur(id)}
            placeholder={placeholder}
            value={formValue}
            className={`flex-1 outline-none text-gray-400 3xl:text-2xl ${input_class_name}`}
          />
        ) : (
          <div className="flex justify-between w-full">
            <input
              id={id}
              type="color"
              disabled={disabled}
              value={formValue}
              onChange={(e) => handleChange(e?.target?.value)}
              className="border w-1/3"
            />
            <p>{formValue}</p>
          </div>
        )}

        {type === "password" && (
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? (
              <FaEye className="text-black 2xl:text-xl mr-2" />
            ) : (
              <FaEyeSlash className="text-black 2xl:text-xl mr-2" />
            )}
          </button>
        )}
      </div>

      {touched && error && !hideError && searcherror && (
        <p className="text-sm text-primary 3xl:text-lg">{error}</p>
      )}
    </div>
  );
};

export default SelectBox;
