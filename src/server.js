import express from "express";
import { admClientRouter } from "./routes/admRoutes.js";
import { userClientRouter } from "./routes/userRoutes.js";
import { orgClientRouter } from "./routes/orgRoutes.js";
const app = express();

let port = 4000;

app.use(express.json())
app.use(admClientRouter);
app.use(userClientRouter);
app.use(orgClientRouter)

app.listen(port, ()=>{
    console.log("Server Run");
})