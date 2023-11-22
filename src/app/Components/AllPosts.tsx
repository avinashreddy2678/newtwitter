"use client";
import React from "react";
import useAllPosts from "../hooks/useAllPosts";
import PostItem from "./PostItem";

const AllPosts = () => {
  const { data, isLoading } = useAllPosts();
  return (
    <div className="h-[75vh]">
      {!isLoading &&
        data.allposts.map((item: any) => (
          <div key={item._id}>
            <PostItem postdetails={item} />
          </div>
        ))}
    </div>
  );
};

export default AllPosts;
