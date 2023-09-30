import mongoose from "mongoose";

const leaderboardSchema=mongoose.Schema(
    {
        image:String

    },{
        collection:'leadImg'
    }
)

export default mongoose.model("leadImg",leaderboardSchema);
