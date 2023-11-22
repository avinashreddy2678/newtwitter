import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const UseOnePost = (postid: string) => {
  const { data, error, isLoading, mutate } = useSWR(`/api/users/singlepost/${postid}`, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default UseOnePost;
