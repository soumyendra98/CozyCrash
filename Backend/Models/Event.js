const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    timings: {
      type: {
        start: {
          required: true,
          type: {
            hours: Number,
            minutes: Number,
            seconds: Number,
          },
          _id: false,
        },
        end: {
          required: true,
          type: {
            hours: Number,
            minutes: Number,
            seconds: Number,
          },
          _id: false,
        },
      },
      _id: false,
    },
    venue: {
      type: String,
      required: true,
    },
    society_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Society",
    },
    capacity: {
      type: Number,
      required: true,
    },
    current_count: {
      type: Number,
      required: true,
      default: 0,
    },
    cost: {
      type: Number,
      required: true,
    },
    isPetFriendly: {
      type: Boolean,
      required: true,
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    collection: "Events",
  }
);

module.exports =
  mongoose.models["Event"] || mongoose.model("Event", EventSchema);
