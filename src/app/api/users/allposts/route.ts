export const dynamic ="force-dynamic";
import { connect } from "@/app/dbConfig/dbConfig";
import Posts from "@/app/models/PostModal";

import { NextRequest, NextResponse } from "next/server";
connect();
export async function GET(req: NextRequest) {
  try {
    const allposts = await Posts.find({}).sort({createdAt:-1});
    return NextResponse.json({ allposts });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
