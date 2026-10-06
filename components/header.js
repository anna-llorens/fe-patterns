import { mountLink } from "./link.js";

export const header = () => {
  const homeLink = mountLink("Home", "home");
  const shipmentsLink = mountLink("Shipments", "shipments");
  const trackerLink = mountLink("Tracker", "tracker");

  const header = document.createElement("header");
  header.appendChild(homeLink);
  header.appendChild(shipmentsLink);
  header.appendChild(trackerLink);
  header.style.cssText = `
        display: flex;
        gap: 20px;
        background-color: #d1d1d1;
        padding: 20px;
        `;

  return header;
};
