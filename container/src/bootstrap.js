import { navigateTo } from "../../routes/index.js";
import { header } from "../../components/header.js";

export const bootstrap = () => {
  const headerDiv = document.getElementById("header");
  headerDiv.appendChild(header());
  navigateTo("");
};
