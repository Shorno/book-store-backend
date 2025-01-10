import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
import morgan from "morgan"

app.use(morgan("dev"))

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
const PORT = process.env.PORT;
import mobileRouter from "./routes/mobileRoutes.js"
import userRouter from "./routes/userRoutes.js"
import authRouter from "./routes/authRoutes.js"
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
app.use("/api/auth", authRouter)

app.listen(PORT, () => {
    console.log(`Local server is running on http://localhost:${PORT}/api`)
})

