import { Router } from "express";

import { userRegister } from "../controllers/userController.js";

const userClientRouter = Router();

userClientRouter.post("/user-register", (req, res)=>{
    const {name, email, password, username, admcode} = req.body;
    const newUser = userRegister(name, email, password, username, admcode);

    res.json({newUser});
})

export {userClientRouter}