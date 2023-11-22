import mongoose from "mongoose";
const CommentSchema=new mongoose.Schema({
    postid:{
        type:mongoose.Types.ObjectId,
    },
    userid:{
        type:mongoose.Types.ObjectId
    },
    body:{
        type:String
    },
    CreatedAt:{
        type:Date
    }
})
const Comments=mongoose.models.comments|| mongoose.model("comments",CommentSchema);
export default Comments;