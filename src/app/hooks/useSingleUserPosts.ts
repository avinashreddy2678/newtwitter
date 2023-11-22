"use client";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
const useSingleUserPosts=(userid:any)=>{
    const {data,error,isLoading,mutate}=useSWR(`/api/users/singleuserposts/${userid}`,fetcher);
    return {
        data,error,isLoading,mutate
    }
}
export default useSingleUserPosts;