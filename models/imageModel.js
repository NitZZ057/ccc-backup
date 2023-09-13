import mongoose from "mongoose";

const imageSchema =mongoose.Schema(
    {
        image:String,
        question:String,
        testcase:{
            type:String,
            default:''
        },
        output:String

    },
    {
        collection:'imageFileName'
    }
)

export default mongoose.model("imageFileName",imageSchema);