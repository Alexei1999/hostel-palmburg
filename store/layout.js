const TOGGLE_BOOKING_MODAL = 'TOGGLE_BOOKING_MODAL'

export const state = () => ({
  isBookingModalOpen: false
})

export const mutations = {
  [TOGGLE_BOOKING_MODAL]: (state) => { state.isBookingModalOpen = !state.isBookingModalOpen }
}

export const actions = {
  toggleBookingModal ({ commit }) {
    commit(TOGGLE_BOOKING_MODAL)
  }
}
