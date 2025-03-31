// import app from "./app"
import connectDB from "./config/db"
import dotenv from "dotenv"
import path from "path";
import cors from "cors"
import express from "express"
import authRoutes from "./routes/authRoutes"
const app = express();

dotenv.config({path: path.resolve(__dirname, "./config/.env")});

const PORT = process.env.PORT || 3000

const corsOpts = {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // Explicit origins
    credentials: true,
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'credentials'], // Add credentials
};
app.use(cors(corsOpts));


app.use(express.json());

app.use("/parth/cp", authRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
