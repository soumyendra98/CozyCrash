const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AmenitySchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: {
            typse: String,
            required: true,
        },
        society_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Society",
        },
        timings: {
            type: {
                start: {
                    required: true,
                    type: {
                        hours: Number,
                        minutes: Number,
                        seconds: Number
                    },
                },
                end: {
                    required: true,
                    type:{
                        hours: Number,
                        minutes: Number,
                        seconds: Number
                    },
                }
            },
        },
        capacity:{
            type: Number,
            required: true,
        },
        description: {
            type: String,
        },
        isSmoking: {
            type: Boolean,
            required: true,
        },
        isPetFriendly: {
            type: Boolean,
            required: true,
        }

    },
    { 
        timestamps: true,
        collection : 'Amenities' 
    }
);

module.exports = mongoose.model("Amenity", AmenitySchema);
