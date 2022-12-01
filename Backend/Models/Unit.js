const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
    society_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Society",
    },
    size: {
        type: {
            area: {
                type: Number,
                required: true,
            },
            unit: {
                type: String,
                required: true,
                enum: ["Sq. Ft.", "Sq. Yd.", "Sq. Mtr."],
            },
        },
        _id: false,  
        required: true,
    },
    parkings: {
        type: Number,
        required: true,
    },
    isPetFriendly: {
        type: Boolean,
        required: true,
    },
    blueprint: {
        type: String,
    },
    rent: [
        {
            type: 
                {
                    value: { 
                        type: Number,
                        required: true,
                    },
                    fromDate: {
                        type: Date,
                        required: true,
                    },
                    toDate: {
                        type: Date,
                        required: true,
                    },
                },
            _id: false,
        }
    ],
    isRented: {
        type: Boolean,
        required: true,
    },
    rentedTill: {
        type: Date,

    },
    beds: {
        type: Number,
        required: true,
    },
    baths: {
        type: Number,
        required: true,
    },
    maxCapacity: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
    collection: "Units",
}
);

module.exports = mongoose.model("Unit", UnitSchema);

