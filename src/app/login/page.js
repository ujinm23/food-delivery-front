"use client";
import Step3 from "@/app/login/step3.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "8 aas deesh")
      .matches(/[a-zA-Z]/, "Useg aguularai")
      .matches(/[0-9]/, "too aguularai")
      .matches(/[^a-zA-Z0-9]/, "temdegt aguularai")
      .required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Incorrect password. Please try again."
    ),
  });

  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      await axios.post(`http://localhost:999/authentication/login`, {
        email: email,
        password: password,
      });
      router.push("/home");
    } catch (err) {
      setApiError(err.response.data);
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
      await loginUser(email, password);
    },
  });
  return (
    <div>
      <Step3 />
    </div>
  );
}
