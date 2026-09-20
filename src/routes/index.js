import { renderHomePage } from "../pages/home";
import { renderDetailsPage } from "../pages/detail";

export const ROUTES = {
  "": renderHomePage,
  home: renderHomePage,
  detail: renderDetailsPage,
};

export const navigateTo = async (destinationRoute) => {
  const functionDestinationRoute = ROUTES[destinationRoute];

  if (!functionDestinationRoute) {
    console.error("destinationRoute not defined as possible route", ROUTES);
  }

  const rootDiv = document.getElementById("view");
  rootDiv.innerHTML = "";
  await functionDestinationRoute();
};