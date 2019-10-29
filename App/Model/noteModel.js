const mongoose = require('mongoose');
const schema = mongoose.Schema;
const noteSchema = new schema({
    "userId": {
        type: String,
        required: true
    },
    "title": {
        type: String,
        required: true
    },
    "description": {
        type: String
    },
    "isTrash": {
        type: Boolean,
        default: false
    },
    "isArchive": {
        type: Boolean,
        default: false
    },
    "isPinned":{
        type:Boolean,
        default:false
    },
    "reminder": {
        type: String
    },
    "labels": [{
        "labelName": {
            type: String,
            unique:true,
            required:true
        },
        "noteId":{
            type:String,
            required:true,
        },
        "userId":{
            type:String,
            required:true
        }
    }],
    "color": {
        type: String
    }
}, {
    timestamps: true
})

exports.note = mongoose.model('note', noteSchema);