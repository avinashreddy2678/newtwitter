"use client";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/app/hooks/useCurrentuser";
const LeftItems: React.FC<{ icons: IconType; title: string; href: string }> = ({
  icons: Icon,
  title,
  href,
}) => {
  const router = useRouter();
  const { data: currentuser } = useCurrentUser();
  const handleClick = useCallback(() => {
    if (currentuser.value === "no token" && href !== "/") {
      router.push("/Login");
    } else {
      router.push(href);
    }
  }, [router, href, currentuser]);
  return (
    <div
      className="flex pl-6 py-3 justify-center rounded lg:justify-start md:h-[20v] align-middle hover:bg-gray-300 hover:text-black"
      onClick={handleClick}
    >
      <Icon className="cursor-pointer" />
      <span className="px-3 cursor-pointer  hidden lg:block">{title}</span>
    </div>
  );
};

export default LeftItems;
