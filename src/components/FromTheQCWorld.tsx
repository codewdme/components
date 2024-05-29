import React from "react";
import Button from "./miniComponents/Button";

function FromTheQCWorld() {
  return (
    <div className="bg-white p-32 flex flex-col gap-8 items-start">
      <span className="text-black text-4xl font-normal tracking-[0.1em] ">
        FROM QUALITY CARS WORLD
      </span>
      <div className="grid grid-cols-3 lg:flex gap-6 w-full">
        <div className="col-span-3 cardWithFloatingHeading w-full lg:w-[45%]  ">
          <span className=" w-full ">WALLPAPERS</span>
        </div>
        <div className=" col-span-2 cardWithFloatingHeading w-full lg:w-[35%]">
          <span className=" w-full  ">MERCHANDISE</span>
        </div>
        <div className="col-span-1 cardWithFloatingHeading w-full lg:w-[20%] ">
          <span className=" w-full ">JOIN US</span>
        </div>
      </div>
      <Button
        title="KNOW MORE ABOUT US"
        className="text-black border-[#CACACA] border-[1px] fill-[#CACACA] hover:bg-black hover:text-white lg:w-[25%] w-[50%]"
      />
    </div>
  );
}

export default FromTheQCWorld;
