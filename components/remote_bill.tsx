import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Airplay, BaggageClaim, GlassWater, Receipt } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Feature2 = () => {
  return (
    <div className="relative">
      <Image
        className="hidden md:block absolute top-12 left-0 "
        src="https://watertankcontroller.com/wp-content/uploads/2023/08/6.png"
        alt="bg-img"
        width={150}
        height={150}
      />
      {/* first */}
      <div className=" flex  max-sm:items-center  max-sm:flex-col container mx-auto max-sm:mb-32">
        <div className="sm:w-1/2 flex justify-center">
          <Image
            className="z-10"
            src="/smart-tank-1.png"
            alt="background-image"
            width={500}
            height={500}
          />
        </div>
        <div className="sm:w-1/2 justify-center max-sm:items-center gap-6 flex flex-col sm:pt-[3rem]">
          <h1 className="text-3xl font-bold text-primaryLight leading-snug max-sm:text-center">
            স্টার্ট/স্টপ রিমুটলি
          </h1>
          <p className="text-xl leading-snug max-sm:text-center">
            পৃথিবীর যেকোনও জায়গা থেকে পাম্প চালু এবং বন্ধ করতে পারবেন এছাড়াও
            পানির ট্যাঙ্কে কতোটুকু পানি আছে তাও দেখতে পারবেন।
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

      {/* 2nd */}
      <div className="bg-emerald-50 h-auto pt-4 pb-6">
        <div className=" flex justify-between max-sm:flex-col  items-center flex-row-reverse max-sm:gap-6  container mx-auto">
          <div className="sm:w-1/2 mx-auto my-auto">
            <Image
              className=""
              src="/elec-removebg.png"
              // src="/elec-bill.avif"
              alt="background-image"
              width={600}
              height={600}
            />
          </div>
          <div className="sm:w-1/2 flex justify-center">
            <div className=" gap-6 flex flex-col sm:w-[70%] max-sm:items-center">
              <h1 className="text-3xl font-bold text-primaryLight leading-snug max-sm:text-center">
                বিদ্যুৎ বিল সাশ্রয় করে
              </h1>
              <p className="text-xl leading-snug max-sm:text-center">
                স্মার্ট ওয়াটার ট্যাঙ্ক কন্ট্রোলার পানি এবং বিদ্যুৎ বিল সাশ্রয়
                করে।
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
      </div>
    </div>
  );
};

export default Feature2;
