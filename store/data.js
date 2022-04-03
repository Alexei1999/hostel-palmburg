const SET_DATA = 'SET_DATA'
const SET_TRANSLATE = 'SET_TRANSLATE'

export const state = () => ({
  whyUsImg: null,
  roomsData: null,
  aboutUsImg: null,
  faq: null,
  services: null,

  $tt: val => val
})

export const getters = {
  whyUsImg: state => state.whyUsImg,
  roomsData: state => state.roomsData,
  aboutUsImg: state => state.aboutUsImg,
  services: state => state.services,
  faq: state => state.faq,
  $tt: state => state.$tt
}

export const mutations = {
  [SET_DATA]: (state, payload) => {
    state.whyUsImg = payload.whyUsImg
    state.roomsData = payload.roomsData
    state.aboutUsImg = payload.aboutUsImg
    state.faq = payload.faq
    state.services = payload.services
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
