"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer"
      alt="logo"
      width={100}
      height={100}
      src="./assets/images/Logo.svg"
    />
    // <Link href={"/"}>
    // </Link>
  );
};

export default Logo;
