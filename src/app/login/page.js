"use client";
import Step3 from "@/app/login/step3.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "http://localhost:999/authentication/login",
        values
      );

      console.log("this is response:", response.data.token);

      localStorage.setItem("token", response.data.token);
      router.push("/");
      console.log("Push to homepage success");
      renderToStaticMarkup.success("Login successful!");
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data) {
        setErrors({ api: err.response.data });
      }
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
      <Step3 formik={formik} />
    </div>
  );
}
