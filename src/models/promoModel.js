import mongoose from 'mongoose'

const promoSchema = mongoose.Schema({
    outlet : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Outlet"
    },
    disc : {
        type: Number,
        required : true
    },
    type : {
        type: String,
        required : true
    },
    periode :{
        type : Date,
        required : true
    },
    until: {
        type: Date,
        required : true
    }
}, {timestamps : true})

const Promo = mongoose.model('Promo', promoSchema)

export default Promo