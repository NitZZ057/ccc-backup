import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
    {
        image: {
            type: String,
            required : true,
        },

    },
    {
        timestamps: true
    }
);

export default mongoose.model("questions",questionSchema);