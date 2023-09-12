import React from "react";
import { Button } from "./ui/button";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa6";
import Link from "next/link";

const TankApp = () => {
  return (
    <div className="bg-emerald-50 h-auto sm:h-[420px] my-40 max-sm:py-12">
      <div className=" flex items-center max-sm:flex-col container mx-auto max-sm:gap-16">
        <div className="sm:w-1/2 flex justify-center">
          <Image
            className="sm:mt-[-5.5rem] hover:scale-105 transition duration-300"
            src="/tank-app.png"
            alt="background-image"
            width={300}
            height={300}
          />
        </div>
        <div className="sm:w-1/2 flex justify-center">
          <div className=" gap-6 flex flex-col sm:w-[70%] mt-[-1.2rem] max-sm:items-center">
            <h1 className="text-3xl font-bold text-primaryLight leading-snug max-sm:text-center">
              স্মার্ট ওয়াটার ট্যাঙ্ক অ্যাপ
            </h1>
            <p className="text-xl leading-snug max-sm:text-center">
              আমাদের ফ্রী অ্যান্ড্রয়েড অ্যাপ ব্যবহার করে পানির পরিমাণ দেখতে
              পারবেন, যেকোনও জায়গা থেকে যেকোনও সময় পানির পাম্প চালু অথবা বন্ধ
              করতে পারবেন। পানির পাম্প কখন চালু করা হয়েছে, ট্যাঙ্ক পানি পূর্ণ
              হতে কতো সময় লেগেছে এবং বিদ্যুৎ বিল কত হয়েছে তাও দেখতে পারবেন।
            </p>

            <Button
              className="sm:mr-auto text-xl font-bold"
              variant="custom"
              size="custom"
            >
              এখনি ডাউনলোড করুন
              <FaGooglePlay className="ml-4 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TankApp;
