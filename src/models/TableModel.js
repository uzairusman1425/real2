import mongoose, { Types } from "mongoose";

const tableSchema = new mongoose.Schema({

    ParentCity: {
        type: String,
        ref: "Country",
        required: true
    },

    cityName: {
        type: String,
        required: true
    },
    averagePrice: {
        type: Number,
        required: true,

    },
    troughCurrent: {
        type: Number,
        required: true,
        min: -100,
        max: 100
    },
    peakCurrent: {
        type: Number,
        required: true,
        min: -100,
        max: 100
    },
    last12Month: {
        type: Number,
        required: true,
        min: -100,
        max: 100
    },
    last3Month: {
        type: Number,
        required: true,
        min: -100,
        max: 100
    },
    lastMonth: {
        type: Number,
        required: true,
        min: -100,
        max: 100
    },
    yearOnYear: {
        type: [Number],
        required: true,
        validate: {
            validator: function (array) {
                return array.length === 12 && array.every(val => val >= -100 && val <= 100);
            },
            message: "yearOnYear should have exactly 12 numbers within the range of -100 to 100."
        }
    }
});

const TableData = mongoose.models.Data || mongoose.model("Data", tableSchema);

export default TableData
