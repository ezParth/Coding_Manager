import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoutes"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json());

app.use("/apps/cp", authRoutes);

export default app;
