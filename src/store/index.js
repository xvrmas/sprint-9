// import { set } from 'core-js/core/dict'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardFilms: [],
    infoFilm: [],
    condition: true
  },
  getters: {
    getCardFilms(state) {
      return state.cardFilms
    },
    getUser(state) {
      return state.user
    },
    getPassword(state) {
      return state.cardFilms
    },

    getCondition(state) {
      return state.condition
    }
  },
  mutations: {
    setFilms(state, setFilmsAction) {
      state.cardFilms = setFilmsAction
    },
  },
  actions: {
    async GET_FILMS({ commit }) {
      const response = await fetch('https://ghibliapi.herokuapp.com/films/');
      const films = await response.json();
      commit('setFilms', films)
    },
    SET_CONDITION({ commit }) {
      const conditions = false;
      commit('setCondition', conditions)
    }
  },
  modules: {
  }
})
