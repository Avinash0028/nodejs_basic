import { Router } from "express";
import { tryCatch } from "../middlewares/tryCatch.js";

import { getHome } from "../controllers/controller.js";

const router = Router();

router.get("/", tryCatch(getHome));

export default router;