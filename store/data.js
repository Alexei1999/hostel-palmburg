const SET_DATA = 'SET_DATA'
const SET_TRANSLATE = 'SET_TRANSLATE'

export const state = () => ({
  whyUsImg: process.env.whyUsImg || null,
  roomsData: process.env.roomsData || null,
  aboutUsImg: process.env.aboutUsImg || null,
  faq: process.env.faq || null,
  services: process.env.services || null,
  sharesData: process.env.sharesData || null,
  reviews: process.env.reviews || null,
  news: process.env.news || null,
  newHostels: process.env.newHostels || null,

  $tt: (val) => {
    return typeof val === 'string' ? '  '.repeat(val.length) : ''
  }
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
    state.rating = payload.rating
    state.newHostels = payload.newHostels
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
