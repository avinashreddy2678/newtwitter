import Posts from "@/app/models/PostModal";
import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/UserModel";
connect();
export async function POST(request:NextRequest) {
    const reqBody=await request.json();
    const { body,userid}=reqBody;
    const user=await User.findById({_id:userid});
    const newpost= await new Posts({
        userid,
        post:body,
        createdAt:Date.now()
    })
    await newpost.save();
  await user.save();
    return NextResponse.json({message:"Posted Successfully"});
}