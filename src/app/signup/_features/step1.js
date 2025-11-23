"use client";
import Image from "next/image";
import { ChevronLeft } from "@/app/_icons/ChevronLeft";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Step1({ increaseStep, formik }) {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1440px] h-[944px] p-5 flex gap-12 pl-20 justify-between items-center">
        <div className="w-104 h-72 flex flex-col gap-6">
          <div
            className="w-9 h-9 flex justify-center items-center rounded-[10px] border border-[#E4E4E7]"
            onClick={() => router.back()}
          >
            <ChevronLeft />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-2xl">Create your account</h3>
            <p className="font-normal text-[#71717A]">
              Sign up to explore your favorite dishes.
            </p>
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              // className={`pl-10 w-[416px] ${
              //   !validEmail && touched
              //     ? "border-red-300 focus-visible: ring-red-300"
              //     : ""
              // }`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="h-5 mb-4">
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm">
                  Invalid email. Use a format like example@email.com
                </p>
              )}
            </div>

            <Button
              // className="w-104 h-9 bg-[#18181B] rounded-[6px] flex justify-center items-center"
              onClick={increaseStep}
              disabled={errors.email || !values.email}
              className={`w-[416px] h-9 mb-6 cursor-pointer
            ${
              !errors.email || values.email
                ? "bg-[#18181B] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            >
              {/* <p className="text-[#FAFAFA] text-[14px] font-medium">
              Let&apos;s Go
            </p> */}
              Let&apos;s Go
            </Button>
          </div>
          <div className="flex gap-3 text-4 justify-center items-center">
            <p className="text-[#71717A]">Already have an account?</p>
            <span className="text-[#2563EB]">Log in</span>
          </div>
        </div>
        <div className="w-[856px] h-[904px] relative">
          <Image
            src="/login.png"
            fill
            alt="the picture"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
