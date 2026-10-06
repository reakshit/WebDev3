import express from "express";
import { getStudent } from "../controllers/students.js";
import { addStudent } from "../controllers/students.js";
import { updateStudent } from "../controllers/students.js";
import { deleteStudent } from "../controllers/students.js";
const router = express.Router()

router.get('/user',getStudent)
router.post('/add',addStudent)
router.put('/update/:id',updateStudent)
router.delete('/delete/:id',deleteStudent)


export default router