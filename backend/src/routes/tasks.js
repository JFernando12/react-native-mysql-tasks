import { Router } from "express";
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from "../controllers/tasks"

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      sumary: Get all tasks
 *      tags: [Tasks]
 */
router.get("/tasks", getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      sumary: Get total task counter
 *      tags: [Tasks]
 */
router.get("/tasks/count", getTaskCount)

/**
 * @swagger
 * /tasks:
 *  get:
 *      sumary: Get a task by id
 *      tags: [Tasks]
 */
router.get("/tasks/:id", getTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *      sumary: Save a new task
 *      tags: [Tasks]
 */
router.post("/tasks", saveTask)

/**
 * @swagger
 * /tasks:
 *  delete:
 *      sumary: Delete a task by id
 *      tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask)

/**
 * @swagger
 * /tasks:
 *  put:
 *      sumary: Update a task by id
 *      tags: [Tasks]
 */
router.put("/tasks/:id", updateTask)


export default router;