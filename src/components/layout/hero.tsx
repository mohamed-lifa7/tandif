import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="row-gap-8 grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="mb-6 max-w-xl">
            <Badge className="mb-2">حصري</Badge>
            <h2 className="mb-6 max-w-lg text-3xl font-bold leading-none tracking-tight sm:text-4xl">
              <span className="text-primary">احصل على</span> خدمات تنظيف منازل
              محترفة أو <span className="text-primary">قدم</span> خدمات التنظيف
              الخاصة بك
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              سواء كنت تبحث عن شركة لتنظيف منزلك أو تريد تقديم خدمات التنظيف،
              .نحن نربط بين الطرفين بخدمات عالية الجودة وأسعار مناسبة
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild>
              <Link href="/docs">احجز الان</Link>
            </Button>
          </div>
        </div>
        <div className="relative hidden md:flex">
          <Image src="/cleaning-hero.svg" alt="Cleaning" fill />
        </div>
      </div>
    </div>
  );
};

export default Hero;
