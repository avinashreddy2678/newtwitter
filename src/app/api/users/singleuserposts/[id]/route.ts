import { connect } from "@/app/dbConfig/dbConfig";
import Posts from "@/app/models/PostModal";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const singleuserposts = await Posts.find({ userid: id }).sort({CreatedAt:-1});
    return NextResponse.json({ singleuserposts });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
