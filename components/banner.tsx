"use client";

import Image from "next/image";

import { Button } from "./ui/button";
import { BaggageClaim } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="header_custom h-auto sm:mb-40  mb-20  ">
        <div className="flex max-sm:flex-col container mx-auto max-sm:mb-12">
          <div className="sm:w-1/2 flex justify-center items-center">
            <Image
              className=""
              src="/smart-tank-1.png"
              alt="background-image"
              width={600}
              height={600}
            />
          </div>
          <div className="sm:w-1/2 gap-4 sm:gap-6 flex flex-col justify-center max-sm:items-center ">
            <h1 className="text-3xl sm:text-5xl font-bold text-primaryLight  sm:leading-snug leading-normal max-sm:text-center">
              SMART <span className="sm:text-3xl text-xl">WATER</span> TANK{" "}
              <span className="sm:text-3xl text-xl">CONTROLLER</span>
            </h1>
            <p className="sm:text-gray-600 font-semibold text-xl leading-normal sm:leading-snug max-sm:text-center">
              Save water, Save Electricity, Save The Nature
            </p>
            <Link href="Shop/1">
              <Button
                className="sm:mr-auto font-bold text-sm"
                variant="custom"
                size="custom"
              >
                Buy Now
                <BaggageClaim className="ml-4 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
    // <div className="max-sm:mb-16 mb-24 ">
    //   <div className="relative w-full h-[100vh]">
    //     <Image
    //       className="opacity-30 z-0 mt-[-4rem] object-cover"
    //       src="https://watertankcontroller.com/wp-content/uploads/2023/08/3.png"
    //       alt="background-image"
    //       fill
    //     />

    //     <div className="w-full h-[30px] bg-white absolute bottom-[3rem] left-0"></div>

    //   </div>
    // </div>
  );
};

export default Banner;
