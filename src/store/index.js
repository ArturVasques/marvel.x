import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      showLoader: false,
    };
  },
  mutations: {
    loaderOn(state) {
      state.showLoader = true;
    },
    loaderOff(state) {
      state.showLoader = false;
    },
  },
  getters: {
    loader(state) {
      return state.showLoader;
    },
  },
});
