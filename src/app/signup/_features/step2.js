"use client";
import Image from "next/image";
import { ChevronLeft } from "@/app/_icons/ChevronLeft";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Step2({ increaseStep, reduceStep, formik }) {
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
  } = formik;
  const handleButtonClick = () => {
    router.push("/login");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(), handleSubmit(values);
      }}
      className="flex justify-center items-center min-h-screen"
    >
      <div className="w-[1440px] h-[944px] p-5 flex gap-12 pl-20 justify-between items-center">
        <div className="w-100 h-93 flex flex-col gap-6">
          <div
            className="w-9 h-9 flex justify-center items-center rounded-[10px] border border-[#E4E4E7]"
            onClick={() => router.back()}
          >
            <ChevronLeft />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-2xl">Create a strong password</h3>
            <p className="font-normal text-[#71717A]">
              Create a strong password with letters, numbers.
            </p>
          </div>

          <div className="w-100 h-30 flex flex-col gap-4">
            <Input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={` ${
                errors ? "border-red-300 focus-visible: ring-red-300" : ""
              }`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="relative h-5">
              {errors.password && touched.password && (
                <div className="text-red-500">{errors.password}</div>
              )}
            </div>
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm"
              name="confirmPassword"
              className={`${
                errors ? "border-red-300 focus-visible: ring-red-300" : ""
              }`}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="flex items-center gap-2">
              <Checkbox id="terms-2" onCheckedChange={(v) => setShow(v)} />
              <p className="text-[14px] text-[#71717A]">Show password</p>
            </div>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "loading" : "Lets Go"}
          </Button>
          <div className="flex gap-3 text-4 justify-center items-center">
            <p className="text-[#71717A]">Already have an account?</p>
            <button className="text-[#2563EB]" onClick={handleButtonClick}>
              Log in{" "}
            </button>
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
    </form>
  );
}
