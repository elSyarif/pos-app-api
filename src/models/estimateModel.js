import mongoose from 'mongoose'

const estimateSchema = mongoose.Schema({
    outlet : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Outlet"
    },
    name:{
        type : String,
        required : true
    },
    description:{
        type: String,
        required: true
    },
}, {timestamps : true})

const Estimate = mongosse.model('Estimate', estimateSchema)

export default Estimate