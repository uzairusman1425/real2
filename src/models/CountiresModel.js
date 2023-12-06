import mongoose from "mongoose"
const CountriesSchema = new mongoose.Schema({
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    property: {
        type: {
            type: String,
            enum: ["commercial", "residential"]
        },
        details: {
            commercial: {
                type: String,
            },
            residential: {
                type: String,
            }
        }
    }
})
const Country = mongoose.models.Country || mongoose.model("Country", CountriesSchema)
export default Country