import express from "express";
import tasksRoute from "./routes/tasksRouters.js";
import dns from "dns";
import cors from "cors";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

//middleware trạm kiểm soát mà mọi req phải đi qua trước khi tới router
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/tasks", tasksRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
  });
});
