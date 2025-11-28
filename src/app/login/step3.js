"use client";
import Image from "next/image";
import { ChevronLeft } from "@/app/_icons/ChevronLeft";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Step3({ formik }) {
  const router = useRouter();

  const { values, handleChange, handleBlur, handleSubmit, isSubmitting } =
    formik;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1440px] h-[944px] p-5 flex gap-12 pl-20 justify-between items-center">
        <div className="w-100 h-93 flex flex-col gap-6">
          <div className="w-9 h-9 flex justify-center items-center rounded-[10px] border border-[#E4E4E7]">
            <ChevronLeft />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-2xl">Log in </h3>
            <p className="font-normal text-[#71717A]">
              Log in to enjoy your favorite dishes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading" : "Lets go"}
            </Button>
          </form>

          <div className="flex gap-3">
            <p className="text-[#71717A]">Don’t have an account?</p>
            <button
              className="text-[#2563EB]"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="w-[856px] h-[904px] relative">
          <Image
            src="/login.png"
            fill
            alt="the picture"
            className="object-cover rounded-2xl"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
