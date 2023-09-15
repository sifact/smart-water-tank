"use client";

import React, { useEffect } from "react";
import { redirect, useRouter, usePathname } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  const userJSON = localStorage.getItem("user_data");
  const user = JSON.parse(userJSON!);

  //   useEffect(() => {
  // Check if the user is logged in (you can use your authentication logic here)
  // Replace with your authentication check

  // If the user is not logged in, redirect to the login page with the intended destination
  //     if (!user) {
  //       router.push(`/login?destination=${encodeURIComponent(pathName)}`);
  //     }
  //   }, []);
  if (!user) {
    redirect(`/login?destination=${encodeURIComponent(pathName)}`);
  }

  return <div>Checkout</div>;
};

export default Checkout;
