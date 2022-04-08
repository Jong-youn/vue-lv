import Vue from 'vue';
import Vuex from 'vuex';

import { fetchNewsList } from '../api/index.js'
import { fetchJobsList } from '../api/index.js'
import { fetchAskList } from '../api/index.js';

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
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
      })
      .catch(function(error) {
        console.log(error)
      })
    },
    FETCH_JOBS(context) {
      fetchJobsList()
      .then(response => {
        context.commit("SET_JOBS", response.data);
      })
      .catch(e => {
        console.log(e)
      })
    },
    FETCH_ASK({ commit }) {         // destructuring
      fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(function(e) {
        console.log(e)
      })
    }
  }
})
