import React from "react";
import Avatar from "../Avatar";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/app/hooks/useCurrentuser";
interface user {
  name: string;
  id: string;
  img: string;
}
const RightBarItem = ({ name, id, img }: user) => {
  const router = useRouter();
  const { data } = useCurrentUser();
  //console.log(data)
  const gotoUserPage = (id: string) => {
    if (data.message==="Crediantials"&& data.user._id===id) {
      router.push("/user");
    } else {
      router.push(`/user/${id}`);
    }
  };

  return (
    <div
      className="flex"
      onClick={() => {
        gotoUserPage(id);
      }}
    >
      <Avatar profileImg={img} />
      <span className="ml-3">{name}</span>
    </div>
  );
};

export default RightBarItem;
