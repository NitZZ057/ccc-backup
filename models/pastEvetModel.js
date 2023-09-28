import mongoose from "mongoose";

const pastEventSchema=mongoose.Schema(
    {
        image:String,
        cloudinary_id:String
    },{
        collection:'pastEventImg'
    }
)

export default mongoose.model("pastEventImg",pastEventSchema);
