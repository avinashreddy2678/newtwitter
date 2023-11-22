import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function GET(request: NextRequest) {
  try {
    const allusers = await User.find({}).select("-password");
    //console.log(allusers ,"hello")
    return NextResponse.json({ allusers });
    
  } catch (error) {
    return NextResponse.json({ error });
  }
}
