"use client";
import Avatar from "@/app/Components/Avatar";
import PostItem from "@/app/Components/PostItem";
import UserBio from "@/app/Components/UserBio";
import useCurrentUser from "@/app/hooks/useCurrentuser";
import UseOneUser from "@/app/hooks/useOneUser";
import useSingleUserPosts from "@/app/hooks/useSingleUserPosts";
import React from "react";
const UserView = ({ params: { userid } }: any) => {
  const { data: singleuser, error, isLoading, mutate } = UseOneUser(userid);
  const { data: posts, isLoading: postsLoading } = useSingleUserPosts(userid);
  // in posts the data is getting like singleuserposts
  return (
    <div>
      {isLoading && <div className="skeleton w-[40vw] h-[100vh]"></div>}
      {!isLoading && (
        <div className="h-[100vh]">
          <div className="w-100 p-4 h-20 bg-black ">
            <Avatar profileImg={singleuser.singleuser.profileImg} isLarge />
          </div>
          <UserBio userid={userid} />
          <div className="h-[60] overflow-y-auto scrollbar-hide">
            {!postsLoading &&
              posts !== undefined &&
              posts.singleuserposts.map((item: any) => (
                <div key={item._id}>
                  <PostItem postdetails={item} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserView;
