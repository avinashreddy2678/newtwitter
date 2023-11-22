import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Comments from "@/app/models/CommentModal";

connect();
export async function POST(request:NextRequest) {
    const reqBody=await request.json();
    const { body,userid,postId}=reqBody;
    //console.log(postId,userid);
    const newcomment= await new Comments({
        postid:postId,
        userid,
        body,
        CreatedAt:Date.now()
    })
    await newcomment.save();
    return NextResponse.json({message:"Commented Successfully"});
}