"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      width={100}
      height={100}
      src="./assets/images/Logo.svg"
    />
  );
};

export default Logo;
