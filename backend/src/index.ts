import cors from "cors";
import express from "express";
import { instruments } from "./data/instruments.js";

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(cors());

app.get("/api/instruments", (_req, res) => {
  res.json(instruments);
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
