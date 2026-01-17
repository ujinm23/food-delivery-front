"use client";

import Step3 from "@/app/login/step3.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [apiError, setApiError] = useState("");
  const router = useRouter();

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:999/authentication/login",
        values
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", values.email);
      router.push("/");
    } catch (err) {
      setApiError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      {apiError && <p className="text-red-500">{apiError}</p>}
      <Step3 formik={formik} />
    </div>
  );
}
