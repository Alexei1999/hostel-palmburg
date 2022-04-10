const SET_DATA = 'SET_DATA'
const SET_TRANSLATE = 'SET_TRANSLATE'

export const state = () => ({
  whyUsImg: null,
  roomsData: null,
  aboutUsImg: null,
  faq: null,
  services: null,
  sharesData: null,
  reviews: null,
  news: null,

  $tt: val => val
})

export const mutations = {
  [SET_DATA]: (state, payload) => {
    state.sharesData = payload.sharesData
    state.whyUsImg = payload.whyUsImg
    state.roomsData = payload.roomsData
    state.reviews = payload.reviews
    state.aboutUsImg = payload.aboutUsImg
    state.faq = payload.faq
    state.services = payload.services
    state.news = payload.news
  },
  [SET_TRANSLATE]: (state, payload) => {
    state.$tt = payload
  }
}

export const actions = {
  setData ({ commit }, payload) {
    if (payload) {
      commit(SET_DATA, payload)
    }
  },
  setTranslate ({ commit }, payload) {
    if (payload) {
      commit(SET_TRANSLATE, payload)
    }
  }
}
