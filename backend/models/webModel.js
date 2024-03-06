import mongoose from "mongoose";
const websSchema = new mongoose.Schema(
    {
        name:{type:String,require:true,unique:true},
        image:{type:String,require:true},
        projectLink:{type:String,require:true},
        description:{type:String,require:true},
        imageTitle:[
            {
                title:{type:String,required:true},
                image:{type:String,required:true},
            }
        ]
    },
    {
        timestamps:true,
    }
);
const Websites = mongoose.model("Websites",websSchema);
export default Websites;