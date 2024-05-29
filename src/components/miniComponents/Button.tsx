import React from "react";

function Button({ title = "BUTTON TITLE", showArrow = true, className = "" }) {
  return (
    <button
      type="button"
      className={`${
        className
          ? className
          : "hover:bg-black  bg-transparent text-black hover:text-white fill-[#CACACA] hover:fill-white border-[1px] border-[#CACACA] text-xl  w-[50%] "
      } px-4 pl-6 py-4 flex justify-between items-center group transition ease-in-out duration-300 rounded-xl tracking-[.2em]`}
    >
      <span>{title}</span>

      <svg
        className={`${
          showArrow ? "" : "hidden"
        }  w-[15px] h-[15px] group-hover:translate-x-1   transition ease-in-out duration-150`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
      </svg>
    </button>
  );
}

export default Button;
