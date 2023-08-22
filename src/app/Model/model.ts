import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
fileurl:{
        type:String,
        require : true,
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    }
})

const Images = mongoose.models.images || mongoose.model('images',imageSchema);

export default Images;