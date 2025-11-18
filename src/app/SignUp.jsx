"use client";
import { useState } from "react";

import { LoginPage } from "@/app/login/page.js";
import { PasswordPage } from "@/app/password/page.js";

export function SignUp() {
  const [step, setStep] = useState(1);

  function increaseStep() {
    setStep(step + 1);
  }
  function decreaseStep() {
    setStep(step - 1);
  }
  return (
    <div>
      {step === 1 && <LoginPage increaseStep={increaseStep} />}
      {step === 2 && (
        <PasswordPage increaseStep={increaseStep} decreaseStep={decreaseStep} />
      )}
    </div>
  );
}

export default SignUp;
