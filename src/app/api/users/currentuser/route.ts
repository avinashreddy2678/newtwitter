import { getDatafromToken } from "@/app/helpers/getDataFromToken";
import User from "../../../models/UserModel";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const id = await getDatafromToken(request);
  try {
    if (id) {
      const user = await User.findOne({ _id: id }).select("-password");
      const followersCount = await User.find({ FollowingIds: { $in: id } });
      const count = followersCount.length;
      return NextResponse.json({ user, count,message: "Crediantials" });
    } else {
      return NextResponse.json({ message: "No proper Crediantials" });
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
