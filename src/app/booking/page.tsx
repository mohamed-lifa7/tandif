import React from "react";
import Image from "next/image";
import BookingForm from "@/components/booking/booking-form";
const page = () => {
  return (
    <>
      <main className="container">
        <div className="mx-auto py-8 md:px-4">
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="mb-2 text-xl font-bold leading-none tracking-tight">
                احصل على خدمات تنظيف منازل محترفة أو قدم خدمات التنظيف الخاصة بك
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                سواء كنت تبحث عن شركة لتنظيف منزلك أو تريد تقديم خدمات التنظيف،
                .نحن نربط بين الطرفين بخدمات عالية الجودة وأسعار مناسبة
              </p>
            </div>
          </div>
          <div className="row-gap-8 grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <BookingForm />
              </div>
            </div>
            <div className="relative hidden md:flex">
              <Image src="/booking.svg" alt="Cleaning" fill />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
