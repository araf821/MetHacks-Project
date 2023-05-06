"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="site logo"
      className="cursor-pointer"
      height="250"
      width="250"
      src="/images/Pawsiotherapy.png"
    />
  );
};
export default Logo;
