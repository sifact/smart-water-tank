"use client";

import { redirect, usePathname } from "next/navigation";

const Checkout = () => {
  const pathName = usePathname();

  if (typeof window !== "undefined" && window.localStorage) {
    const userJSON = localStorage.getItem("user_data");
    const user = JSON.parse(userJSON!);

    if (!user) {
      redirect(`/login?destination=${encodeURIComponent(pathName)}`);
    }
  }

  return <div>Checkout</div>;
};

export default Checkout;
