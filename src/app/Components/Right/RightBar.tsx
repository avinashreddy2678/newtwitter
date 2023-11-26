"use client";
import useAllUsers from "@/app/hooks/useAllUsers";
import React from "react";
import RightBarItem from "./RightBarItem";

const RightBar = () => {
  const { data, isLoading, error } = useAllUsers();
  //console.log(data)
  return (
    <div>
      <span className="mx-3 my-4 text-lg h-[100vh] font-sans">Whom to Follow </span>

      {!isLoading &&
        !error &&
        data.allusers.map((item: any) => (
          <div
            key={item._id}
            className="border m-2 border-opacity-10  border-gray-500 p-2"
          >
            {isLoading && <div className="skeleton w-[35vw] h-32"></div>}
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
