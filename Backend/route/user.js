import  express from "express";
import { userSignup,userLogin } from "../controller/user.js";


const router = express.Router();

router.post("/signup",userSignup);
router.post("/signin",userLogin);
export default router ;