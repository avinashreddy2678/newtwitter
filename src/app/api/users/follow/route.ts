import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/UserModel";

import { NextRequest, NextResponse } from "next/server";
interface RequestBody {
  userid: string;
  followid: string;
}
connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody=await request.json();
    const { userid,followid}=reqBody;
   // console.log(userid,followid,"fda")
    const user=await User.findOne({_id:userid})
    //console.log(user , followid)
    await user.FollowingIds.push(followid);
    await user.save();
    return NextResponse.json({msg:"Following success"});
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { userid, followid } = body;
   // console.log(userid , followid)
    const user = await User.findOne({ _id:userid });
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    const index=user.FollowingIds.indexOf(followid);
    await user.FollowingIds.splice(index,1);
    await user.save();
    
    return NextResponse.json({ message: "unfollow successful" });
  } catch (error) {
    console.error("Error handling DELETE request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
