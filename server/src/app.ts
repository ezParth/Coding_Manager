// import express from "express"
// import cors from "cors"
// import authRoutes from "./routes/authRoutes"

// const app = express();

// // app.use(cors({
// //     origin: "http://localhost:5173",
// //     credentials: true,
// // }))

// // app.use(cors({
// //     origin: ['http://localhost:5173', 'http://43.204.140.42:5173'], // Allow both local and live frontend
// //     credentials: true
// // }));

// // app.use(cors({
// //     origin: ["http://localhost:5173", "http://43.204.140.42:5173", "http://127.0.0.1:3000"], // Explicitly define allowed origins
// //     credentials: true,
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //     allowedHeaders: ["Content-Type", "Authorization"]
// // }));

// const corsOpts = {
//     origin: '*',
//     credentials: true,
//     methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     // exposedHeaders: ['Content-Type', 'Authorization']
// };
// app.use(cors(corsOpts));


// app.use(express.json());

// app.use("/parth/cp", authRoutes);

// export default app;
