import { connect } from "@/app/dbConfig/dbConfig";
import Comments from "@/app/models/CommentModal";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function GET(
  request: NextRequest,
  { params }: { params: { postid: string } }
) {
  try {
    const postid = params.postid;
    const eachcomment = await Comments.find({ postid }).sort({CreatedAt:-1});
    return NextResponse.json({ eachcomment });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
