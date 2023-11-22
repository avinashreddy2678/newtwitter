import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'
import User from "@/app/models/UserModel";
import { connect } from "@/app/dbConfig/dbConfig";

import { NextRequest,NextResponse } from "next/server";
connect();
export async function POST(request:NextRequest) {
    const reqBody=await request.json();
    const { name,email,imageurl,password}=reqBody;
    const user = await User.findOne({ email });
    if(user){
        return NextResponse.json({message:"User Exists"})
    }
    const hashedPassword=await bcryptjs.hash(password,10);
    const newuser=await new User({
        name,
        email,
        profileImg:imageurl,
        password:hashedPassword,
        CreatedAt:Date.now()
    })
    await newuser.save();
    console.log("success");
    return NextResponse.json({status:201,message:"Success"});
}