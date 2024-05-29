import { HeroBanner1, HeroBanner2, HeroBanner3 } from "@/components";
import React from "react";

function page() {
  return (
    <div>
      <div className="text-3xl font-black text-white">Hero Banner 1</div>
      <HeroBanner1 />
      <div className="text-3xl font-black text-white">Hero Banner 2</div>
      <HeroBanner2 />
      <div className="text-3xl font-black text-white">Hero Banner 3</div>
      <HeroBanner3 />
    </div>
  );
}

export default page;
