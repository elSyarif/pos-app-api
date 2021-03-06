import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    outlet : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Outlet"
    },
    name:{
        type: String,
        required: true
    },
    images:{
        type: String,
        required: true
    },
},  { timestamps: true,})

const Category = mongoose.model('Category', categorySchema)

export default Category