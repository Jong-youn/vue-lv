import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js'

export default {
  
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

