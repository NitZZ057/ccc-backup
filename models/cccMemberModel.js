import mongoose from "mongoose";

const cccMemberSchema=mongoose.Schema(
    {
        Name:{
            type:String,
            required:true,
        },
        Timestamp:{
            type:String,
            required:true,
        },
        mis_id:{
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
)

export default mongoose.model("ccc_members",cccMemberSchema);
