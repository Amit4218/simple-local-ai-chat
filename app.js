import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ConnectDb from "./config/db.config.js";
import userRoutes from "./routes/user.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import authMiddleware from "./middleware/auth.middleware.js";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

ConnectDb();

app.use("/api/vi/user", userRoutes);
app.use("/api/v1/ai", aiRoutes);

app.listen(PORT, () => {
  console.log(`app running at http://localhost:${PORT}`);
});
