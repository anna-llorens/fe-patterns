import { mountHomePage } from "../container/src/home.js";

const loadShipmentsPage = async (rootDiv) => {
  const { mountShipmentsPage } = await import("shipments/ShipmentsIndex");
  mountShipmentsPage(rootDiv);
};

const loadTrackingPage = async (rootDiv) => {
  const { mountTrackingPage } = await import("tracker/TrackerIndex");
  mountTrackingPage(rootDiv);
};

export const ROUTES = {
  "": mountHomePage,
  home: mountHomePage,
  tracking: loadTrackingPage,
  tracker: loadTrackingPage,
  shipments: loadShipmentsPage,
};

export const navigateTo = async (destinationRoute) => {
  const functionDestinationRoute = ROUTES[destinationRoute];

  if (!functionDestinationRoute) {
    console.error("destinationRoute not defined as possible route", ROUTES);
    return;
  }

  const rootDiv = document.getElementById("view");
  rootDiv.innerHTML = "";
  await functionDestinationRoute(rootDiv);
};
