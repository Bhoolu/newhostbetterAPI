const mongoose = require("mongoose");

const { schema } = require("mongoose");

const GuestSchema = mongoose.Schema(
  {
    HOST: {
      type: String,
      required: true,
    },
    TITLE: { type: String, required: true },

    PHONENUMBER: {
      type: String,
      required: true,
    },

    EMAIL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Guest = mongoose.model("Guest", GuestSchema);
module.exports = Guest;
