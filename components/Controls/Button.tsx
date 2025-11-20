"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface IButton {
  loaderType?: "loader" | "white-loader";
  text: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  link?: any;
  className?: string;
}

export default function Button({
  loaderType = "loader",
  text,
  loading = false,
  disabled = false,
  onClick,
  icon,
  type = "submit",
  className = "bg-white w-full text-purple rounded-sm py-2 px-4  ",
  link,
}: IButton) {
  const [linkLoading, setLinkLoading] = useState<any>(false);
  return (
    <>
      {link ? (
        <Link
          onClick={() => setLinkLoading(true)}
          href={link}
          className={` whitespace-nowrap  hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out p-2 cursor-pointer flex items-center justify-center gap-2 disabled:cursor-not-allowed ${className}`}
        >
          {text}
          {icon}
          {(loading || linkLoading) && <p className={`${loaderType} ml-2`}></p>}
        </Link>
      ) : (
        <button
          type={type}
          disabled={loading || disabled}
          onClick={onClick}
          className={` ${className}  hover:scale-105 capitalize active:scale-95 whitespace-nowrap  transition-all duration-200 ease-in-out cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2 `}
        >
          {text} {loading ? <p className={`${loaderType} ml-2`}></p> : icon}
        </button>
      )}
    </>
  );
}
