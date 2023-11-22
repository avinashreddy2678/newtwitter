"use client";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/navigation";
import React from "react";
import UseOneUser from "../hooks/useOneUser";
import Avatar from "../Components/Avatar";

const CommentPage = (post: any) => {
  const { data, isLoading } = UseOneUser(post?.item?.userid);

  const router = useRouter();
  const goToProfile = (id: string) => {
    if (
      !isLoading &&
      data?.message === "Crediantials" &&
      data?.user?._id === id
    ) {
      router.push("/user");
    } else {
      router.push(`/user/${id}`);
    }
  };
  return (
    <div className="mt-2 my-3 flex border border-opacity-20 border-gray-500 p-5">
      <div
        className="min-h-[6vh]  cursor-pointer"
        onClick={() => goToProfile(post?.item?.userid)}
      >
        {!isLoading && <Avatar profileImg={data.singleuser.profileImg} />}
      </div>
      <div className="ml-3">
        <span
          onClick={() => goToProfile(post?.item?.userid)}
          className="font-bold  cursor-pointer"
        >
          {!isLoading && data.singleuser.name}
        </span>{" "}
        <span className="ml-3 text-xs">
          Replied{" "}
          {post?.item?.CreatedAt
            ? formatDistanceToNowStrict(new Date(post.item.CreatedAt))
            : "Unknown time"}{" "}
          ago
        </span>
        <div className="mt-5 ml-2 cursor-pointer">{post?.item?.body}</div>
      </div>
    </div>
  );
};

export default CommentPage;
