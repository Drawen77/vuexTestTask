import { createStore } from "vuex";

export default createStore({
  state: {
    ourData: [],
    jsonplaceholder: "https://jsonplaceholder.typicode.com",
    inputType: null,
    inputId: null,
    inputCount: 10
  },
  actions: {
    async search(ctx) {
        const res = await fetch(`${this.state.jsonplaceholder}${this.state.inputType}?_limit=${this.state.inputCount}`)
        const ourData = await res.json();
        ctx.commit("setResults", ourData);
    },
  },
  mutations: {
    setResults(state, ourData) {
      state.ourData = ourData
    },
  },
  modules: {},
  getters: {
    allData(state) {
      return state.ourData;
    },
  },
});
