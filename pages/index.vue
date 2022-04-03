<template lang="pug">
  .homepage
    app-rooms-section(:title="translate" :roomsData="roomsData")
    app-about-us(:whyUsImg="whyUsImg" )
    app-faq-section(:faq="faq" )
</template>

<script>
import AppIntro from '~/components/Intro'
import AppRoomsSection from '~/components/index/RoomsSection'
import AppAboutUs from '~/components/index/AboutUs'
import AppFaqSection from '~/components/index/Faq'

export default {
  components: {
    AppFaqSection,
    AppAboutUs,
    AppRoomsSection,
    AppIntro
  },
  data () {
    return {
      whyUsImg: null,
      roomsData: null,
      faq: null,
      ru: null,
      en: null
    }
  },
  async fetch () {
    this.whyUsImg = await this.$axios.$get('/why-us.json')
    this.roomsData = await this.$axios.$get('/rooms.json')
    this.faq = await this.$axios.$get('/faq.json')
    this.ru = await this.$axios.$get('/ru.json')
    this.en = await this.$axios.$get('/en.json')
  },
  computed: {
    translate () {
      return this.$t('roomsSection.titleAll')
    },
    actualLocale () {
      return this.$i18n.locale
    },
    computing () {
      return this.$tt
    }
  }
}
</script>
