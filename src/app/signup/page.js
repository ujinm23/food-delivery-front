"use client";
import { useState } from "react";
import Step1 from "@/app/signup/_features/step1";
import Step2 from "@/app/signup/_features/step2";
import { useFormik } from "formik";
import * as Yup from "yup";

const Home = () => {
  const [step, setStep] = useState(1);
  function increaseStep() {
    setStep((prev) => prev + 1);
  }
  function reduceStep() {
    setStep((prev) => prev - 1);
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "8 aas deesh")
      .matches(/[a-zA-Z]/, "Useg aguularai")
      .matches(/[0-9]/, "too aguularai")
      .matches(/[^a-zA-Z0-9]/, "temdegt aguularai")
      .required("Required"),
    confirmPassword: Yup.string().matches(
      [Yup.ref("password")],
      "Pssword not match"
    ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringly(values, null, 2));
    },
  });
  return (
    <div className="w-screen h-screen justify-center items-center flex ">
      {step === 1 && <Step1 increaseStep={increaseStep} formik={formik} />}
      {step === 2 && (
        <Step2
          increaseStep={increaseStep}
          reduceStep={reduceStep}
          formik={formik}
        />
      )}
    </div>
  );
};
export default Home;
