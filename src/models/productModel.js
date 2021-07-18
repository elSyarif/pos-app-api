import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    brand : {
        type: String,
        require: true
    },
    model: {
        type: String,
        require:true
    },
    price: {
        type: Number,
        require:true,
        default: 0
    },
    cost: {
        type:Number,
        require: true,
        default:0
    },
    unit:{
        type: String,
        require:true
    },
    images:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: 'Category'
    },
    suppliers:{
        type:mongoose.Schema.Types.ObjectId,
        require :true,
        ref: "Supplier"
    }
}, { timestamps: true,})

const Product = mongoose.model('Product', productSchema)

export default Product