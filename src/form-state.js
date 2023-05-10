import Vue from 'vue'

const startDate = new Date()
const endDate = new Date()
startDate.setDate(new Date().getDate() + 19)
endDate.setDate(new Date().getDate() + 26)

const state = Vue.observable({
  adults: 2,
  childs: [],
  dates: [startDate.toISOString().slice(0, 10), endDate.toISOString().slice(0, 10)]
})

export const computed = {
  adults: {
    get: () => state.adults,
    set: (val) => state.adults = val
  },
  childs: {
    get: () => state.childs,
    set: (val) => state.childs = val
  },
  dates: {
    get: () => state.dates,
    set: (val) => state.dates = val
  }
}
