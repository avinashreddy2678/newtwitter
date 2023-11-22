"use client";
import useSWR from 'swr';
import fetcher from "../lib/fetcher";
const useComments = (postid:any) => {
    const { data, error, isLoading, mutate } = useSWR(`/api/users/commentofpost/${postid}`, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useComments;
