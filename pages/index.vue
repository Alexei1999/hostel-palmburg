<template lang="pug">
  .homepage
    app-shares
    app-rooms-section
    app-about-us
    app-reviews
    app-news
    app-faq-section
</template>

<script>
import AppIntro from '~/components/Intro'
import AppRoomsSection from '~/components/index/RoomsSection'
import AppAboutUs from '~/components/index/AboutUs'
import AppFaqSection from '~/components/index/Faq'
import AppShares from '~/components/index/Shares'
import AppReviews from '~/components/index/Reviews'
import AppNews from '~/components/index/News'

export default {
  components: {
    AppShares,
    AppFaqSection,
    AppAboutUs,
    AppRoomsSection,
    AppIntro,
    AppReviews,
    AppNews
  }
}
</script>
