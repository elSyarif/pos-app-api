import mongoose from "mongoose";

const purchaseReturnSchema = mongoose.Schema({
    noRetur : {
        type: String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    invoice : {
        type : String,
        required : true
    },
    itemQty: {
        type: Number,
        required : true
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required :true,
        ref: "Users"
    }
}, {timestamps : true})

const PurchaseReturn = mongoose.model('PurchaseReturn', purchaseReturnSchema)

export default PurchaseReturn