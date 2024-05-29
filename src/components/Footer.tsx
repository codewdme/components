import Link from "next/link";
import React from "react";
import EmailSignup from "./miniComponents/EmailSignup";
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import CopyrightSection from "./miniComponents/CopyrightSection";

function Footer() {
  return (
    <div className="bg-black">
      <EmailSignup />
      <FooterLinks />
    </div>
  );
}

export default Footer;

const footerCategoryLinks = {
  qcworld: {
    category: "QC WORLD",
    links: [
      {
        title: "Why Us",
        href: "/whyus",
      },
      {
        title: "About Us",
        href: "/aboutus",
      },
      {
        title: "Career",
        href: "/career",
      },
      {
        title: "Associates",
        href: "/associates",
      },
      {
        title: "QC Squad",
        href: "/qcsquad",
      },
      {
        title: "Wallpaper",
        href: "/wallpaper",
      },
      {
        title: "Our Showroom",
        href: "/showroom",
      },
    ],
  },
  general: {
    category: "GENERAL",
    links: [
      {
        title: "Sell Car",
        href: "/general/sellcar",
      },
      {
        title: "FAQs",
        href: "/general/faqs",
      },
      {
        title: "Videos",
        href: "/general/videos",
      },
      {
        title: "Blog",
        href: "/general/blog",
      },
      {
        title: "Auto Guide",
        href: "/general/autoguide",
      },
      {
        title: "Car News",
        href: "/general/carnews",
      },
      {
        title: "Finance & Insurance",
        href: "/general/finance",
      },
      {
        title: "Sales Login",
        href: "/general/saleslogin",
      },
    ],
  },
  brands: {
    category: "BRANDS",
    links: [
      { title: "Aprilia", href: "/brands/aprilia" },
      { title: "Aston Martin", href: "/brands/astonmartin" },
      { title: "Audi", href: "/brands/audi" },
      { title: "Avanturaa Choppers", href: "/brands/avanturaachoppers" },
      { title: "Bentley", href: "/brands/bentley" },
      { title: "BMW", href: "/brands/bmw" },
      { title: "Buick", href: "/brands/buick" },
      { title: "Cadillac", href: "/brands/cadillac" },
      { title: "Chevrolet", href: "/brands/chevrolet" },
      { title: "Chrysler", href: "/brands/chrysler" },
      { title: "Citroen", href: "/brands/citroen" },
      { title: "DC", href: "/brands/dc" },
      { title: "Ducati", href: "/brands/ducati" },
      { title: "Ferrari", href: "/brands/ferrari" },
      { title: "Fiat", href: "/brands/fiat" },
      { title: "Ford", href: "/brands/ford" },
      { title: "Harley Davidson", href: "/brands/harleydavidson" },
      { title: "Honda", href: "/brands/honda" },
      { title: "Hummer", href: "/brands/hummer" },
      { title: "Hyundai", href: "/brands/hyundai" },
      { title: "Indian", href: "/brands/indian" },
      { title: "Infinity", href: "/brands/infinity" },
      { title: "Jaguar", href: "/brands/jaguar" },
      { title: "Jeep", href: "/brands/jeep" },
      { title: "Kawasaki", href: "/brands/kawasaki" },
      { title: "KIA", href: "/brands/kia" },
      { title: "KTM", href: "/brands/ktm" },
      { title: "Lamborghini", href: "/brands/lamborghini" },
      { title: "Land Rover", href: "/brands/landrover" },
      { title: "Lexus", href: "/brands/lexus" },
      { title: "Maserati", href: "/brands/maserati" },
      { title: "Maybach", href: "/brands/maybach" },
      { title: "McLaren", href: "/brands/mclaren" },
      { title: "Mercedes-Benz", href: "/brands/mercedesbenz" },
      { title: "Mini", href: "/brands/mini" },
      { title: "MV Agusta", href: "/brands/mvagusta" },
      { title: "Nissan", href: "/brands/nissan" },
      { title: "Porsche", href: "/brands/porsche" },
      { title: "Rolls-Royce", href: "/brands/rollsroyce" },
      { title: "Royal Enfield", href: "/brands/royalenfield" },
      { title: "Skoda", href: "/brands/skoda" },
      { title: "Suzuki", href: "/brands/suzuki" },
      { title: "Tesla", href: "/brands/tesla" },
      { title: "Toyota", href: "/brands/toyota" },
      { title: "Triumph", href: "/brands/triumph" },
      { title: "Volkswagen", href: "/brands/volkswagen" },
      { title: "Volvo", href: "/brands/volvo" },
    ],
  },
  style: {
    category: "QC WORLD",
    links: [
      { title: "SUV", href: "/style/suv" },
      { title: "Sedan", href: "/style/sedan" },
      { title: "Convertible", href: "/style/convertible" },
      { title: "Coupe", href: "/style/coupe" },
      { title: "Sports", href: "/style/sports" },
      { title: "MUV-MPV", href: "/style/muv-mpv" },
      { title: "Hatchback", href: "/style/hatchback" },
    ],
  },
};
function FooterLinks() {
  return (
    <div className="py-16 lg:px-64 p-16 flex flex-col gap-8">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-16 ">
        <div className="col-span-1 flex flex-col gap-6">
          <span className="text-white tracking-[0.055em]">QC WORLD</span>
          <span className="w-full h-1 border-b-[1px] border-[#232323]"></span>
          <div>
            <ul>
              {footerCategoryLinks.qcworld.links.map(
                (element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>{element?.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <span className="text-white tracking-[0.055em]">GENERAL</span>
          <span className="w-full h-1 border-b-[1px]  border-[#232323]"></span>
          <div>
            <ul>
              {footerCategoryLinks.general.links.map(
                (element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>{element?.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-6">
          <span className="text-white tracking-[0.055em]">BRANDS</span>
          <span className="w-full h-1 border-b-[1px] border-[#232323]"></span>
          <div className="grid grid-cols-4 gap-4">
            <ul>
              {footerCategoryLinks.brands.links
                .slice(0, 12)
                .map((element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>Used {element?.title}</Link>
                  </li>
                ))}
            </ul>
            <ul>
              {footerCategoryLinks.brands.links
                .slice(12, 24)
                .map((element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>Used {element?.title}</Link>
                  </li>
                ))}
            </ul>
            <ul>
              {footerCategoryLinks.brands.links
                .slice(24, 36)
                .map((element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>Used {element?.title}</Link>
                  </li>
                ))}
            </ul>
            <ul>
              {footerCategoryLinks.brands.links
                .slice(36, 49)
                .map((element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>Used {element?.title}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <span className="text-white tracking-[0.055em]">STYLE</span>
          <span className="w-full h-1 border-b-[1px] border-[#232323]"></span>
          <div>
            <ul>
              {footerCategoryLinks.style.links.map(
                (element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>{element?.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full border-b-[1px] border-[#232323]"></div>

      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col gap-4 text-sm text-[#6E6E6E] tracking-[0.05em]">
          <span className=" text-white">Headquarters</span>
          <span className="">
            Plot no. 27 Surajpura House, Rail Nagar, T. N. Mishra Marg,
            Jaipur-302019
          </span>
        </div>
      </div>
      <div className="h-[1px] w-full border-b-[1px] border-[#232323]"></div>

      <div className="grid grid-cols-4 gap-6">
        <Link
          href="/buycar"
          className="flex flex-col gap-4 text-sm text-[#6E6E6E] tracking-[0.05em]"
        >
          <span className=" text-white">Buy Car</span>
          <span className="flex gap-2 items-center">
            <PhoneIcon />
            +91 9829407612
          </span>
        </Link>
        <Link
          href="/buycar"
          className="flex flex-col gap-4 text-sm text-[#6E6E6E] tracking-[0.05em]"
        >
          <span className=" text-white">Sell Car</span>
          <span className="flex gap-2 items-center">
            <PhoneIcon />
            +91 9829407612
          </span>
        </Link>
      </div>
      <div className="h-[1px] w-full border-b-[1px] border-[#232323]"></div>
      <CopyrightSection />
    </div>
  );
}
