<template lang="pug">
  .about-us
    .container
      app-about-us-card(:aboutUsImg="aboutUsImg")
      app-gallery
</template>

<script>
import { mapState } from 'vuex'
import AppAboutUsCard from '~/components/about-us/AboutUsCard'
import AppGallery from '~/components/about-us/Gallery'

export default {
  name: 'AboutUs',
  components: {
    AppGallery,
    AppAboutUsCard
  },
  computed: {
    ...mapState('data', ['aboutUsImg'])
  }
}
</script>
