import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { BaggageClaim } from "lucide-react";
import Link from "next/link";

const Feature1 = () => {
  return (
    <div className="bg-emerald-50 h-auto sm:h-[300px] mb-20 max-sm:pb-12">
      <div className=" flex max-sm:flex-col  sm:justify-between container mx-auto flex-row-reverse">
        <div className="sm:w-1/2 mx-auto my-auto">
          <Image
            className="sm:mt-[-10.5rem] bg-cover"
            src="/smart-tank-1.png"
            alt="background-image"
            width={600}
            height={600}
          />
        </div>
        <div className="sm:w-1/2 flex justify-center">
          <div className=" gap-6 flex flex-col  sm:pt-[3rem] sm:w-[70%] max-sm:justify-center max-sm:items-center">
            <h1 className="text-3xl font-bold text-primaryLight leading-snug max-sm:text-center">
              অটোমেটিক অন / অফ
            </h1>
            <p className="text-xl leading-snug max-sm:text-center">
              স্মার্ট ওয়াটার ট্যাঙ্ক কন্ট্রোলার সয়ংক্রিয়ভাবে পানির পরিমাণ সনাক্ত
              করে পাম্প চালু এবং বন্ধ করে।
            </p>

            <Link href="Shop/1">
              <Button
                className="sm:mr-auto font-bold"
                variant="custom"
                size="custom"
                style={{ width: "fit-content" }}
              >
                এখনি কিনুন
                <BaggageClaim className="ml-4 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
