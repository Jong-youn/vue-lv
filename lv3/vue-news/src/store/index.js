import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  getters: {
    fetchedNews(state) {
      return state.news;
    }
  },
  state: {
    news: [],
    jobs: [],
    ask: []
  },
  mutations,
  actions
})
