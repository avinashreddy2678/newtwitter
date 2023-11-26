"use client";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { BiSmile } from "react-icons/bi";

import EmojiPicker from "emoji-picker-react";
import useCurrentUser from "../hooks/useCurrentuser";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAllPosts from "../hooks/useAllPosts";
import useComments from "../hooks/useComments";
import { Close } from "@material-ui/icons";


interface HeaderProps {
  showBackArrow?: boolean;
  label?: string;
  button?: boolean;
  message?: string;
  postId?: string;
}

const Header: React.FC<HeaderProps> = ({ label, button, message, postId }) => {
  //const theme=localStorage.getItem("theme");
  const router = useRouter();
  const [emojivisible, setemojivisible] = useState(false);
  const { data, isLoading } = useCurrentUser();
  const { mutate } = useAllPosts();
  const [body, setbody] = useState("");
  const { mutate: mutateComments } = useComments(postId);
  //from page home
  const submittweet = async (userid: string) => {
    const res = await axios.post("/api/users/createpost", { body, userid });
    if (res) {
      toast.info("🦄 Tweeted!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setbody("");
    mutate();
  };

  //from page of comments  to add a new comment
  const submitcomment = async (userid: string) => {
    // console.log(postId)
    const res = await axios.post("/api/users/addcomment", {
      body,
      userid,
      postId,
    });
    if (res) {
      toast.info("Wow Great Rply", {
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
    setbody("");
    mutateComments();
  };
  const handlelog = (href: string) => {
    router.push(href);
  };

  return (
    <div>
      {isLoading && <div className="skeleton ml-6 w-[35vw] h-28"></div>}

      {!isLoading && data.message === "Crediantials" ? (
        <>
          <span className="ml-4 font-serif">{label} Page idhi</span>
          <div className="postingbox border border-opacity-10 mx-3 border-gray-500">
            <p className="flex]">
              {!isLoading &&
                (data.message === "Crediantials" ? (
                  <div className="flex flex-col w-full ">
                    <div className="flex align-middle justify-center  my-5 h-[10vh]">
                      <div className="my-3 ">
                        <Avatar profileImg={data?.user?.profileImg} />
                      </div>
                      <input
                        type="text"
                        value={body}
                        className="w-[100%] h-[80px] text-xs lg:text-md rounded flex px-3 outline-none bg-transparent"
                        placeholder={
                          !message ? " Write something here " : message
                        }
                        onChange={(e) => setbody(e.target.value)}
                      />
                      <div
                        className="flex flex-col lg:block align-middle items-center lg:mr-14 md:mr-8 lg:mt-10  relative  justify-center"
                        onClick={() => {
                          setemojivisible(!emojivisible);
                        }}
                      >
                        {
                          emojivisible ? <Close/> : <BiSmile size={20}/>
                        }
                        
                      </div>
                      {emojivisible ? (
                        <div className="mt-14 absolute z-20">
                          <EmojiPicker
                            emojiStyle='facebook'
                            size="16"
                            autoFocusSearch={false}
                            height={400}
                            width={300}
                            onEmojiClick={(e) => {
                              setbody((prevBody) => prevBody + e.emoji);
                            }}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {button ? (
                      <div
                        onClick={() => {
                          submitcomment(data.user._id);
                        }}
                        className="w-23 h-10 m-auto flex justify-end btn btn-primary"
                      >
                        <button className="">Comment</button>
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
            {label === "comment"
              ? "Create Or Register To Add A Comment"
              : " Welcome to Twitter"}
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
