import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const singleuser = await User.findOne({ _id: id }).select("-password");
    const followersCount=await User.find({FollowingIds:{$in : id}});
    const count=followersCount.length
    return NextResponse.json({ singleuser,count });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
