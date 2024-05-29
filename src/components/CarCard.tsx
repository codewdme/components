import Image from "next/image";
import React from "react";
import carIcon from "../assets/images/header1.jpg";

function CarCard({ car }: any) {
  return (
    <div className="flex flex-col justify-between p-4 min-w-[400px] gap-4 text-black font-medium">
      <div className=" w-full ">
        <Image
          className="border-black border-2 object-contain h-full w-full rounded-xl"
          src={car?.image || carIcon}
          alt="car image"
        />
      </div>
      <div className="flex items-center justify-start w-full">
        <span className="text-2xl font-semibold">{car?.modelName}</span>
      </div>
      <div className="flex justify-between items-center w-full text-[#69686D] text-base tracking-normal">
        <span>
          {/* options */}REG.YEAR -{" "}
          <span className="text-black">{car?.regYear}</span>
        </span>
        <div className="">|{/* straight slash seperator */}</div>
        <span>
          KMS - <span className="text-black">{car?.kms}</span>
        </span>
        <div className="">|{/* straight slash seperator */}</div>
        <span className={`${car?.fuelType == "electric" ? "hidden" : ""}`}>
          FUEL TYPE - <span className="text-black">{car?.fuelType}</span>
        </span>

        <span className="flex gap-2 items-center text-white fill-white"></span>
      </div>
    </div>
  );
}

export default CarCard;
