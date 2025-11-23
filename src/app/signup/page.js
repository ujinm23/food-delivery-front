"use client";
import { useState } from "react";
import Step1 from "@/app/signUp/_features/step1";
import Step2 from "@/app/signUp/_features/step2";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";

const Home = () => {
  const [step, setStep] = useState(1);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
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

  const createUser = async (email, password) => {
    try {
      setLoading(true);
      await axios.post(`http://localhost:999/authentication/signup`, {
        email: email,
        password: password,
      });
      router.push("/login");
    } catch (err) {
      setApiError(err.response.data);
    } finally {
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      await createUser(email, password);
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
      {apiError && <div style={{ color: "red" }}>{apiError}</div>}
    </div>
  );
};
export default Home;
