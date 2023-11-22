import mongoose from 'mongoose';


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    profileImg:{
        type:String,
    },
    FollowingIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    CreatedAt:{
        type:Date
    }
})
const User=mongoose.models.users|| mongoose.model("users",UserSchema);
export default User;