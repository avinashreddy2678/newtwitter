"use client";
import useAllUsers from "@/app/hooks/useAllUsers";
import React from "react";
import RightBarItem from "./RightBarItem";


const RightBar = () => {
  const { data, isLoading,error } = useAllUsers();
  //console.log(data)
  return (
    <div>
      Who to Follow
      {!isLoading && !error &&
        data.allusers.map((item: any) => (
          <div key={item._id} className="border border-opacity-10 border-gray-500 p-2">
            <RightBarItem
              name={item.name}
              id={item._id}
              img={item.profileImg}
            />
          </div>
        ))}
    </div>
  );
};

export default RightBar;
