import { title } from "../components/title";
import { stateManager } from "../index";

export const renderDetailsPage = () => {
  const rootDiv = document.getElementById("view");

  const bodyContainer = document.createElement("div");
  const pageTitle = title(
    "Here you can just check the increased counter in the previous screen"
  );

  const counter = title(stateManager.state.counter);

  bodyContainer.appendChild(pageTitle);
  bodyContainer.appendChild(counter);
  bodyContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    align-items: center;
`;

  rootDiv.appendChild(bodyContainer);
};