import { assertDatabaseConfigured, config } from "./config.js";
import { createApp } from "./app.js";

assertDatabaseConfigured();

const app = createApp();

app.listen(config.port, () => {
  console.log(`API listening on http://localhost:${config.port}`);
});
