import {Mobile} from "../models/Mobiles.js";


export const addMobile = async (req, res) => {
    const mobile = new Mobile(
        {
            brand: "Apple",
            name: "iPhone 15 Pro",
            releaseDate: "2023-09-22",
            price: 999,
            ratings: 4.8
        }
    )

    const result = await mobile.save()
    console.log(result)
}

export const getMobileData = async (req, res) => {
    try {
        const mobiles = await Mobile.find({})
        res.status(200).json({
            status: "success",
            results: mobiles.length,
            data: mobiles
        })
    } catch (error) {
        console.log(error)
    }
}