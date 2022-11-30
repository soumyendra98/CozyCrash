const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    _id: Schema.Types.ObjectId,
    society_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Society",
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    category: {
        type: String,
        required: true,
        enum: ["Plumbing", "Electricity", "Cleaning"],
    },
    status: {
        type: String,
        required: true,
        enum: ["Pending", "In Progress", "Completed"],
    },
    isEmergency: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
    collection: "Requests",
},
);

module.exports = mongoose.model("Request", RequestSchema);