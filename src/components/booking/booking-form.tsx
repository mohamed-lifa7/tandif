"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { toast } from "../ui/use-toast";

const bookingFormSchema = z.object({
  name: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  email: z.string().email(),
  phone: z.string(),
  userType: z.enum([""]),

  date: z.date(),
  time: z.string(),
  serviceType: z.enum(["regular", "deep_cleaning", "other"]),
  bedrooms: z.number(),
  bathrooms: z.number(),
  squareFeet: z.number(),
  extraServices: z.array(z.string()).optional(),
  requests: z.string().optional(),
  contactPreference: z.enum(["email", "phone", "whatsapp"]).optional(),
  location: z.string(),
  paymentMethod: z.enum(["credit_card", "cash", "bank_transfer"]),
  termsAccepted: z.boolean(),
});

const BookingForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof bookingFormSchema>) {
    toast({
      title: "you have submitted the following values",
      description: JSON.stringify(values, null, 2),
    });
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="name.firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الإسم</FormLabel>
                  <FormControl>
                    <Input placeholder="اسمك" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name.lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اللقب</FormLabel>
                  <FormControl>
                    <Input placeholder="لقبك" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>البريد الإلكتروني</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ادخل البريد الإلكتروني..."
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رقم الهاتف</FormLabel>
                <FormControl>
                  <Input placeholder="ادخل رقم الهاتف" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
