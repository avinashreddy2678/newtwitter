import React from "react";
import UseOneUser from "../hooks/useOneUser";
import Avatar from "./Avatar";
import { formatDistanceToNowStrict } from "date-fns";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import useCurrentUser from "../hooks/useCurrentuser";
import { useRouter } from "next/navigation";
import useLike from "../hooks/useLike";
import { toast } from "react-toastify";
import useComments from "../hooks/useComments";
const PostItem = ({ postdetails }: any) => {
  const router = useRouter();
  //console.log(postdetails);
  const { data: postuser, isLoading } = UseOneUser(postdetails.userid);
  const { data, isLoading: currentuserLoading } = useCurrentUser();
  const { data: commentsdata, isLoading: commentsLoading } = useComments(
    postdetails._id
  );
  //console.log(commentsdata.eachcomment.length);
  //wait until user loads and in postdetials of every post which has isLiked array and checking the curernt user inlcudes
  const CheckLike =
    !currentuserLoading &&
    data.message === "Crediantials" &&
    postdetails.isLiked.includes(data.user._id);

  const u_id =
    !isLoading && data && data.message === "Crediantials" && data.user._id;
  //useLike hook has two delte like and add like which exceipts two paramwters userid and postid
  const { toLike, deleteLike } = useLike(u_id);

  const Like = (postId: string, userId: string) => {
    if (!isLoading && data.message !== "Crediantials") {
      router.push("/Login");
    } else {
      toLike({ userId, postId });
      toast.success("Wow You Liked It!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const RemoveLike = (postId: string, userId: string) => {
    if (!isLoading && data.message !== "Crediantials") {
      router.push("/Login");
    } else {
      deleteLike({ userId, postId });
      toast.error("It's Okay broh!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const goToProfile = (id: string) => {
    if (data.message === "Crediantials" && data.user._id === id) {
      router.push("/user");
    } else {
      router.push(`/user/${id}`);
    }
  };
  return (
    <div className="mt-2 m-3 flex border border-opacity-20 border-gray-500 p-5">
      <div
        className="min-h-[10vh]  cursor-pointer"
        onClick={() => goToProfile(postdetails.userid)}
      >
        {isLoading && <div className="skeleton w-[35vw] h-32"></div>}

        {!isLoading && <Avatar profileImg={postuser.singleuser.profileImg} />}
      </div>
      <div>
        {!isLoading && (
          <>
            <div className="m-2">
              <span
                onClick={() => goToProfile(postdetails.userid)}
                className="font-bold  cursor-pointer"
              >
                {postuser.singleuser.name}
              </span>{" "}
              <span className="ml-2 text-xs">
                {formatDistanceToNowStrict(new Date(postdetails.createdAt))} ago
              </span>
            </div>
            <div className="mt-1 ml-2 cursor-pointer">{postdetails.post}</div>
            <div className="flex gap-8 mt-4">
              {CheckLike ? (
                <>
                  <span
                    className="flex  gap-2 items-center cursor-pointer"
                    onClick={() => RemoveLike(postdetails._id, data?.user?._id)}
                  >
                    <AiFillHeart color={"red"} size={20} />
                    <span>{postdetails.isLiked.length}</span>
                  </span>
                </>
              ) : (
                <span
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={() => Like(postdetails._id, data?.user?._id)}
                >
                  <AiOutlineHeart size={20} />
                  {postdetails.isLiked.length}
                </span>
              )}

              <span
                className="flex gap-2 align-middle justify-center items-center cursor-pointer"
                onClick={() => {
                  router.push(`/CommentPage/${postdetails._id}`);
                }}
              >
                <AiOutlineMessage size={20} />{" "}
                {!commentsLoading && commentsdata.eachcomment.length}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostItem;
