import { assertDatabaseConfigured, config } from "./config.js";
import { createApp } from "./app.js";
import { formatMessageLogLine, initLogUser } from "./logging/log.js";

assertDatabaseConfigured();

const app = createApp();

await initLogUser();

app.listen(config.port, () => {
  console.log(
    formatMessageLogLine(
      `API listening on http://localhost:${config.port}`,
    ),
  );
});
