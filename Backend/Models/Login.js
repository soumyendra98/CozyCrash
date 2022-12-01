const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
},
{
    timestamps: true,
    collection: 'Logins'
});

module.exports = mongoose.model('Login', LoginSchema);