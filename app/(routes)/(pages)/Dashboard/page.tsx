"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardClient = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  let user: any = null;
  if (typeof window !== "undefined" && window.localStorage) {
    const userJSON = localStorage.getItem("user_data");
    const parsedUser = JSON.parse(userJSON!);
    user = parsedUser;
    if (!user) redirect("/login");
  }

  return (
    <div className="flex flex-col gap-4 h-screen w-full p-20 ">
      <h1 className="text-xl font-semibold mt-12">Name: {user?.name!}</h1>
      <p>Phone number: {user?.phoneNumber}</p>
      <p>Address: {user?.address}</p>
    </div>
  );
};

export default DashboardClient;
