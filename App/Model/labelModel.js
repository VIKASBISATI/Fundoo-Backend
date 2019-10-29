//Author :-sai venkata vikas bisati

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const labelSchema = new schema({
    "userId": {
        type: String,
        required: true
    },
    "labelName": {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    })

exports.label = mongoose.model('label', labelSchema);