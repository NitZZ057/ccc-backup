import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required : true,
            trim: true,
        },
        email: {
            type: String,
            required : true,
            unique: true,
        },
        password: {
            type: String,
            minlength:[8,"Password must be atleast 8 characters"],
            required : true,
        },
        role: {
            type: Number,
            default: 0,
        },
        score:{
            type: Number,
            default: 0,
        },
        solved:{
            type: Number,
            default: 0,
        }

    },
    {
        timestamps: true
    }
);

export default mongoose.model("users",userSchema);