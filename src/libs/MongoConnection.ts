import mongoose from "mongoose";

export async function connectMongoDB() {
    try {
        if (mongoose.connection.readyState === 1) return mongoose.connection;
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("connected to Mongo DB")
    }
    catch (error) {
        console.log(error)
    }
}