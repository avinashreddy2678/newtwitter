"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import { FaFeather } from "react-icons/fa";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import LeftItems from "./LeftItems";
import { IconType } from "react-icons";
import { Twitter } from "@material-ui/icons";
import useCurrentUser from "@/app/hooks/useCurrentuser";
import axios from "axios";
import { toast } from "react-toastify";
interface Item {
  icons: IconType; // Update the type if needed
  title: string;
  href: string;
}

const LeftBar = () => {
  const router = useRouter();

  const { data, isLoading, mutate } = useCurrentUser();
  const [theme, settheme] = React.useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "dark"
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme || "");
      document.querySelector("html")?.setAttribute("data-theme", theme || "");
    }
  }, [theme]);
  const Logbtn = async (href: string) => {
    if (href === "/Login") {
      router.push(href);
    } else {
      const response = await axios.get("api/users/logout");
      if (response) {
        mutate();
      }
      router.push("/");
    }
  };

  const items: Item[] = [
    { icons: BsHouseFill, title: "Home", href: "/" },
    { icons: BsBellFill, title: "Notification", href: "/Notification" },
    { icons: FaUser, title: "Profile", href: "/user" },
  ];

  return (
    <div>
      <Twitter
        className={`h-30 mb-5${
          theme === "dark" ? " dark-theme" : " light-theme"
        }`}
        onClick={() => settheme(theme === "dark" ? "light" : "dark")}
      />

      {items.map((item: Item) => (
        <div className="px-3" key={item.href}>
          <LeftItems icons={item.icons} title={item.title} href={item.href} />
        </div>
      ))}
      <div className="px-4 flex align-middle justify-center">
        {!isLoading ? (
          data.message === "Crediantials" ? (
            <div className="">
              <div className="mt-6 flex align-middle justify-center lg:justify-start">
                <button className="rounded btn btn-primary pl-6 flex md:h-[20v] align-middle">
                  <FaFeather size={24} />
                  <span
                    onClick={() => {
                      router.push("/");
                    }}
                    className="px-3 cursor-pointer hidden lg:block"
                  >
                    Tweet
                  </span>
                </button>
              </div>
              <div className="mt-4">
                <button
                  className="btn btn-success mt-10"
                  onClick={() => {
                    Logbtn("/Logout");
                  }}
                >
                  LogOut <BiLogOut />
                </button>
              </div>
            </div>
          ) : (
            <button
              className="btn btn-primary mt-6 px-6"
              onClick={() => {
                Logbtn("/Login");
              }}
            >
              <span className="hidden lg:block">LogIn</span> <BiLogOut />
            </button>
          )
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default LeftBar;
