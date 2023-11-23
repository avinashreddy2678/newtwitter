'use client';
import useSWR from 'swr';
// import fetcher from "../lib/fetcher";
const useCurrentUser = () => {
  const fetcher = (...args:any) => fetch(...args,{cache:'no-store'}).then((res) => res.json())
    const { data, error, isLoading, mutate } = useSWR('/api/users/currentuser', fetcher);
    //console.log(!isLoading && data);
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useCurrentUser;
