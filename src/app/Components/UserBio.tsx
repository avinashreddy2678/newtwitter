"use client"
import React from "react";
import useCurrentUser from "../hooks/useCurrentuser";
import UseOneUser from "../hooks/useOneUser";
import useFollow from "../hooks/useFollow";
import { useRouter } from "next/navigation";

const UserBio = ({ userid }: any) => {
  const { data: fetchedUser, isLoading} = UseOneUser(userid);
  const { data: currentUser,isLoading:currentusrLoading } = useCurrentUser();
  const { addFollow, removeFollow } = useFollow(userid);
  const router=useRouter()
  //console.log(fetchedUser)
  //console.log(currentUser, "curr");

  const button =
    !isLoading && !currentusrLoading &&
    currentUser !== undefined &&
    fetchedUser.singleuser.FollowingIds.includes(currentUser?.user?._id);

  //Date formating
  const dateString = !isLoading && fetchedUser.singleuser.CreatedAt;
  const normalDate = new Date(dateString).toLocaleDateString();

  const handleFollow=(userid:string,followid:string)=>{
    if (!isLoading && currentUser.message !== "Crediantials") {
      router.push("/Login");
    }
    addFollow({ userid, followid });
  }
  const handleUnFollow=(userid:string,followid:string)=>{
    removeFollow({ userid, followid });
  }
  


  return (
    <div>
      {isLoading ? (
        ""
      ) : (
        <div className="border border-opacity-10 border-gray-500 pb-4">
          <div className="flex justify-end p-2">
            {currentUser !== undefined && currentUser?.user?._id === userid ? (
              <button className="btn btn-success">Hey...</button>
            ) : (
              <>
                {button ? (
                  <>
                    <button
                      className="bg-transparent font-semibold py-2 px-4 border hover:border-transparent rounded-full"
                      onClick={()=>{handleUnFollow(fetchedUser.singleuser._id,currentUser?.user?._id)}}
                    >
                      Following
                    </button>
                  </>
                ) : (
                  <>
                  <button
                    className="btn btn-primary rounded-full"
                    onClick={()=>{handleFollow(fetchedUser.singleuser._id,currentUser?.user?._id)}}
                  >
                    Follow
                  </button>
                </>
                )}
            </>
            )}
          </div>

          <div className="mt-3 px-4">
            <div className="flex flex-col">
              <p className="text-2xl font-semibold">
                {fetchedUser.singleuser?.name}
              </p>
              <p className="text-md text-neutral-500">
                @{fetchedUser.singleuser?.email}
              </p>
            </div>
            <div className="flex flex-col mt-4">
              {normalDate ? <> Joined {normalDate}</> : ""}
            </div>
            <div className="flex flex-row items-center mt-4 gap-6">
              <div className="flex flex-row items-center gap-1">
                <p className="">
                  {fetchedUser.singleuser?.FollowingIds?.length}
                </p>
                <p className="text-neutral-500">Followers</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <p className="">{fetchedUser.count}</p>
                <p className="text-neutral-500">Following</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBio;
