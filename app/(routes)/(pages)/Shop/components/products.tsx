// "use client";
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
import { BaggageClaim } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Link from "next/link";

export const Products = async () => {
  return (
    <div className="container mx-auto mb-32">
      <h1 className=" my-16 text-xl font-semibold">Shop</h1>

      <div className="grid  md:grid-cols-3 gap-6 w-[90%]  mx-auto">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

const Product = ({ product }: any) => {
  return (
    <Card className={` pb-8 border-0 shadow-none bg-gray-100`}>
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

          <div className="h-[300px] w-[300px]">
            <img
              className="rounded-lg object-cover w-full h-full mx-auto"
              src={product?.img}
              alt="img"
            />
          </div>
        </CardHeader>
      </Link>
      <div className="px-6 flex flex-col gap-6 ">
        <CardTitle className="tracking-wider text-center text-sm font-bold">
          {product.name}
        </CardTitle>
        <div className="flex justify-between">
          <Button
            className="text-sm "
            variant="customSecondary"
            size="customSecondary"
          >
            {product?.type}
          </Button>
          <CardDescription className="font-bold text-red-500 flex gap-2 ">
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
          </CardDescription>
        </div>

        <CardFooter className="flex justify-center p-0">
          <Link href={`/Shop/${product?.id}`}>
            <Button variant="custom" className="text-sm" size="custom">
              {product?.button}
              <BaggageClaim className="h-6 w-6 ml-2" />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default Product;
