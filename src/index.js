import { mountHeader } from "./components/header.js";
import { navigateTo } from "./routes/index.js";

const headerDiv = document.getElementById("header");
const header = mountHeader();

headerDiv.appendChild(header);

await navigateTo("");