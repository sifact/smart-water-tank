"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  phoneNumber: z.string().min(2),
  name: z.string().min(2),
  address: z.string().min(2),
  //   orderNotes: z.string().optional(),
});

type UserFormValues = z.infer<typeof formSchema>;

interface UserFormProps {
  initialData: any;
  number: string;
}

const UserForm: React.FC<UserFormProps> = ({ initialData, number }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit billboard" : "Create billboard";
  const description = initialData ? "Edit a billboard." : "Add a new billboard";
  const toastMessage = initialData ? "Billboard updated." : "User created";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: number,
      name: "",
      address: "",
      //   orderNotes: "", // You can set it to an empty string by default
    },
  });

  useEffect(() => {
    form.setValue("phoneNumber", number);
  }, [number]);

  // const pathname =

  const onSubmit = async (data: UserFormValues) => {
    try {
      setLoading(true);

      await axios.post(`/api/users`, data);

      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("user_data", JSON.stringify(data));

        const url = new URL(window.location.href);
        const destinationParam = url.searchParams.get("destination");
        if (destinationParam) {
          router.push(destinationParam);
        } else {
          router.push("/");
        }
      }
      router.refresh();
      toast.success(toastMessage);
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        {/* <Heading title={title} description={description} /> */}
        {/* 
        <Button
          disabled={loading}
          variant="destructive"
          size="sm"
          onClick={() => setOpen(true)}
        >
          <Trash className="h-4 w-4" />
        </Button> */}
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>phoneNumber</FormLabel>
                  <FormControl>
                    <Input
                      //   defaultValue={number}
                      disabled={loading}
                      placeholder="Mobile number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="House number, street number, city"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="additional"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Billboard label"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>

          <div className="w-full">
            <Button
              variant="customTertiary"
              size="default"
              disabled={loading}
              type="submit"
              className="w-full"
            >
              {action}
            </Button>
          </div>
        </form>
      </Form>
      {/* <hr className="my-6" />
      <ApiAlert
        title="NEXT_PUBLIC_API_URL"
        variant="public"
        description={`${origin}/api/${params.storeId}`}
      /> */}
    </div>
  );
};

export default UserForm;
