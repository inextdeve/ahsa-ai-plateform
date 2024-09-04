import LoginForm from "@/components/auth/login-form";
import { Button } from "@nextui-org/react";
import { BrainCircuit } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div className=" border-primary border-2 lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
        <div className="bg-primary shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-1 md:p-6">
          <Image width={45} height={45} alt="left-logo" src="/left_logo.png" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
