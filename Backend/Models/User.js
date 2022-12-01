const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    society_ids:[ {
        type: Schema.Types.ObjectId,
        ref: 'Society',
        required: true,
    }],
    unit_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Unit",
    },
    id_type: {
        type: String,
        required: true,
        enum: ["Passport", "SSN", "Driving License", "State ID"],
    },
    id_number: {
        type: String,
        required: true,
    },
    id_image: {
        type: String,
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"],
    },
    dob: {
        type: Date,
        required: true,
    },
    ethnicity:{
        type: String,
        required: true,
        enum: ["White", "Black", "Asian", "Hispanic", "Other"],
    },
    yearly_income: {
        type: Number,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
},
{
    timestamps: true,
    collection: 'Users'
}
);

module.exports = mongoose.model('User', UserSchema);