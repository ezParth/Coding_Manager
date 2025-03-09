import app from "./app"
import connectDB from "./config/db"
import dotenv from "dotenv"
import path = require("path");

dotenv.config({path: path.resolve(__dirname, "./config/.env")});

const PORT = process.env.PORT || 3000

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
