import Image from "next/image";
import React from "react";
import image from "../assets/images/header1.jpg";

function HeroBanner1() {
  return (
    <div>
      <div className="relative h-[100vh] w-full bg-gray-400">
        <Image
          className=" absolute top-0 left-0 z-10 object-contain h-[100vh] w-full"
          src={image}
          alt="background image"
        />
        <div className="absolute top-0 left-0 z-30 flex flex-col h-full w-full">
          <div className="w-full h-full bg-black/50 flex flex-col gap-6 pl-12 justify-end pb-12">
            <h1>{"LET'S KEEP IT SIMPLE."}</h1>
            <p>We are the best when it comes to Exotic Cars.</p>
            <label htmlFor="input">
              {" "}
              Input
              <input
                id="input"
                className="bg-none border-bottom border-2 w-[150px] border-white"
                type="text"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner1;
