import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function AccordionDemo() {
  return (
    <div className=" flex justify-between container mx-auto items-center mb-32 max-sm:gap-12 max-sm:flex-col">
      <div className="sm:w-1/2">
        <Image
          className=""
          src="/faq.avif"
          alt="background-image"
          width={500}
          height={500}
        />
      </div>
      <div className="sm:w-1/2 mx-auto">
        <h1 className="text-xl font-bold mb-4 tracking-wide">
          স্মার্ট ওয়াটার ট্যাঙ্ক নিয়ে আপনার যতো জিজ্ঞাসা
        </h1>
        <Accordion type="single" collapsible className="sm:w-[80%]">
          <AccordionItem value="item-1">
            <AccordionTrigger>কোনও ওয়ারেন্টি আছে?</AccordionTrigger>
            <AccordionContent>
              হ্যাঁ, ১ বছরের ওয়ারেন্টি থাকছে ফ্রী সার্ভিসিং এর সাথে। ওয়ারেন্টি
              শেষ হওয়ার পর লাইফ টাইম পেইড গ্যারান্টি পাবেন।
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>রিপ্লেসমেন্ট গ্যারান্টি আছে?</AccordionTrigger>
            <AccordionContent>
              হ্যা, সারা জীবনের জন্য পেইড রিপ্লেসমেন্ট গ্যারান্টি পাবেন। যদি
              আপনার ডিভাইসে কোন সমস্যা দেখা দেয় আর আপনি এটা ঠিক করার জন্য
              অপেক্ষা করতে চাননা সেক্ষেত্রে পুরনো ডিভাইস ফেরত দিয়ে এবং ডিভাইসের
              মূল্যের 40% টাকা পরিশোধ করার মাধ্যমে নতুন ডিভাইস পাবেন।
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              কতোটা সঠিকভাবে এই ডিভাইস পানির পরিমাণ সনাক্ত করতে পারে?
            </AccordionTrigger>
            <AccordionContent>
              আমাদের ডিভাইস অধিকাংশ সময়ই ৯৯% নির্ভুলভাবে পানির পরিমাণ সনাক্ত
              করতে পারে।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              সেন্সর এবং তারের জন্য ওয়ারেন্টি আছে?
            </AccordionTrigger>
            <AccordionContent>
              সেন্সর এবং তারের জন্য আমরা ওয়ারেন্টি দেইনা। যদিও তারের ওয়ারেন্টির
              প্রয়োজন হয়না।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              একবার রিপ্লেস করার পর কি পুনঃরায় রিপ্লেস করতে পারবো?
            </AccordionTrigger>
            <AccordionContent>
              আপনার ডিভাইসে কোন সমস্যা দেখা দিলে যতোবার ইচ্ছা রিপ্লেস করতে
              পারবেন। তাই পুনঃরায় সম্পূর্ণ প্যাকেজ কেনার প্রয়োজন হবেনা।
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
