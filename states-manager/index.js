export const stateManager = {
  state: { counter: 0, shipments: [] },

  updateState(newState) {
    this.state = { ...this.state, ...newState };
  },

  getState() {
    return { ...this.state };
  },
};