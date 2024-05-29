import Image from "next/image";
import React from "react";
import image from "../assets/images/heroBanner2.jpg";
import Button from "./miniComponents/Button";
import IconBoxAndDetails from "./miniComponents/IconBoxAndDetails";
import { BiMessageCheck as Icon1 } from "react-icons/bi";
import { IoCarSportOutline as Icon2 } from "react-icons/io5";
import { GrDocumentText as Icon3 } from "react-icons/gr";

function HeroBanner3() {
  const iconsBoxes = [
    {
      svg: <Icon1 className="h-[30px] w-[30px] " />,

      className: "text-[#6D6D6D] fill-[#2F2F2F]",
      details: { line1: "Expert Review On Luxury Cars", line2: "" },
    },
    {
      svg: <Icon2 className="h-[30px] w-[30px] " />,
      className: "text-[#6D6D6D] fill-[#2F2F2F]",
      details: { line1: "Compare Your Favorite Cars", line2: "" },
    },
    {
      svg: <Icon3 className="h-[30px] w-[30px] " />,
      className: "text-[#6D6D6D] fill-[#2F2F2F]  ",
      details: {
        line1: "More Than 317 Luxury Cars &",
        line2: "It's In Depth Specifications",
      },
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:gap-6 gap-16 w-full h-full  justify-between bg-black lg:p-32 p-20">
        <div className=" flex flex-col   justify-between h-[700px] w-full py-16">
          <div className="text-5xl font-semibold tracking-wide text-white">
            <p className="  ">BROWSE QUALITY CARS</p>
            <p className="  ">DATABASE OF NEW LUXURY</p>
            <p className="  ">CARS IN INDIA</p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {iconsBoxes.map((icon, index) => (
              <IconBoxAndDetails key={index} icon={icon} />
            ))}
          </div>
          <Button
            title="EXPLORE"
            className="bg-[#333333] fill-white hover:bg-[#1A1A1A] w-[50%]"
          />
        </div>
        <div className="w-full  rounded-2xl overflow-hidden">
          <Image
            className="h-full w-full object-contain "
            src={image}
            alt="showroom image"
          />
        </div>
      </div>
    </>
  );
}

export default HeroBanner3;
