<template lang="pug">
  .homepage
    app-rooms-section(:title="translate")
    app-about-us
    app-faq-section
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
  computed: {
    translate () {
      return this.$t('roomsSection.titleAll')
    },
    actualLocale () {
      return this.$i18n.locale
    }
  }
}
</script>
