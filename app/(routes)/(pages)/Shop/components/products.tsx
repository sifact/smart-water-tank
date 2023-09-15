"use client";
import Image from "next/image";

import { Button } from "../../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { products } from "./data";
import { BaggageClaim, Star } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Products = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="grid sm:grid-cols-2   lg:grid-cols-3 gap-6 w-full  sm:w-[90%] mx-auto">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

const Product = ({ product }: any) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Link href={`/Shop/${product?.id}`}>
      <Card
        className={` pb-8 border-0 shadow-none ${
          product.id === 2 ? "" : "bg-gray-100"
        } `}
      >
        <Link href={`/Shop/${product?.id}`}>
          <CardHeader className="p-8">
            {/* <div className="aspect-square relative w-full h-[300px]">
            <Image
              src={product?.img}
              alt=""
              fill
              className="aspect-square object-cover"
              style={{ objectFit: "cover" }}
            />
          </div> */}

            <div className="w-full h-auto sm:h-[300px] sm:w-[300px]">
              <img
                className="rounded-lg object-cover w-full h-full mx-auto"
                src={product?.img}
                alt="img"
              />
            </div>
          </CardHeader>
        </Link>
        <div className="px-6 mt-4 flex flex-col gap-6 ">
          <CardTitle className=" text-center text-sm sm:text-xl font-smibold opacity-90">
            {product.name}
          </CardTitle>
          <Button
            className="text-sm "
            variant="customSecondary"
            size="customSecondary"
          >
            {product?.type}
          </Button>
          <div className="flex justify-between items-center">
            <div className="flex gap-1 ">
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
            </div>

            <CardDescription className="font-bold text-red-500 flex gap-1 text:sm sm:text-xl">
              <span className="flex items-center gap-1">
                <FaBangladeshiTakaSign /> {product?.minPrice}
              </span>
              {product?.maxPrice ? (
                <span className="flex items-center gap-1">
                  - <FaBangladeshiTakaSign className="" />
                  {product?.maxPrice}
                </span>
              ) : (
                ""
              )}
            </CardDescription>
          </div>

          <CardFooter className="flex justify-center p-0">
            <Button variant="custom" className="text-sm" size="custom">
              {product?.button}
              <BaggageClaim className="h-6 w-6 ml-2" />
            </Button>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default Product;
