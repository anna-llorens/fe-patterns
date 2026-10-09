import cors from "cors";
import express from "express";
import { getInstrumentDetail, getInstruments } from "./data/instruments.js";


const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(cors());

app.get("/api/instruments", (_req, res) => {
  res.json(getInstruments());
});

app.get("/api/instruments/:symbol", (req, res) => {
  const instrument = getInstrumentDetail(req.params.symbol);
  if (!instrument) {
    res.status(404).json({ error: "Instrument not found" });
    return;
  }
  res.json(instrument);
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
