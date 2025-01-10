import mongoose from "mongoose";

const mobileSchema = new mongoose.Schema({
    brand: {type: String, required: true, trim: true},
    name: {type: String, unique: true, required: true, trim: true},
    releaseDate: {type: String, required: true, trim: true},
    price: {type: Number, required: true},
    ratings: {type: Number, required: true},
}, {timestamps: true})

export const Mobile = mongoose.model("Mobile", mobileSchema);


