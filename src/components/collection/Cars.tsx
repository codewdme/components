import Image from "next/image";
import React from "react";
import defaultImage from "../../assets/images/header1.jpg";
import Link from "next/link";

function Cars() {
  const cars = [
    {
      modelName: "2021 MERCEDES BENZ E350D AMG LINE",
      regYear: 2022,
      regState: "ODISHA",
      kms: 27800,
      fuelType: "DIESEL",
      price: 6500000,
      emi: 110459,
      href: "/x",
      status: "",
    },
    {
      modelName: "2021 MERCEDES BENZ E350D AMG LINE",
      regYear: 2022,
      regState: "ODISHA",
      kms: 27800,
      fuelType: "DIESEL",
      price: 6500000,
      emi: 110459,
      href: "/x",
      status: "BOOKED",
    },
    {
      modelName: "2021 MERCEDES BENZ E350D AMG LINE",
      regYear: 2022,
      regState: "ODISHA",
      kms: 27800,
      fuelType: "DIESEL",
      price: 6500000,
      emi: 110459,
      href: "/x",
      status: "",
    },
    {
      modelName: "2021 MERCEDES BENZ E350D AMG LINE",
      regYear: 2022,
      regState: "ODISHA",
      kms: 27800,
      fuelType: "DIESEL",
      price: 6500000,
      emi: 110459,
      href: "/x",
      status: "BOOKED",
    },
    {
      modelName: "2021 MERCEDES BENZ E350D AMG LINE",
      regYear: 2022,
      regState: "ODISHA",
      kms: 27800,
      fuelType: "DIESEL",
      price: 6500000,
      emi: 110459,
      href: "/x",
      status: "NEW",
    },
  ];
  return (
    <>
      <div className="lg:px-16 py-16 flex flex-col justify-center  md:grid md:grid-cols-2  xl:grid-cols-3 gap-8 items-center">
        {cars.map((car) => (
          <CarCard car={car} key={car.modelName} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center py-8 pb-16">
        <button className="bg-black p-6 w-[300px] rounded-lg   text-white hover:bg-[#F4F4F4] hover:text-black hover: border-2 border-black transition duration-500 ease-in-out">
          SHOW MORE
        </button>
      </div>
    </>
  );
}

export default Cars;

function CarCard({ car }: any) {
  let carPrice = new Intl.NumberFormat("en-IN").format(car.price);
  let carEmi = new Intl.NumberFormat("en-IN").format(car.emi);
  return (
    <Link
      href={car?.href}
      className=" relative  min-h-[400px] min-w-[200px] max-w-[400px] flex flex-col gap-4 rounded-xl bg-[#F4F4F4]"
    >
      {car?.status == "BOOKED" && (
        <div className="absolute z-10 top-6 -right-[1.25px] bg-[#E00F0E] rounded-l-xl p-4 py-1 font-[500] text-sm tracking-widest">
          BOOKED
        </div>
      )}
      {car?.status == "NEW" && (
        <div className="absolute z-10 left-6 -top-[1.25px] bg-[#E00F0E] rounded-b-xl p-4 px-2 font-[500] text-base tracking-widest">
          NEW
        </div>
      )}
      <Image
        src={car?.image ? car?.image : defaultImage}
        className="w-full rounded-t-xl"
        alt="car-image"
        objectFit="cover"
      />
      <div className="flex flex-col gap-4 p-6 text-black font-medium tracking-wider">
        <p className=" text-lg font-[600]">&#x20b9; {carPrice}</p>
        <p className="text-2xl">{car.modelName}</p>
        <p className="-mt-2 mb-8 flex items-center justify-start gap-2 text-[#8A8A8A] text-lg ">
          <span className="underline ">EMI STARTS</span> @ &#x20b9; {carEmi}
        </p>
        <div className="flex justify-between gap-4 items-center font-semibold w-full text-[#69686D] text-base tracking-normal">
          <div className="flex flex-col gap-1">
            {/* options */}
            <span className="text-[#565655]">REG.YEAR </span>
            <span className="text-black">{car?.regYear}</span>
          </div>
          <div className="w-[1px] border-l-[2px] h-[45px] border-[#565655]/50">
            {/* straight slash seperator */}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#565655]">KMS</span>{" "}
            <span className="text-black">{car?.kms}</span>
          </div>
          <div className="w-[1px] border-l-[2px] h-[45px] border-[#565655]/50">
            {/* straight slash seperator */}
          </div>
          <div
            className={`flex flex-col gap-1 ${
              car?.fuelType == "electric" ? "hidden" : ""
            }`}
          >
            <span className="text-[#565655]">FUEL TYPE </span>
            <span className="text-black">{car?.fuelType}</span>
          </div>
          <div className="w-[1px] border-l-[2px] h-[45px] border-[#565655]/50">
            {/* straight slash seperator */}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#565655]">REG. STATE </span>
            <span className="text-black">{car?.regState}</span>
          </div>

          <span className="flex gap-1 items-center text-white fill-white"></span>
        </div>
      </div>
    </Link>
  );
}
