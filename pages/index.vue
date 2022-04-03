<template lang="pug">
  .homepage
    app-rooms-section(:title="translate" :roomsData="roomsData")
    app-about-us(:whyUsImg="whyUsImg" )
    app-faq-section(:faq="faq" )
</template>

<script>
import { mapState } from 'vuex'
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
  computed: {
    ...mapState('data', ['$tt', 'whyUsImg', 'roomsData', 'faq']),
    translate () {
      return this.$tt('roomsSection.titleAll')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  }
}
</script>
