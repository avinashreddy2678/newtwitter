"use client";
import axios from "axios";
import useSingleUserPosts from "./useSingleUserPosts";
import useAllPosts from "./useAllPosts";
interface Props {
    userid?: string;
  }
  
  const useLike = (userid: Props) => {
  const {mutate:mutateFetchedPost}=useSingleUserPosts(userid);
  const { mutate: mutateFetchedPosts } = useAllPosts();
  const toLike = async ({
    userId,
    postId,
  }: {
    userId: string;
    postId: string;
  }) => {
    try {
      await axios.post("api/users/like", { userId, postId });
      mutateFetchedPosts();
      mutateFetchedPost();
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const deleteLike = async ({
    userId,
    postId,
  }: {
    userId: string;
    postId: string;
  }) => {
    try {
      await axios.delete("api/users/like", {
        data: { userId, postId },
      });

      mutateFetchedPosts();
      mutateFetchedPost();
    } catch (error) {
      console.error("Error unliking post:", error);
    }
  };

  return {
    deleteLike,
    toLike,
  };
};

export default useLike;
