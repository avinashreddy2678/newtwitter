export const dynamic ="force-dynamic";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        const response=NextResponse.json({
            message:"Logout success"
        })
        response.cookies.delete("token");
        return response;
    } catch (error) {
        console.log(error)
    }
    
}