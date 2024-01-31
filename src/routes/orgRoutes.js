import { Router } from "express";

import { 
    orgRegister,
    orgSearchByName,
    orgsByAdress 
} from "../controllers/orgController.js";

const orgClientRouter = Router();

orgClientRouter.post("/org-register", (req, res)=>{
    const {name, adress, website, description, contact} = req.body;
    const newOrg = orgRegister(name, adress, website, description, contact);

    res.json({newOrg});
})

orgClientRouter.get("/org-search", (req, res)=>{
    const {orgName} = req.body;
    const orgListResponse = orgSearchByName(orgName);

    res.json({orgListResponse})
})

orgClientRouter.get("/org-search-by-adress", (req, res)=>{
    const {location} = req.body;
    const orgListResponse = orgsByAdress(location)

    res.json({orgListResponse})
})

export {orgClientRouter}