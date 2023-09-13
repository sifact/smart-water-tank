import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { BaggageClaim } from "lucide-react";
import Link from "next/link";

const SafePump = () => {
  return (
    <div className=" flex justify-between max-sm:flex-col container mx-auto items-center  max-sm:gap-6 my-20">
      <div className="sm:w-1/2 mx-auto my-auto">
        <Image
          className="mx-auto my-auto"
          src="/ok.avif"
          alt="background-image"
          width={400}
          height={400}
        />
      </div>
      <div className="sm:w-1/2 flex justify-center">
        <div className=" gap-6 flex flex-col sm:w-[70%] max-sm:items-center">
          <h1 className="text-3xl font-bold text-primaryLight leading-snug max-sm:text-center">
            পানির মটর নিরাপদ রাখে
          </h1>
          <p className="text-xl leading-snug max-sm:text-center">
            অধিকাংশ সময় কম ভোল্টেজের কারণে পানির পাম্পের কয়েল পুড়ে যায়, স্মার্ট
            ট্যাঙ্ক কন্ট্রোলার কম ভোল্টেজে নিরাপত্তা দেয়, ফলে পানির পাম্প নিরাপদ
            থাকে।
          </p>

          <Link href="Shop/1">
            <Button
              className="sm:mr-auto font-bold"
              variant="custom"
              size="custom"
            >
              এখনি কিনুন
              <BaggageClaim className="ml-4 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SafePump;
