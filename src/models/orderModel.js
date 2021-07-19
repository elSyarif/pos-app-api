import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
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
    total:{
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
    return:{
        type: Number,
        required : true
    },
    status:{
        type:String,
        required : true
    },
    bill:{
        type: Number,
        required : true 
    },
    dueDate: {
        type: Date,
        required: true
    },
    sellingStatus:{
        type:String,
        required : true
    },
    customer : {
        type:mongoose.Schema.Types.ObjectId,
        required :true,
        ref: "Customer"
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required :true,
        ref: "Users"
    },
}, {timestamps :true})

const Order = mongosse.model('Order', orderSchema)

export default Order