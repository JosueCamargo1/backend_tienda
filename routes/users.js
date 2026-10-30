import express from "express"
import Usuarios from "../controllers/users.js";      
const router = express.Router();

router.get("/", Usuarios.get ); 

router.post("/", Usuarios.post );

router.put("/", Usuarios.put );

router.delete("/", Usuarios.delete );

export default router;