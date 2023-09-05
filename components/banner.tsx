import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { BaggageClaim } from "lucide-react";

// bg-gradient-to-tr from-gray-900 to-green-50 h-[100vh]
const Banner = () => {
  return (
    <div className="mb-40">
      <div className="relative h-[110vh] w-full">
        <Image
          className="opacity-20 z-0 mt-[-4rem]"
          src="https://watertankcontroller.com/wp-content/uploads/2023/08/3.png"
          alt="background-image"
          fill
        />

        <div className="absolute inset-0 flex justify-between container mx-auto">
          <div className="w-1/2 mx-auto my-auto">
            <Image
              className=""
              src="/smart-tank-1.png"
              alt="background-image"
              width={600}
              height={600}
            />
          </div>
          <div className="w-1/2 gap-6 flex flex-col justify-center ">
            <h1 className="text-6xl font-bold text-primaryLight leading-snug">
              Smart Water Tank Controller
            </h1>
            <p className="text-3xl  leading-snug">
              Save Water, Save Electricity, Save The Nature{" "}
            </p>
            <Button
              className="mr-auto font-bold"
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
