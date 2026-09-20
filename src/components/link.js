import { navigateTo } from "../routes/index";

export const mountLink = (label, destinationRoute) => {
  const link = document.createElement("a");
  link.innerHTML = label;
  link.href = "javascript:void(0)";

  link.addEventListener("click", () => navigateTo(destinationRoute));

  return link;
};
