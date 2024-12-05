"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="hidden md:block cursor-pointer"
    >
      <Image
        alt="logo"
        width={100}
        height={100}
        src="/assets/images/Logo.svg"
      />
    </Link>
  );
};

export default Logo;
