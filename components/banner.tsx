import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { BaggageClaim } from "lucide-react";

// bg-gradient-to-tr from-gray-900 to-green-50 h-[100vh]
const Banner = () => {
  return (
    <div className="mb-32">
      <div className="relative h-[110vh] w-full">
        <Image
          className="opacity-20 z-0 mt-[-4rem]"
          src="https://watertankcontroller.com/wp-content/uploads/2023/08/3.png"
          alt="background-image"
          fill
        />

        <div className="absolute inset-0 flex max-sm:flex-col container mx-auto">
          <div className="sm:w-1/2 flex justify-center items-center">
            <Image
              className=""
              src="/smart-tank-1.png"
              alt="background-image"
              width={600}
              height={600}
            />
          </div>
          <div className="sm:w-1/2 gap-2 sm:gap-6 flex flex-col justify-center max-sm:items-center ">
            <h1 className="text-3xl sm:text-5xl font-bold text-primaryLight  sm:leading-snug leading-normal">
              SMART <span className="text-3xl">WATER</span> TANK{" "}
              <span className="text-3xl">CONTROLLER</span>
            </h1>
            <p
              style={{ color: "#000000" }}
              className=" sm:text-xl leading-normal sm:leading-snug"
            >
              Save water, Save Electricity, Save The Nature
            </p>
            <Button
              className="sm:mr-auto font-bold"
              variant="custom"
              size="custom"
            >
              Buy Now
              <BaggageClaim className="ml-4 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
