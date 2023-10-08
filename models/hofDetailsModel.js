import mongoose from "mongoose";

const hofDetailsSchema=mongoose.Schema(
    {
        fname:String,
        lname:String,
        branch:String,
        score:String,
        year:String,
        month:String


    },{
        collection:'hofDetails'
    }
)

export default mongoose.model("hofDetails",hofDetailsSchema);
