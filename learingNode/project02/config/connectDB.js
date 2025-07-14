
import mongoose from "mongoose";


const connectDB = async () => {

    try {
        await mongoose.connect(process.env.URL);
        // console.log("MongoDB is connect")

        console.log("✅ MongoDB is connected");


    } catch (error) {
        console.log('mongoDB', error)

    }


}





export default connectDB

