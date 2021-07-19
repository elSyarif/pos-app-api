import mongoose from 'mongoose'

const supplierSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone :{
        type: String,
        required: true
    },
    Person:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required: true
    },
    outlet : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Outlet"
    },
}, { timestamps: true,})

const Supplier = mongoose.model('Supplier', supplierSchema)

export default Supplier