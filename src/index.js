export { stateManager } from "./states-manager/index.js";

import { navigateTo } from "./routes/index.js";
import { header } from "./components/header.js";

const headerDiv = document.getElementById("header");
headerDiv.appendChild(header());

await navigateTo("");
