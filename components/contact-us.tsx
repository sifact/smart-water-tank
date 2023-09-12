"use client";

import { Home, Mail, Send, SendHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { Button } from "./ui/button";
import { SiGooglemaps } from "react-icons/si";

const ContactUs = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-20">
        {" "}
        <span className="text-primaryLight">Contact</span> Us
      </h1>
      <div className="grid sm:grid-cols-3 gap-8 gap-y-12 container mx-auto mb-32">
        <div className="flex flex-col sm:gap-6 gap-2 items-center">
          <span

          // href="tel:+8801881808680"
          >
            <BsMessenger className="w-8 h-8 text-primaryLight" />
          </span>
          <p className="text-center">ফেসবুক মেসেঞ্জারের মাধ্যমে যোগাযোগ করুন</p>
          <Button
            className="text-sm text-primaryDark px-4"
            variant="custom"
            size="custom"
          >
            Send message
            <SendHorizontal className="h-6 w-6 ml-2 " />
          </Button>
        </div>
        <div className="flex flex-col sm:gap-6 gap-2  items-center">
          <a
          // target="_blank" href="mailto:roboidyteam@gmail.com"
          >
            <Mail className="w-8 h-8 text-primaryLight" />
          </a>

          <p className="text-center">ইমেইলের মধ্যমে যোগাযোগ করুন</p>
          <Button
            className="text-sm text-primaryDark px-4"
            variant="custom"
            size="custom"
          >
            Send email
            <Send className="h-6 w-6 ml-2 " />
          </Button>
        </div>
        <div className="flex flex-col sm:gap-6 gap-2  items-center">
          <Home className="h-8 w-8 text-primaryLight" />

          <p className="text-center">
            ৩৬/৯ খোরশেদ ভবন, নতুন দানমহল, ত্রিশাল বাজার। <br /> ত্রিশাল,
            ময়মনসিংহ-২২২০
          </p>
          <Button
            className="text-sm text-primaryDark px-4"
            variant="custom"
            size="custom"
          >
            Direction
            <SiGooglemaps className="h-6 w-6 ml-2 " />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
