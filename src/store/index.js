import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	  downloadLink: ''
  },
  mutations: {
		SET_LINK (state, data) {
			state.downloadLink = data
		}
  },
  actions: {},
  modules: {}
});
