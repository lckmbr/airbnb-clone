"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      width={30}
      height={30}
      className="rounded-full"
      alt="Avatar"
      src={src || "./assets/images/placeholder.svg"}
    />
  );
};

export default Avatar;
