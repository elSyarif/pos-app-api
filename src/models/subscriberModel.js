import mongoose from 'mongoose'

const subscribeSchema = mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    email : {
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    subscribe:{
        type: Boolean,
        required: true
    }
})

const Subscribe = mongoose.model('Subscribe', subscribeSchema)

export default Subscribe