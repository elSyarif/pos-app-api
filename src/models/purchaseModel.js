import mongoose from 'mongoose'

const purchaseSchema = mongoose.Schema({
    outlet : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Outlet"
    },
    invoice: {
        type:String,
        required : true
    },
    date: {
        type: Date,
        required : true
    },
    totalQty : {
        type: Number,
        required : true
    },
    total : {
        type: Number,
        required : true
    },
    items:[
        {
            product: {
                type:mongoose.Schema.Types.ObjectId,
                required :true,
                ref: "Product"
            },
            qty: {
                type: Number,
                required : true
            },
            price : {
                type: Number,
                required : true
            },
            subtotal : {
                type: Number,
                required : true
            },
            image: { 
                type: String, 
                required: true 
            },
        }
    ],
    pay: {
        type: Number,
        required : true
    },
    status:{
        type:String,
        required : true
    },
    debt:{
        type: Number,
        required : true
    },
    dueDate: {
        type: Date,
        required: true
    },
    buyStatus:{
        type:String,
        required : true
    },
    suppliers:{
        type:mongoose.Schema.Types.ObjectId,
        required :true,
        ref: "Supplier"
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required :true,
        ref: "Users"
    },
    day:{
        type: Number,
        required : true
    }
})

const Purchase = mongosse.model('Purchase', purchaseSchema)

export default Purchase