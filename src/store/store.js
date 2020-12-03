import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomParams: {
      selectedDays: {
        start: null,
        end: null,
        countDays: 8
      },
      guests: []
    },
    room: {
      num: 840,
      type: null,
      cost: 9990
    }
  },
  mutations: {
    clearDates(state) {
      state.roomParams.selectedDays.countDays = 0;
      state.roomParams.selectedDays.start =
        state.roomParams.selectedDays.end = null;
    },
    setStartDate(state, date) {
      state.roomParams.selectedDays.start = date;
    },
    setEndDate(state, date) {
      state.roomParams.selectedDays.end = date;
    },
    setIntervalDate(state, count) {
      state.roomParams.selectedDays.countDays = count;
    }

  },
  getters: {
    rooms: state => state.room,
    dates: state => state.roomParams.selectedDays
  }
});
