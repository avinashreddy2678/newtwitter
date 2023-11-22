"use client";
import Header from "@/app/Components/HeaderAndForm";
import PostItem from "@/app/Components/PostItem";
import useComments from "@/app/hooks/useComments";
import UseOnePost from "@/app/hooks/useOnePost";
import { useRouter } from "next/navigation";
import React from "react";
import CommentPage from "../page";
interface Props {
  postid: string;
}
const Page = ({ params: { postid } }: any) => {
  const router = useRouter();
  const { data, isLoading } = UseOnePost(postid);
  const { data: commentsdata, isLoading: commentsLoading } =
    useComments(postid);
  return (
    <div className="">
      <>
        <div className="">
          {!isLoading && <PostItem postdetails={data?.onepost[0]} />}
          {!isLoading && (
            <Header
              button={true}
              message={"Replay Here For the Tweet ....."}
              postId={data?.onepost[0]?._id}
              label={"comment"}
            />
          )}
        </div>

        {/*  each comment display*/}

        <div className="overflow-y-auto scrollbar-hide">
          <div className="h-[55vh]">
            {!commentsLoading &&
              commentsdata.eachcomment.map((item: any) => (
                <div key={item._id}>
                  <CommentPage item={item} />
                </div>
              ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Page;
