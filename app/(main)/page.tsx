import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
  });

const MainPage = () => {
    return (
        <div className="flex items-center justify-center flex-col h-full">
      <div className={cn(
        "flex items-center justify-center flex-col",
        headingFont.className,
      )}>
    
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Terrier Motorsport
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-red-500 to-red-800 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Project Management App
        </div>
      </div>
      <div className={cn(
        "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
        textFont.className,
      )}>
        An in-house software developed by the team at Terrier Motorsport
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Login
        </Link>
      </Button>
    </div>
    )
}

export default MainPage