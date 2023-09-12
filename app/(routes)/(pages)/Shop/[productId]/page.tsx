"use client";
import { Button } from "@/components/ui/button";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { products } from "../components/data";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/column";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = ({ params }: { params: { productId: string } }) => {
  const [buildingHeight, setBuildingHeight] = useState("৪০ ফুট - ১২০ ফুট");
  const [wirePrice, setWirePrice] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const getInfo = (buildingHeight: string, wireLength: any, idx: any) => {
    setActiveIndex(idx);
    setBuildingHeight(buildingHeight);
    setWirePrice(wireLength);
  };

  const product = products.find(
    (product: any) => params.productId == product.id
  );

  return (
    <div className="mb-32 container mx-auto">
      <h1 className="text-xl font-semibold my-16">{product?.name}</h1>
      <div className=" flex  max-sm:flex-col items-center  max-sm:gap-6">
        <div className="sm:w-1/2 flex justify-center m-0">
          <Image
            className="rounded-md"
            src={product?.img!}
            alt="background-image"
            width={400}
            height={400}
          />
        </div>

        <div className="sm:w-1/2 flex justify-center">
          <div className=" gap-6 flex flex-col sm:w-[70%] ">
            {!wirePrice ? (
              <div className="flex gap-2 text-red-500 text-xl font-bold">
                <span className="flex items-center gap-1">
                  <FaBangladeshiTakaSign /> {product?.minPrice}
                </span>
                {product?.maxPrice ? (
                  <span className="flex items-center gap-1">
                    - <FaBangladeshiTakaSign className="ml-1" />
                    {product?.maxPrice}
                  </span>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <span className="flex items-center gap-1 text-red-500 font-bold text-xl">
                <FaBangladeshiTakaSign /> {wirePrice}
              </span>
            )}

            <p className=" leading-snug opacity-60">{product?.description}</p>

            <div className="mr-auto">
              {product?.id !== 3 && (
                <h1 className="pb-4">
                  বাসার উচ্চতা (তারের দৈর্ঘ্য): {buildingHeight}
                </h1>
              )}
              <div className="flex max-md:flex-col items-start gap-4">
                {product?.wireLength &&
                  product.wireLength.map((wire, idx) => {
                    return (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Button
                              className={
                                idx === activeIndex
                                  ? "border-primaryLight text-primaryLight"
                                  : ""
                              }
                              onClick={(e: any) =>
                                getInfo(wire.buildingHeight, wire.price, idx)
                              }
                              key={wire.price}
                              variant="outline"
                              size="sm"
                            >
                              {wire.length}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{wire.buildingHeight}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
              </div>
            </div>

            {/* <Button
              className="mr-auto cursor-default text-primaryLight"
              variant="customSecondary"
              size="customSecondary"
            >
              In stock
            </Button> */}
            <Button
              className="mr-auto text-sm font-bold"
              variant="custom"
              size="custom"
            >
              Buy Now
              <BaggageClaim className="ml-4 h-6 w-6" />
            </Button>

            <Separator />

            <p>SKU: {product?.code}</p>
            {/* <p>Categories: {product?.categories}</p>
            <p>Tags: {product?.tag}</p> */}
          </div>
        </div>
      </div>

      <div className="md:w-[60%] mx-auto mt-20">
        <Tabs defaultValue="Description" className="w-full">
          <TabsList className="w-full flex justify-evenly">
            <TabsTrigger value="Description">Description</TabsTrigger>
            <TabsTrigger value="Additional Information">
              Additional Information
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Description" className="mt-12">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="">Name</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="w-full">
                {product?.tableDescription!.map((cell) => (
                  <TableRow className=" w-full" key={cell.name}>
                    <TableCell className="font-medium w-1/2">
                      {cell.name}
                    </TableCell>
                    <TableCell className="w-1/2">{cell.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="Additional Information" className="mt-12">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="">Name</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="w-full">
                {product?.specification!.map((cell) => (
                  <TableRow className=" w-full" key={cell.name}>
                    <TableCell className="font-medium w-1/2">
                      {cell.name}
                    </TableCell>
                    <TableCell className="w-1/2">{cell.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
