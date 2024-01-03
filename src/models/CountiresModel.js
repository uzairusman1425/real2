import mongoose from "mongoose";
const CitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // Add other city fields as needed
});
const PropertiesSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["commercial", "residential"],
        required: true,
    },
    details: {
        commercial: {
            type: String,
        },
        residential: {
            type: String,
        },
    },
});
const CountriesSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    cities: [CitiesSchema], // Change city type to an array of CitiesSchema
    properties: [PropertiesSchema], // Change property type to an array of PropertiesSchema
});
const Country = mongoose.models.Country || mongoose.model("Country", CountriesSchema);
export default Country