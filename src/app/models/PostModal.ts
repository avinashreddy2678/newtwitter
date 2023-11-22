import mongoose from "mongoose";
const PostSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Types.ObjectId,
        ref:"users"
    },
    post:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    isLiked:[{
        type:mongoose.Types.ObjectId
    }]
})
const Posts=mongoose.models.posts||mongoose.model("posts",PostSchema);
export default Posts;