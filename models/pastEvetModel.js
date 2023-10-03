import mongoose from "mongoose";

const pastEventSchema=mongoose.Schema(
    {
        image:String,
        eventName:String,
        discription:String

    },{
        collection:'pastEventImg'
    }
)

export default mongoose.model("pastEventImg",pastEventSchema);
