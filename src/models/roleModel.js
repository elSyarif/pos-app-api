import mongoose from 'mongoose'
import Permission from './permissionModel.js'

const roleSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    permissions: [
        {
            name : {
                type: String,
                required: true
            },
            permission: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Permission"
            }
        }
    ]
}, {
    timestamps: true,
  })

const Roles = mongoose.model('Roles', roleSchema)

export default Roles