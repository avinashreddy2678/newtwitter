import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("connected to db")
        })
        connection.on('error',(error)=>{
            console.log(error)
        })
    } catch (error) {
        console.error(error);
    }
}