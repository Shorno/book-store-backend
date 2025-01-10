import express from "express"
import cors from "cors"
const app = express()
import morgan from "morgan"
app.use(morgan("dev"))
app.use(express.json());
app.use(cors(
    {
        origin: "*"
    }
));
const PORT = process.env.PORT;
import mobileRouter from "./routes/mobileRoutes.js"
import userRouter from "./routes/userRoutes.js"
import {connectDB} from "./database.js";


connectDB()



app.get("/", (req, res) => {
    res.send("hello")
})
app.get("/api/", (req, res) => {
    res.send("Resources are on the /api endpoint")
})

app.use("/api/mobiles", mobileRouter)
app.use("/api/users", userRouter)



app.listen(PORT, () => {
    console.log(`Local server is running on http://localhost:${PORT}/api`)
})

