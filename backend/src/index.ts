import express from "express";
import http from "http";
import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import compression from "compression";
import cors from "cors";
import { config } from "dotenv";
import productRoutes from "@/routes/productRoutes";

// Load environment variables from .env file
config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
// app.use(compression());
app.use(bodyParser.json());
// app.use(cookieParser());

// Routes
app.use("/api", productRoutes);

const server = http.createServer(app);

// Start server
server.listen(9080, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Access Token is: ${process.env.MELI_ACCESS_TOKEN}`);
});
