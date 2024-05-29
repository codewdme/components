import Image from "next/image";
import React from "react";
import img1 from "../assets/images/home/howItWorks/howitworks-img1.png";
import img2 from "../assets/images/home/howItWorks/howitworks-img2.png";
import img3 from "../assets/images/home/howItWorks/howitworks-img3.png";
import img4 from "../assets/images/home/howItWorks/howitworks-img4.png";

function HowItWorks() {
  const steps = [
    {
      image: img1,
      title: "BROWSE FROM OUR COLLECTION",
    },
    {
      image: img2,
      title: "GET TO KNOW YOUR RIDE",
    },
    {
      image: img3,
      title: "PAY & BOOK ONLINE OR VISIT SHOWROOM",
    },
    {
      image: img4,
      title: "INSTANT PAYMENTS & TRANSFER",
    },
  ];
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center    gap-4 p-16">
        <div
          className="flex justify-center items-center
        "
        >
          <span className="font-normal tracking-[0.1em] text-3xl">
            HOW IT WORKS
          </span>
        </div>
        <div>
          <p className="flex flex-col items-center justify-center text-[#888888]">
            <span>
              {
                "Buying used luxury cars in India was never this easy. You can now own your dream luxury car in just 4 simple"
              }
            </span>
            <span>
              {"steps at Quality Cars, India's trusted used car portal."}
            </span>
          </p>
        </div>
        <div className="flex gap-4  ">
          {steps.map((element, index) => {
            return <SvgCard element={element} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

function SvgCard({ element }: any) {
  return (
    <div className="flex flex-col justify-between items-center  h-[250px] w-[250px]">
      <div className="h-[90%] w-[80%] flex justify-center">
        <Image
          className="object-contain h-[90%] w-[90%]"
          src={element.image}
          alt="icon"
        />
      </div>
      <div>
        <span className="text-sm font-normal text-[#888888]">
          {element.title}
        </span>
      </div>
    </div>
  );
}
