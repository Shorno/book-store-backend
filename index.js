import express from "express"
import {connectDB} from "./database.js";

const app = express()


connectDB()

app.get("/", (req, res) => {
    res.send("hello")
})
app.get("/api/", (req, res) => {
    res.send("Resources")
})


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Local server is running on http://localhost:${PORT}/api`)
})

