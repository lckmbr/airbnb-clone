"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      width={30}
      height={30}
      className="rounded-full"
      alt="Avatar"
      src="./assets/images/placeholder.svg"
    />
  );
};

export default Avatar;
