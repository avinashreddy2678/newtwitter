"use client";
import React from 'react'
import useCurrentUser from '../hooks/useCurrentuser'
import UseOneUser from '../hooks/useOneUser';
import Avatar from '../Components/Avatar';
import UserBio from '../Components/UserBio';
import PostItem from '../Components/PostItem';
import useSingleUserPosts from '../hooks/useSingleUserPosts';
const Page = () => {
  const { data:currentuser, isLoading } = useCurrentUser();
  
  const userId = currentuser?.user?._id;
  const { data: singleuser,isLoading:userLoading,error } = useSingleUserPosts(userId);
 // console.log(!userLoading && !error && singleuser.singleuserposts)

  return (
    <div>
      {!isLoading && (
        <div>
          <div className="w-100 p-4 h-20 bg-black">
            {currentuser!==undefined && <Avatar profileImg={currentuser.user.profileImg} isLarge />}
          </div>
          {currentuser  && <UserBio userid={currentuser.user._id}/>}
         
         {
          !userLoading && !error && singleuser.singleuserposts.map((item:any)=>(
            <div key={item._id}>
                  <PostItem postdetails={item}/>
                </div>
          ))
         }
        </div>
      )}
    </div>
  );
};

export default Page;
