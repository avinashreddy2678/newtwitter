import jwt from 'jsonwebtoken';
import { NextRequest,NextResponse } from 'next/server';
export const getDatafromToken=(request:NextRequest)=>{
        try {
            const token=request.cookies.get("token")?.value||"";
            if(token){
                const decoded:any=jwt.verify(token,process.env.SECREAT!);
                return decoded.id;
            }
          return "no token"
        } catch (error) {
            console.error(error)
        }
}