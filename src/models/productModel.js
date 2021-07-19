import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    outlet : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Outlet"
    },
    title : {
        type: String,
        required: true
    },
    model: {
        type: String,
        required:true
    },
    slug:{
        type:String
    },
    price: {
        type: Number,
        required:true,
        default: 0
    },
    cost: {
        type:Number,
        required: true,
        default:0
    },
    stock: {
        type: Number,
        required: true,
        default:0
    },
    unit:{
        type: String,
        required:true
    },
    images:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    promo:{
        type: Boolean,
        default: false
    },
    category:[
        {
            name : {
                type: String,
                required : true
            },
            category : {
                type: mongoose.Schema.Types.ObjectId,
                required:true,
                ref: 'Category'
            }
        }
    ],
    suppliers:{
        type:mongoose.Schema.Types.ObjectId,
        required :true,
        ref: "Supplier"
    }
}, { timestamps: true,})

const Product = mongoose.model('Product', productSchema)

export default Product