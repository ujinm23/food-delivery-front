import Image from "next/image";

import SignUp from "./SignUp.jsx";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp />
    </div>
  );
}
