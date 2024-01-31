import { Router } from "express";

import {
    admRegister,
    userSearch
} from "../controllers/admController.js";

const admClientRouter = Router();

admClientRouter.post("/adm-register", (req, res)=>{
    const {admemail, admpassword, name, email, password, username, adm} = req.body;
    const newAdm = admRegister(admemail, admpassword, name, email, password, username, adm);

    res.json({newAdm});
})

admClientRouter.get("/user-search", (req, res)=>{
    const {email, password, data, value} = req.body;
    const findUser = userSearch(email, password, data, value);

    res.json({findUser});
})

export {admClientRouter}