import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const UseOneUser = (userid?: string) => {
  const { data, error, isLoading, mutate } = useSWR(`/api/users/Oneuser/${userid}`, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default UseOneUser;
