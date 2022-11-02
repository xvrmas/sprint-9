// import { set } from 'core-js/core/dict'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardFilms: [],
    infoFilm: [],
    condition: true,
    posts: [
      {
        id: '1',
        text: "Bowl castle calcifer",
        img: require("@/assets/store/howls-moving-castle-calcifer.jpg"),
        price: 35
      },
      {
        id: '2',
        text: "Bowl ponyo on the waves",
        img: require("@/assets/store/ponyo-on-the-waves-mug.jpg"),
        price: 35

      },
      {
        id: '3',
        text: "T-shirt totoro and friends",
        img: require("@/assets/store/studio-ghibli-merchs-t-shirt.jpg"),
        price: 85

      },
      {
        id: '4',
        text: "T-Shirt universe ghibli",
        img: require("@/assets/store/Studio-Ghibli-Universe-All-Characters-T-Shirt-1-800x800.jpg"),
        price: 74

      },
      {
        id: '5',
        text: "piggy bank spirited away",
        img: require("@/assets/store/main46.jpg"),
        price: 79

      },
      {
        id: '6',
        text: "paperweight totoro bus stop",
        img: require("@/assets/store/my-neighbor-totoro-umbrella-set-pvc-figures.jpg"),
        price: 95

      },
    ],
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
    },
    getPosts(state) {
      return state.posts
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
