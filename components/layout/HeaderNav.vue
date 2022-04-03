<template lang="pug">
  nav.header-nav
    .header-nav__wrapper
      span.header-nav__booking-btn.btn.btn--secondary(@click="toggleBookingModal")
        a {{ booking }}
      ul.header-nav__list
        li(v-for='(link,index) in links' :key="index")
          nuxt-link.header-nav__link(:to="localePath(link.path)" :exact="link.exact") {{ link.name[actualLocale] }}
      .header-nav__i18n
        nuxt-link.header-nav__i18n-btn(@click.native="changeLanguage('ru')" :to="switchLocalePath('ru')" exact) РУС
        |  |
        nuxt-link.header-nav__i18n-btn(@click.native="changeLanguage('en')" :to="switchLocalePath('en')" exact) ENG
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { linksNav } from '~/content/links'

export default {
  name: 'AppHeaderNav',
  computed: {
    ...mapState('data', ['$tt']),
    links () {
      return linksNav
    },
    actualLocale () {
      return this.$i18n.locale
    },
    booking () {
      return this.$tt('common.booking')
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.setLocale(lang)
    },
    ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
