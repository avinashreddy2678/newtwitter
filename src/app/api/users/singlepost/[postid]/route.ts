import { connect } from "@/app/dbConfig/dbConfig";
import Posts from "@/app/models/PostModal";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function GET(
  request: NextRequest,
  { params }: { params: { postid: string } }
) {
  try {
    const postid = params.postid;
    const onepost = await Posts.find({ _id: postid });
    return NextResponse.json({ onepost });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
