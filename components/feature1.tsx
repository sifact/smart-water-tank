import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { BaggageClaim } from "lucide-react";

const Feature1 = () => {
  return (
    <div className="bg-green-50 h-[300px] mb-40">
      <div className=" flex justify-between container mx-auto ">
        <div className="w-1/2 mx-auto my-auto">
          <Image
            className="mt-[-10rem]"
            src="/smart-tank-1.png"
            alt="background-image"
            width={600}
            height={600}
          />
        </div>
        <div className="w-1/2 gap-6 flex flex-col  pt-[3rem]">
          <h1 className="text-3xl font-bold text-primaryLight leading-snug">
            Automatic ON/OFF
          </h1>
          <p className="text-xl leading-snug">
            Smart tank controller can automatically detect water level and
            start/stop the water pump of your house.
          </p>
          <Button className="mr-auto font-bold" variant="custom" size="custom">
            Buy Now
            <BaggageClaim className="ml-4 h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
