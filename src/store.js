import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    personData: {
      isAfraid: null,
      comfortableDaytime: null,
      age: null,
      hasDreamWithDeadPerson: null,
      isPersonMissing: null,
    },
  },
  mutations: {
    SET_YES_FEAR: (state) => {
      state.personData.isAfraid = true
    },
    SET_NO_FEAR: (state) => {
      state.personData.isAfraid = false
    },

    SET_DAYTIME_MORNING(state) {
      state.personData.comfortableDaytime = "morning"
    },
    SET_DAYTIME_NOON(state) {
      state.personData.comfortableDaytime = "noon"
    },
    SET_DAYTIME_EVENING(state) {
      state.personData.comfortableDaytime = "evening"
    },
    SET_DAYTIME_NIGHT(state) {
      state.personData.comfortableDaytime = "night"
    },

    SET_AGE(state, paylaod) {
      state.personData.age = paylaod
    },

    SET_DREAM_WITH_DEAD_YES(state) {
      state.personData.hasDreamWithDeadPerson = "yes"
    },
    SET_DREAM_WITH_DEAD_NO(state) {
      state.personData.hasDreamWithDeadPerson = "no"
    },
    SET_DREAM_WITH_DEAD_SOMETIMES(state) {
      state.personData.hasDreamWithDeadPerson = "sometimes"
    },

    SET_LISTEN_YES(state) {
      state.personData.isPersonMissing = "yes"
    },
    SET_LISTEN_DONT_KNOW(state) {
      state.personData.isPersonMissing = "dont know"
    },
  },
  actions: {
    SET_YES_FEAR({ commit }) {
      commit("SET_YES_FEAR")
    },
    SET_NO_FEAR({ commit }) {
      commit("SET_NO_FEAR")
    },

    SET_DAYTIME_MORNING({ commit }) {
      commit("SET_DAYTIME_MORNING")
    },
    SET_DAYTIME_NOON({ commit }) {
      commit("SET_DAYTIME_NOON")
    },
    SET_DAYTIME_EVENING({ commit }) {
      commit("SET_DAYTIME_EVENING")
    },
    SET_DAYTIME_NIGHT({ commit }) {
      commit("SET_DAYTIME_NIGHT")
    },

    SET_DREAM_WITH_DEAD_YES({ commit }) {
      commit("SET_DAYTIME_NIGHT")
    },
    SET_DREAM_WITH_DEAD_NO({ commit }) {
      commit("SET_DREAM_WITH_DEAD_NO")
    },
    SET_DREAM_WITH_DEAD_SOMETIMES({ commit }) {
      commit("SET_DREAM_WITH_DEAD_SOMETIMES")
    },

    SET_LISTEN_YES({ commit }) {
      commit("SET_LISTEN_YES")
    },
    SET_LISTEN_DONT_KNOW({ commit }) {
      commit("SET_LISTEN_DONT_KNOW")
    },
  },
  getters: {
    personAge(state) {
      return state.personData.age
    },
  },
})

export default store
