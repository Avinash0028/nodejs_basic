import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

import routes from "./routers/router.js";
import errorHandler from "./utils/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
app.use(errorHandler)

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});