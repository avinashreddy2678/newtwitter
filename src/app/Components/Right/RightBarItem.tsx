import React from "react";
import Avatar from "../Avatar";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/app/hooks/useCurrentuser";
import useAllUsers from "@/app/hooks/useAllUsers";
interface user {
  name: string;
  id: string;
  img: string;
}
const RightBarItem = ({ name, id, img }: user) => {
  const router = useRouter();
  const { data } = useCurrentUser();
  const { isLoading } = useAllUsers();
  //console.log(data)
  const gotoUserPage = (id: string) => {
    if (data.message==="Crediantials"&& data.user._id===id) {
      router.push("/user");
    } else {
      router.push(`/user/${id}`);
    }
  };

  return (
    <>
   {isLoading && <div className="skeleton w-[5vw] h-32"></div>}
    <div
      className="flex"
      onClick={() => {
        gotoUserPage(id);
      }}
    >
      
      <Avatar profileImg={img} />
      <span className="ml-3 mt-2 font-sans">{name}</span>
    </div></>
  );
};

export default RightBarItem;
