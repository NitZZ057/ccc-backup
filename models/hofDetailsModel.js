import mongoose from "mongoose";

const hofDetailsSchema=mongoose.Schema(
    {
        rank:String,
        name:String,
        score:String,
        year:String,
        month:String


    },{
        collection:'hofDetails'
    }
)

export default mongoose.model("hofDetails",hofDetailsSchema);
