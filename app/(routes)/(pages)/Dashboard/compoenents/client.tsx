"use client";

import { redirect } from "next/navigation";

const DashboardClient = () => {
  const userJSON = localStorage.getItem("user_data");
  const user = JSON.parse(userJSON!);

  console.log(user);
  if (!user) redirect("/login");
  return (
    <div className="flex flex-col gap-4 h-screen w-full m-12  ">
      <h1 className="text-xl font-semibold mt-12">Name: {user.name}</h1>
      <p>Phone number: {user.phoneNumber}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default DashboardClient;
