import mongoose from "mongoose";

const outletSchema = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    address:{
        type: String,
        required : true
    },
    website:{
        type: String,
        required : true
    },
    phone:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
}, {timestamps : true})

const Outlet = mongoose.model('Outlet', outletSchema)

export default Outlet