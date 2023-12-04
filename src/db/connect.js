import mongoose from "mongoose";
async function connect() {
    try {
        const url = process.env.MONGODB_URI
        mongoose.connect(url)
        const connection = mongoose.connection
        console.log(connection.on);
        connection.on('connected', () => {
            console.log("connected");
        })
        connection.on('error', (error) => {
            console.log(error.message);
        })
    } catch (error) {
        console.error(errro.message);
    }
}
export default connect