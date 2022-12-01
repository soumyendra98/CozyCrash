const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SocietySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    contact: {
        type: {
            phone: {
                type: Number,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
        },
        required: true,
    },
    amenities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Amenity",
        },
    ],
},
{
    timestamps: true,
    collection: 'Societies',
});


module.exports = mongoose.model('Society', SocietySchema);