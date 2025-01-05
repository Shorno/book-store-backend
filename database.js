import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


const DATABASE_URL = process.env.DATABASE_URL

export const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL)
        const connectionInstance = await mongoose.connect(DATABASE_URL)
        const collections = await connectionInstance.connection.db.listCollections().toArray()
        console.log(`MongoDB connected ✅. DB HOST: ${connectionInstance.connection.host}`)
        console.log("Available collections:", collections.map(collection => collection.name))
    } catch (error) {
        console.log("MongoDB connection error ❌ ", error)
        process.exit(1)
    }
}

