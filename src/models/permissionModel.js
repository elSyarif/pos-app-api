import mongoose from "mongoose"

const permissionSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
}, {timestamp : true})

const Permission = mongoose.model('Permission', permissionSchema)

export default Permission