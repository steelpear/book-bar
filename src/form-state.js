import Vue from 'vue'

const state = Vue.observable({
  adults: 2,
  childs: []
})

export const computed = {
  adults: {
    get: () => state.adults,
    set: (val) => state.adults = val
  },
  childs: {
    get: () => state.childs,
    set: (val) => state.childs = val
  }
}
