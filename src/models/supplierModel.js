import mongoose from 'mongoose'

const supplierSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone :{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    }
}, { timestamps: true,})

const Supplier = mongoose.model('Supplier', supplierSchema)

export default Supplier