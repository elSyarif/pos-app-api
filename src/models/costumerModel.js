import mongoose from 'mongoose'

const customerSchema = mongoose.Schema({
    outlet : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Outlet"
    },
    name:{
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    },
    email:{
        type : String,
        unique: true,
        required : true
    },
    address:{
        type : String,
        required : true
    },
})

const Customer = mongosse.model('Customer', customerSchema)

export default Customer