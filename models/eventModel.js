import mongoose from "mongoose";

const eventSchema=mongoose.Schema(
    {
        image:String,
        cloudinary_id:String
    },{
        collection:'eventImg'
    }
)

export default mongoose.model("eventImg",eventSchema);
