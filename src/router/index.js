import { Router } from "express";

const RouterManager = Router();

RouterManager
.get('/', (req, res) => {
    res.send('<h1>Chat Api</h1>');
})

export default RouterManager;