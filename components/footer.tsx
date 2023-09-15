import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto md:grid md:grid-cols-[40%,auto,auto,auto] xsm:flex xsm:flex-col gap-12 ">
          {/* 1st */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex lg:ml-0">
              {" "}
              <Image src="/Logo.png" width="150" height="100" alt="logo" />
            </Link>
            <p>
              স্মার্ট ওয়াটার ট্যাঙ্ক কন্ট্রোলার একটি IoT ডিভাইস, এটা
              স্বয়ংক্রিয়ভাবে ট্যাঙ্কিতে পানির পরিমাণ সনাক্ত করে পাম্প চালু এবং
              বন্ধ করে, বিদ্যুৎ বিল সাশ্রয় করে, পানি অপচয় রোধ করে, কম ভোল্টেজে
              পানির পাম্প পুড়ে যাওয়া থেকে রক্ষা করে। স্মার্ট ট্যাঙ্ক
              অ্যান্ড্রয়েড অ্যাপ ব্যবহার করে যেকোনও জায়গা থেকে পানির পরিমাণ
              দেখতে পারবেন, পাম্প চালু এবং বন্ধ করতে পারবেন এবং পাম্প কখন চালু
              করা হয়েছে, ট্যাঙ্ক পূর্ণ হতে কতো সময় লেগেছে, বিদ্যুৎ বিল কতো হয়েছে
              তাও দেখতে পারবেন।
            </p>
            <div className="flex gap-12 mt-3">
              <Link href="https://www.facebook.com/" target="_blank">
                <Facebook className="h-6 w-6 hover:text-primaryLight" />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank">
                <Linkedin className="h-6 w-6 hover:text-primaryLight" />
              </Link>
              <Link href="https://www.twitter.com/" target="_blank">
                <Twitter className="h-6 w-6 hover:text-primaryLight" />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <Instagram className="h-6 w-6 hover:text-primaryLight" />
              </Link>
            </div>
          </div>

          {/* 2nd */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold pb-4">About</h1>

            <Link href="">Affiliate Dashboard</Link>
            <Link href="">Terms of use</Link>
            <Link href="">Privacy policy</Link>
          </div>

          {/* 3red */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold pb-4">Help & Guideline</h1>
            <Link href="">Track my order</Link>
            <Link href="/tutorial">Tutorial</Link>
            <Link href="">Contact us</Link>
          </div>

          {/* 4th */}
          <div className="">
            <h1 className="font-bold pb-4">Payment</h1>
            <div className="flex flex-col gap-4">
              <Image
                className="ml-[-1rem]"
                src="/nagad.png"
                width="100"
                height="50"
                alt="logo"
              />
              <Image
                className=""
                src="/bkash.png"
                width="100"
                height="50"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] flex items-center justify-center">
        <p className="text-center">
          © 2023{" "}
          <span className="text-primaryLight">Water Tank Controller</span> . All
          rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
