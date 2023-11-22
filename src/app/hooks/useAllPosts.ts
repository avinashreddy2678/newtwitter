import useSWR from "swr";
import fetcher from "../lib/fetcher";
const useAllPosts=()=>{
    const {data,error,isLoading,mutate}=useSWR("/api/users/allposts",fetcher);
    return {
        data,error,isLoading,mutate
    }
}
export default useAllPosts;