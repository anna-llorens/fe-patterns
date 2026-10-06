import { title } from "../../components/title.js";
import { button } from "../../components/button.js";
import { stateManager } from "../../states-manager/index.js";

export const mountHomePage = async (rootDiv) => {
  const bodyContainer = document.createElement("div");
  const pageLocation = title("This is main home page");
  const pageTitle = title("Here you can increase the counter");
  const counterLabel = title(stateManager.state.counter);

  const increaseCounterBtn = button("Increase", () => {
    stateManager.updateState({ counter: stateManager.state.counter + 1 });
    counterLabel.innerHTML = stateManager.state.counter;
  });

  bodyContainer.appendChild(pageLocation);
  bodyContainer.appendChild(pageTitle);
  bodyContainer.appendChild(counterLabel);
  bodyContainer.appendChild(increaseCounterBtn);

  bodyContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    align-items: center;
`;

  rootDiv.appendChild(bodyContainer);
};
