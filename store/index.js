export const state = () => ({
  locale: 'ru',
  locales: [
    {
      code: 'ru',
      name: 'Русский'
    },
    {
      code: 'en',
      name: 'English'
    }]
})

export const mutations = {
  setLanguage (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
