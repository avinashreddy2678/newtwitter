"use client";
import React, { useState } from "react";
import Avatar from "./Avatar";
import useCurrentUser from "../hooks/useCurrentuser";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAllPosts from "../hooks/useAllPosts";
import useComments from "../hooks/useComments";
interface HeaderProps {
  showBackArrow?: boolean;
  label?: string;
  button?: boolean;
  message?:string;
  postId?:string
}
const Header: React.FC<HeaderProps> = ({ label, button,message,postId }) => {
  const router = useRouter();
  const { data, isLoading } = useCurrentUser();
  const { mutate } = useAllPosts();
  const [body, setbody] = useState("");
const {mutate:mutateComments}=useComments(postId);
  //from page home 
  const submittweet = async (userid: string) => {
    const res = await axios.post("/api/users/createpost", { body, userid });
    if (res) {
      toast.success("Tweeted");
    }
    setbody("");
    mutate();
  };

//from page of comments  to add a new comment
  const submitcomment = async (userid: string) => {
    // console.log(postId)
    const res = await axios.post("/api/users/addcomment", { body, userid,postId});
    if (res) {
      toast.success("Replied");
    }
    setbody("");
    mutateComments();
  };
  const handlelog = (href: string) => {
    router.push(href);
  };

  return (
    <div>
      {!isLoading && data.message === "Crediantials" ? (
        <>
          {label}
          <div className="postingbox border border-opacity-10 border-gray-500">
            <p className="flex]">
              {!isLoading &&
                (data.message === "Crediantials" ? (
                  <div className="flex flex-col w-full">
                    <div className="flex align-middle justify-center my-5 h-[10vh]">
                      <div className="my-3">
                        <Avatar profileImg={data.user.profileImg} />
                      </div>
                      <input
                        type="text"
                        value={body}
                        className="w-[100%] h-[80px] rounded flex px-3 outline-none bg-transparent"
                        placeholder={!message ? " Write something here " : message }
                        onChange={(e) => setbody(e.target.value)}
                      />
                    </div>
                    {button ? (
                      <div
                        onClick={() => {
                          submitcomment(data.user._id);
                        }}
                        className="w-20 h-10 m-auto flex justify-end btn btn-primary"
                      >
                        <button>Comment</button>
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          submittweet(data.user._id);
                        }}
                        className="w-20 h-10 m-auto flex justify-end btn btn-primary"
                      >
                        <button>Tweet</button>
                      </div>
                    )}

                    <ToastContainer />
                  </div>
                ) : (
                  ""
                ))}
            </p>
          </div>
        </>
      ) : (
        <div className="py-8 border border-opacity-10 border-gray-500">
          <h1 className="text-2xl text-center mb-4 font-bold">
            {
              label==="comment" ? "Create Or Register To Add A Comment" : " Welcome to Twitter"
            }
          </h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <button
              className="btn btn-primary"
              onClick={() => {
                handlelog("/Login");
              }}
            >
              Login
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                handlelog("/Signup");
              }}
            >
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
