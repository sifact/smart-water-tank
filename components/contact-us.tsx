"use client";

import { Home, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-8 gap-y-12 container mx-auto mb-32">
      <div className="flex flex-col sm:gap-6 gap-2 items-center">
        <span

        // href="tel:+8801881808680"
        >
          <BsWhatsapp className="w-8 h-8 text-primaryLight" />
        </span>

        <span className="hover:text-primaryLight transition delay-150">
          +880 188 180 8680
        </span>

        <p className="text-center">
          Connect with us instantly on WhatsApp! Click the icon to send us a
          message
        </p>
      </div>
      <div className="flex flex-col sm:gap-6 gap-2  items-center">
        <a
        // target="_blank" href="mailto:roboidyteam@gmail.com"
        >
          <Mail className="w-8 h-8 text-primaryLight" />
        </a>

        <p className="hover:text-primaryLight transition delay-150">
          roboidyteam@gmail.com
        </p>

        <p className="text-center">
          Reach out to us via email. Click the Gmail icon to send us a message
        </p>
      </div>
      <div className="flex flex-col sm:gap-6 gap-2  items-center">
        <Home className="h-8 w-8 text-primaryLight" />
        <p className="hover:text-primaryLight transition delay-150">Location</p>
        <p className="text-center">
          36/9 Khorshed Vhaban, Noton danmohol, Trishal Bazar, Trishal,
          Mymensingh-2220
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
