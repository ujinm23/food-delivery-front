import Image from "next/image";
import { Footer } from "@/app/_features/footer.js";
import { Header } from "@/app/_features/header.js";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-180 w-auto relative flex">
        <Image
          src="/home.png"
          fill
          alt="the home picture"
          className="object-cover"
        />
      </div>
      <div className="w-auto h-auto bg-[#404040] p-22 flex flex-col">
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
