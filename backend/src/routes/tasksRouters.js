import express from "express";
import {
  createTasks,
  deleteTasks,
  getAllTasks,
  updateTasks,
} from "../controllers/tasksControllers.js";

const router = express.Router();

//CRUD CREATE(post) READ(get) UPDATE(put) DELETE(delete)

router.post("/", createTasks);

router.get("/", getAllTasks);

router.put("/:id", updateTasks);

router.delete("/:id", deleteTasks);

export default router;
