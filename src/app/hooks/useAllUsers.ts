"use client";
import useSWR from 'swr';
import fetcher from "../lib/fetcher";
const useAllUsers = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/users/allusers', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useAllUsers;
